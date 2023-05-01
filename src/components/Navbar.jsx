import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 text-white fixed w-full z-10 bg-[#32323280] backdrop-blur-sm">
      <Link to={"/"}>
        <h1 className="text-xl sm:text-2xl font-[Bruno]">My Portfolio</h1>
      </Link>
      <ul
        className={open ? "navMenu active" : "navMenu"}
        onClick={() => setOpen(false)}
      >
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/project"}>Projects</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </ul>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
