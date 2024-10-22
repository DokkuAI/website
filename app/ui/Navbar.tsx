"use client";

import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="container mx-auto flex items-center justify-between py-6">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 bg-gray-800 rounded-sm"></div>
        <span className="text-xl font-semibold">DocSpace</span>
      </div>
      <nav>
        <ul className="flex space-x-6">
          {["Features", "About", "Pricing", "Docs", "FAQs", "Team"].map(
            (item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
      <button className="px-4 py-2 bg-gray-800 text-white rounded-sm font-medium hover:bg-gray-700 transition-colors">
        Join Waitlist
      </button>
    </header>
  );
};

export default Navbar;
