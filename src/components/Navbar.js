import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from "../logo.png";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex items-center justify-between px-4 py-4 border-b">
      <img src={Logo} alt="logo" className="w-[50px]" />

      <div className="hidden md:flex space-x-8 items-center">
        <Link
          to="/about-us"
          className="hover-underline text-gray-400 hover:text-blue-600"
        >
          About Us
        </Link>
        <Link
          to="/watchlist"
          className="hover-underline text-gray-400 hover:text-blue-600"
        >
          Portfolio
        </Link>
        <Link
          to="/services"
          className="hover-underline text-gray-400 hover:text-blue-600"
        >
          Services
        </Link>
        <Link
          to="/web3"
          className="hover-underline text-gray-400 hover:text-blue-600"
        >
          Web 3
        </Link>
        <Link
          to="/resources"
          className="hover-underline text-gray-400 hover:text-blue-600"
        >
          Resources
        </Link>
        <Link
          to="/apps"
          className="hover-underline text-gray-400 hover:text-blue-600"
        >
          Apps
        </Link>
        <Link
          to="/contact-us"
          className="hover-underline text-gray-400 hover:text-blue-600"
        >
          Contact us
        </Link>
      </div>

      <div className="hidden md:block">
        <button
          onClick={() => navigate("/add")}
          className="bg-blue-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
        >
          Add a blog
        </button>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="w-6 h-6"
          />
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link
            to="/about-us"
            className="hover-underline text-gray-400 hover:text-blue-600"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/watchlist"
            className="hover-underline text-gray-400 hover:text-blue-600"
            onClick={toggleMenu}
          >
            Portfolio
          </Link>
          <Link
            to="/services"
            className="hover-underline text-gray-400 hover:text-blue-600"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/web3"
            className="hover-underline text-gray-400 hover:text-blue-600"
            onClick={toggleMenu}
          >
            Web 3
          </Link>
          <Link
            to="/resources"
            className="hover-underline text-gray-400 hover:text-blue-600"
            onClick={toggleMenu}
          >
            Resources
          </Link>
          <Link
            to="/apps"
            className="hover-underline text-gray-400 hover:text-blue-600"
            onClick={toggleMenu}
          >
            Apps
          </Link>
          <Link
            to="/contact-us"
            className="hover-underline text-gray-400 hover:text-blue-600"
            onClick={toggleMenu}
          >
            Contact us
          </Link>
          <button
            onClick={() => {
              navigate("/add");
              toggleMenu();
            }}
            className="bg-blue-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
          >
            Add a blog
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
