import React, { isValidElement } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-indigo-600 hover:bg-indigo-800 rounded-lg px-3 py-2 text-lg"
      : "text-white hover:bg-indigo-600 rounded-md px-3 py-2 text-lg";

  return (
    <nav className="bg-gray-800 p-4 px-6">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="text-white text-3xl font-bold">
            Haolin Li
          </NavLink>
        </div>
        <div className="md:ml-auto">
          <ul className="flex space-x-4">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
