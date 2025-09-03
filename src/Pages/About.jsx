// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          About Our Store 🛒
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold">Our E-Commerce Store</span>
          ! We’re passionate about bringing you the best products at unbeatable
          prices. Our mission is to make shopping simple, enjoyable, and
          accessible for everyone.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Whether you're looking for daily essentials, stylish fashion, or the
          latest gadgets, we’ve got you covered. We carefully select our
          products to ensure quality, affordability, and satisfaction for every
          customer.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          We believe shopping should be more than just buying things — it should
          be an experience. That’s why we provide a smooth online shopping
          journey, fast delivery, and excellent customer support.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow-md hover:bg-indigo-700 transition"
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default About;
