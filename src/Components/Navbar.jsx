import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X, User, LogOut } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { getCartCount } = useCart();
  const { isAuthenticated, user } = useAuth();
  
  const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/cart", label: "Cart" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          StoreFront
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-gray-700 dark:text-gray-200 hover:text-blue-600 ${
                  isActive ? "font-semibold text-blue-600" : ""
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <input
            className="hidden md:block px-3 py-1 border rounded-lg focus:outline-none focus:ring dark:bg-gray-800 dark:text-white"
            type="text"
            placeholder="Search.."
          />

          {/* Cart with badge (dynamic count) */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white px-1 rounded-full">
              {getCartCount()}
            </span>
          </Link>

          {/* User Login/Profile */}
          <Link to={isAuthenticated ? "/profile" : "/auth"}>
            <div className="relative">
              <User className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              {isAuthenticated && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
              )}
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu (only shows on small screens) */}
      {open && (
        <div className="md:hidden px-4 pb-3 bg-white dark:bg-gray-900 space-y-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 ${
                  isActive ? "font-semibold text-blue-600" : ""
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
