import React from "react";
import { useCart } from "../context/CartContext";
import { Trash, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-6 py-10 text-center">
        <h2 className="text-3xl font-bold mb-8">Your Cart</h2>
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <p className="text-gray-600 mb-6">Your cart is empty</p>
          <Link
            to="/products"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items (2/3 width on large screens) */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-center gap-4"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />

              {/* Product Details */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-gray-500">${item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Item Total */}
              <div className="text-right min-w-[80px]">
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
                aria-label="Remove item"
              >
                <Trash size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary (1/3 width on large screens) */}
        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>
                Items (
                {cartItems.reduce((total, item) => total + item.quantity, 0)}):
              </span>
              <span>${getTotalPrice()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
          </div>

          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>${getTotalPrice()}</span>
            </div>
          </div>

          <Link to="/checkout">
            <button className="cursor-pointer w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </Link>

          <Link
            to="/products"
            className="block text-center text-blue-600 mt-4 hover:underline"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
