"use client";

import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Shield,
  Truck,
  RotateCcw,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-body2">R</span>
              </div>
              <span className="text-heading3 font-bold">
                reis<span className="text-brand-400">Hub</span>
              </span>
            </div>
            <p className="text-body3 text-gray-300 leading-relaxed">
              Germany's leading price comparison platform. We help you find the
              best prices for millions of products and save money smartly.
              Compare prices from over 10,000 retailers across Germany.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-brand-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-brand-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-brand-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-brand-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-heading3 font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-body3 text-gray-300 hover:text-brand-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body3 text-gray-300 hover:text-brand-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body3 text-gray-300 hover:text-brand-400 transition-colors"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body3 text-gray-300 hover:text-brand-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body3 text-gray-300 hover:text-brand-400 transition-colors"
                >
                  Partner Program
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body3 text-gray-300 hover:text-brand-400 transition-colors"
                >
                  Become a Retailer
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-heading3 font-semibold text-white">
              Categories
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-body3 text-gray-300 hover:text-brand-400 transition-colors"
                >
                  Electronics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body3 text-gray-300 hover:text-brand-400 transition-colors"
                >
                  Fashion & Clothing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body3 text-gray-300 hover:text-brand-400 transition-colors"
                >
                  Home & Garden
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body3 text-gray-300 hover:text-brand-400 transition-colors"
                >
                  Sports & Leisure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body3 text-gray-300 hover:text-brand-400 transition-colors"
                >
                  Automotive
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body3 text-gray-300 hover:text-brand-400 transition-colors"
                >
                  Health & Beauty
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-heading3 font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-400 mt-0.5 flex-shrink-0" />
                <p className="text-body3 text-gray-300">
                  ReisHub GmbH
                  <br />
                  Friedrichstraße 123
                  <br />
                  10117 Berlin, Germany
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-400 flex-shrink-0" />
                <a
                  href="tel:+4930123456789"
                  className="text-body3 text-gray-300 hover:text-brand-400 transition-colors"
                >
                  +49 (30) 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-400 flex-shrink-0" />
                <a
                  href="mailto:info@reishub.de"
                  className="text-body3 text-gray-300 hover:text-brand-400 transition-colors"
                >
                  info@reishub.de
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features/Services Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center">
                <Truck className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <h4 className="text-body2 font-medium text-white">
                  Free Price Comparison
                </h4>
                <p className="text-caption1 text-gray-400">
                  Always find the best prices
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center">
                <RotateCcw className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <h4 className="text-body2 font-medium text-white">
                  Daily Updates
                </h4>
                <p className="text-caption1 text-gray-400">
                  Current prices & availability
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <h4 className="text-body2 font-medium text-white">
                  Safe & Trustworthy
                </h4>
                <p className="text-caption1 text-gray-400">
                  Verified retailers & reviews
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <h4 className="text-body2 font-medium text-white">
                  Direct Redirection
                </h4>
                <p className="text-caption1 text-gray-400">To the best deals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:mx-0">
            <h3 className="text-heading3 font-semibold text-white mb-4">
              Subscribe to Newsletter
            </h3>
            <p className="text-body3 text-gray-300 mb-6">
              Get the latest deals and price alerts delivered straight to your
              inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-brand-500 text-white font-medium rounded-lg hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-body3 text-gray-400">
                © {currentYear} ReisHub. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-body3 text-gray-400 hover:text-brand-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-body3 text-gray-400 hover:text-brand-400 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-body3 text-gray-400 hover:text-brand-400 transition-colors"
                >
                  Imprint
                </a>
              </div>
            </div>

            {/* Trust Certifications */}
            <div className="flex items-center space-x-2">
              <span className="text-body3 text-gray-400 mr-2">
                Certified by:
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-6 bg-gray-700 rounded border border-gray-600 flex items-center justify-center">
                  <span className="text-xs text-gray-300 font-medium">TS</span>
                </div>
                <div className="w-10 h-6 bg-gray-700 rounded border border-gray-600 flex items-center justify-center">
                  <span className="text-xs text-gray-300 font-medium">TÜV</span>
                </div>
                <div className="w-10 h-6 bg-gray-700 rounded border border-gray-600 flex items-center justify-center">
                  <span className="text-xs text-gray-300 font-medium">SSL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
