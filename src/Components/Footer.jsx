import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            StoreFront
          </h2>
          <p className="mt-3 text-sm">
            Your one-stop shop for everything! Quality products at the best
            prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-blue-600">
                Products
              </Link>
            </li>

            <li>
              <Link to="/cart" className="hover:text-blue-600">
                Cart
              </Link>
            </li>

            <li>
              <Link to="/profile" className="hover:text-blue-600">
                Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="w-5 h-5 hover:text-blue-600">
              <a href="#">FAQs</a>
            </li>
            <li className="w-100 h-5 hover:text-blue-600">
              <a href="#">Shipping & Returns</a>
            </li>
            <li className="w-100 h-5 hover:text-blue-600">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="w-100 h-5 hover:text-blue-600">
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#">
              <Facebook className="w-5 h-5 hover:text-blue-600" />
            </a>
            <a href="#">
              <Twitter className="w-5 h-5 hover:text-blue-400" />
            </a>
            <a href="#">
              <Instagram className="w-5 h-5 hover:text-pink-500" />
            </a>
            <a href="#">
              <Github className="w-5 h-5 hover:text-gray-800 dark:hover:text-gray-100" />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} StoreFront. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
