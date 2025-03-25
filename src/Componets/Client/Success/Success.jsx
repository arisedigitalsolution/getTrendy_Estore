import { useState } from "react";
import placeOrder from "../../../image/placeOrder.jpg";
import { Link } from "react-router-dom";
import "./Success.css"; // Custom styles for alignment and spacing
import Footer from "../Footer/Footer";


// import { Link } from 'react-router-dom';
// import Footer from '..Footer/Footer'; // Ensure this is correct
// import placeOrder from './path-to-image/placeOrder.jpg'; // Import image if it's not in the public folder

const Success = () => {
  return (
    <>
      <div className="container section ">
        <div className="col-lg-6 card card-align bg-white-1 p-8 rounded-2xl shadow-2xl w-96 text-center transform transition-all scale-105">
          <img src={placeOrder} alt="Success" className="mx-auto mb-4 img-width rounded-full shadow-lg" />
          <h2 className="text-xl font-bold text-gray-800 mb-4">Your order is placed successfully</h2>
          <div className="flex justify-between space-x-4">
            <Link to="/shop">
              <button className="px-5 py-2 w-1/2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Continue Shopping
              </button>
            </Link>
            <Link to="/myOrders">
              <button className="px-5 py-2 w-1/2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                Check Your Order
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;



