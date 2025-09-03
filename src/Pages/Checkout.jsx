import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [orderComplete, setOrderComplete] = useState(false);

  // Show login message if user is not authenticated
  if (!isAuthenticated && !orderComplete) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Please Login</h2>
        <p className="text-center mb-4">
          You must be logged in to proceed with checkout.
        </p>
        <button
          onClick={() =>
            navigate("/auth", { state: { from: { pathname: "/checkout" } } })
          }
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go to Login
        </button>
      </div>
    );
  }

  // Show message if cart is empty
  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Cart is Empty</h2>
        <p className="text-center mb-4">
          Add items to your cart before checking out.
        </p>
        <button
          onClick={() => navigate("/cart")}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go to Cart
        </button>
      </div>
    );
  }

  // Handle checkout
  const handleCheckout = () => {
    setOrderComplete(true);
    clearCart();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>

      {!orderComplete ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCheckout();
          }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Address"
            required
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="City"
            required
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="ZIP Code"
            required
            className="w-full p-2 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg text-white bg-[#155DFC] hover:bg-[#0E46C7] cursor-pointer"
          >
            Complete Order
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-bold text-green-600 mb-4">
            Order Complete!
          </h3>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Return to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
