import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../AuthContext/AuthContext";
import { BASEURL } from "../Client/Comman/CommanConstans";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { userToken } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0); // Total number of items in cart
  const [loading, setLoading] = useState(false);
  //console.log("userToken from CartProvider", userToken);

  // Fetch Cart Items (GET request)
  const fetchCartItems = async () => {
    try {
      setLoading(true);
  
      const userId = localStorage.getItem("userId"); // Ensure userId exists
      if (!userId) {
        console.error("User ID is missing");
        return;
      }
  
      const response = await axios.get(`${BASEURL}api/cart/${userId}`, {
        headers: {
          "x-access-token": userToken,
        },
      });
  
      console.log("Cart items response:", response);
  
      if (response.data) {
        setCartItems(response.data.rows);
        setCartQuantity(response.data.count);
      }
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    } finally {
      setLoading(false);
    }
  };
  

  // Add item to cart (POST request)
  const addToCart = async (product, quantity , size) => {
    console.log("Adding to cart:", product, quantity);

    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
        toast.error("User not authenticated");
        return;
    }

    try {
      const payload = {
        userId: localStorage.getItem("userId"), // Ensure this key matches the backend expectations
        productId: product._id, // Change "product" to "productId" to match JSON structure
        quantity: quantity,
        selectedSize: size, // Ensure 'size' is correctly set before passing
    };
    

        console.log("Request URL:", `${BASEURL}api/cart/add`);
        console.log("Payload being sent:", payload );

        const response = await axios.post(`${BASEURL}/api/cart/add`, payload, {
            headers: {
                "x-access-token": userToken,
            },
        });

        console.log("API Response:", response.data);

        if (response.data) {
            const newCartItem = response.data.data;
            const existingItem = cartItems?.find((item) => item._id === product._id);

            if (existingItem) {
                setCartItems((prevItems) =>
                    prevItems.map((item) =>
                        item._id === product._id
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    )
                );
            } else {
                setCartItems((prevItems) => [
                    ...prevItems,
                    { ...newCartItem, quantity: quantity },
                ]);
            }

            setCartQuantity((prevQuantity) => prevQuantity + quantity);

            toast.success("Product added to cart");
        }
    } catch (error) {
        console.error("Add to cart error:", error.response?.data || error.message);

        const errorMessage = error.response?.data?.message || "Failed to add product to cart";
        toast.error(errorMessage);
    }
};


  // Update cart quantity
  const updateCartQuantity = async (product, newQuantity) => {
    if (newQuantity < 1) {
      // If the quantity is less than 1, remove the item from the cart
      removeFromCart(product.id);
      return;
    }

    try {
      const payload = {
        product: product.product,
        quantity: newQuantity,
      };

      const response = await axios.put(
        `${BASEURL}/api/cart/add/${product.id}`,
        payload,
        {
          headers: {
            "x-access-token": userToken,
          },
        }
      );

      if (response.data) {
        // Update the cart items state with the new quantity
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.id === product.id ? { ...item, quantity: newQuantity } : item
          )
        );
        toast.success("Quantity updated successfully");
      }
    } catch (error) {
      console.error("Failed to update cart item:", error);
      toast.error("Failed to update cart item");
    }
  };

  // Remove item from cart (DELETE request)
  const removeFromCart = async (id) => {
    try {
      const response = await axios.delete(`${BASEURL}/orders/cart-item/${id}`, {
        headers: {
          "x-access-token": userToken,
        },
      });
      if (response.data) {
        // Remove the item from the cart state
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
        setCartQuantity((prevQuantity) => prevQuantity - 1);
        toast.success("Item removed from cart");
      }
    } catch (error) {
      console.error("Failed to remove item from cart:", error);
      toast.error("Failed to remove item from cart");
    }
  };

  useEffect(() => {
    if (userToken) {
      fetchCartItems();
    }
  }, [userToken]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        loading,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
