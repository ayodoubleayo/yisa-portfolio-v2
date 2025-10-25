"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition"
    >
      {theme === "light" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}
