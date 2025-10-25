"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Blog",
    "Achievements",
    "Contact",
    "Resume"
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-md bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold">
              YJ
            </div>
            <span className="font-bold text-gray-900 dark:text-gray-100 text-lg">
              MY PORTFOLIO
            </span>
          </div>

          {/* Center: desktop links */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((l) => (
              <Link
                key={l}
                href={
                  l === "Home"
                    ? "/"
                    : l === "Resume"
                    ? "/resume.pdf"
                    : `/${l.toLowerCase()}`
                }
                target={l === "Resume" ? "_blank" : "_self"}
                className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-orange-600 transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>

          {/* Right: Theme toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-gray-900 dark:text-gray-100 hover:text-orange-500 transition"
            >
              {!open ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-2 px-6 py-4 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          {links.map((l) => (
            <Link
              key={l}
             // Update the "Resume" link in Navbar
href={l === "Resume" ? "/resume-intermediate.pdf" : `/${l.toLowerCase()}`}
target={l === "Resume" ? "_blank" : "_self"}

              onClick={() => setOpen(false)}
              className="text-gray-900 dark:text-gray-100 hover:text-orange-500 transition"
            >
              {l}
            </Link>
          ))}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
