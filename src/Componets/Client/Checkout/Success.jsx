import { useState } from "react";
import placeOrderImage from "../../../image/placeOrder.jpg";
import { Link } from "react-router-dom";

const Popup = ({ image }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-center transform transition-all scale-105">
        <img src={placeOrderImage} alt="Success" className="mx-auto mb-4 w-40 h-40 rounded-full shadow-lg" />
        <h2 className="text-xl font-bold text-gray-800 mb-4">Your order is placed successfully</h2>
        <div className="flex justify-between space-x-4">
        <Link to="/shop">
          <button 
            className="px-5 py-2 w-1/2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          
          >
            Continue Shopping
          </button>
        </Link>
        <Link to="/myOrders">
          <button 
            className="px-5 py-2 w-1/2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
           
          >
            Check Your Order
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Success = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
     <Popup image={placeOrderImage} />
    </div>
  );
};

export default Success;

