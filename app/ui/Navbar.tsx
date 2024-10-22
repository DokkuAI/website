"use client";

import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="container mx-auto flex items-center justify-between py-6">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 bg-gray-800 rounded-sm"></div>
        <span className="text-xl font-semibold">DokkuAI</span>
      </div>
      <nav>
        <ul className="flex space-x-6">
          {["Features", "Testimonials", "Team", "FAQs"].map((item) => (
            <li className="text-lg font-medium" key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-gray-800 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(`${item.toLowerCase()}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="px-4 py-2 bg-gray-800 text-white rounded-sm font-medium hover:bg-gray-700 transition-colors">
        Join Waitlist
      </button>
    </header>
  );
};

export default Navbar;
