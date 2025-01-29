"use client";
import { Menu, Search, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; // Adjust path according to your project
import Link from "next/link";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("Home");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const menuItems = ["Home", "Shop", "Categories", "Contact"];

  // Accessing the cart items from Redux store

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.length;

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              className="md:hidden -ml-2 p-1 md:p-2"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <Menu className="md:h-6 md:w-6 h-4 w-4" />
            </button>
            <Link
              href={"/"}
              className="flex-shrink-0 flex items-center md:mr-0 mr-1"
            >
              <h1 className="md:text-2xl text-base font-bold text-primary">
                ShopHub
              </h1>
            </Link>
            <div className="hidden sm:ml-6 md:flex sm:space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setActiveLink(item)} // Set active link on click
                  className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                    activeLink === item
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-primary"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center ">
            <div className="flex items-center  bg-gray-100 rounded-full border-primary border px-3 py-1">
              <Search className="h-5 w-5 text-primary" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="md:ml-2 ml-1 w-full bg-transparent border-none flex-1 focus:outline-none text-sm"
              />
            </div>
            <Link href={"/cart"} className="md:ml-4 ml-1 flex items-center relative">
              <button className="md:p-2 p-1 rounded-full hover:bg-gray-100">
                <ShoppingCart className="md:h-6 h-5 md:w-6 w-5 text-primary" />
                {/* Display cart item count */}
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setActiveLink(item)} // Set active link on click
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  activeLink === item
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
