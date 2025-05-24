"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Search,
  User,
  Heart,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Search query:", searchQuery);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-brand-500 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-body2">R</span>
                </div>
                <span className="text-heading2 font-bold text-neutral-900">
                  reis<span className="text-brand-500">Hub</span>
                </span>
              </div>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-body2"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-brand-500 text-white p-2 rounded-md hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon - Mobile */}
            <button className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
              <Search className="h-5 w-5" />
            </button>

            {/* Login Button */}
            <button className="hidden sm:flex items-center space-x-2 text-gray-700 hover:text-brand-500 transition-colors">
              <User className="h-5 w-5" />
              <span className="text-body2 font-medium">Login</span>
            </button>

            {/* Wishlist */}
            <button className="relative p-2 text-gray-600 hover:text-brand-500 hover:bg-gray-100 rounded-md transition-colors">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-brand-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Cart */}
            <button className="relative p-2 text-gray-600 hover:text-brand-500 hover:bg-gray-100 rounded-md transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-brand-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="hidden lg:block bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 h-12 items-center">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-body2 font-medium text-gray-700 hover:text-brand-500 transition-colors">
                <span>Categories</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <a
              href="#"
              className="text-body2 font-medium text-gray-700 hover:text-brand-500 transition-colors"
            >
              Electronics
            </a>
            <a
              href="#"
              className="text-body2 font-medium text-gray-700 hover:text-brand-500 transition-colors"
            >
              Fashion
            </a>
            <a
              href="#"
              className="text-body2 font-medium text-gray-700 hover:text-brand-500 transition-colors"
            >
              Home & Garden
            </a>
            <a
              href="#"
              className="text-body2 font-medium text-gray-700 hover:text-brand-500 transition-colors"
            >
              Sports
            </a>
            <a
              href="#"
              className="text-body2 font-medium text-gray-700 hover:text-brand-500 transition-colors"
            >
              Books
            </a>
            <a
              href="#"
              className="text-body2 font-medium text-gray-700 hover:text-brand-500 transition-colors"
            >
              Deals
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {/* Mobile Search */}
            <div className="px-3 py-2">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products..."
                    className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-body2"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-brand-500 text-white p-2 rounded-md hover:bg-brand-600"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Mobile Navigation Links */}
            <a
              href="#"
              className="block px-3 py-2 text-body2 font-medium text-gray-700 hover:text-brand-500 hover:bg-gray-50"
            >
              Categories
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-body2 font-medium text-gray-700 hover:text-brand-500 hover:bg-gray-50"
            >
              Electronics
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-body2 font-medium text-gray-700 hover:text-brand-500 hover:bg-gray-50"
            >
              Fashion
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-body2 font-medium text-gray-700 hover:text-brand-500 hover:bg-gray-50"
            >
              Home & Garden
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-body2 font-medium text-gray-700 hover:text-brand-500 hover:bg-gray-50"
            >
              Sports
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-body2 font-medium text-gray-700 hover:text-brand-500 hover:bg-gray-50"
            >
              Books
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-body2 font-medium text-gray-700 hover:text-brand-500 hover:bg-gray-50"
            >
              Deals
            </a>

            {/* Mobile Login */}
            <div className="px-3 py-2 border-t border-gray-200 mt-4">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-brand-500 transition-colors">
                <User className="h-5 w-5" />
                <span className="text-body2 font-medium">Login</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
