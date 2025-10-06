import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "../data/data.js";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-secondary-100">
          Defranci
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-stretch h-full">
          {links.map((link) => (
            <li key={link.url} className="h-full">
              <NavLink
                to={link.url}
                className={({ isActive }) =>
                  link.label === "Contact us"
                    ? `flex items-center h-full px-4  transition ${
                        isActive
                          ? "bg-secondary-100 text-white ring-2 ring-secondary-100"
                          : "bg-secondary-100 text-white hover:bg-secondary-100/90"
                      }`
                    : `flex items-center h-full px-2 transition ${
                        isActive
                          ? "text-secondary-100 font-semibold border-b-2 border-primary-100"
                          : "text-primary-100 hover:text-primary-100/80"
                      }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-start py-4">
            {links.map((link) => (
              <li key={link.url} className="w-full">
                <NavLink
                  to={link.url}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    link.label === "Contact us"
                      ? `block px-5 py-2 w-full bg-primary-100 text-white  transition ${
                          isActive
                            ? "bg-primary-100"
                            : "hover:bg-primary-100/80"
                        }`
                      : `block px-5 py-4 w-full transition ${
                          isActive
                            ? "text-primary-100 font-semibold bg-primary-100/10"
                            : "text-gray-700 hover:text-secondary-100 hover:bg-primary-100/10"
                        }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
