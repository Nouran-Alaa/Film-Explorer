import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Movies", to: "/movies" },
    { label: "Add New Movie", to: "/movies/add" },
    { label: "About", to: "/about" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-dark shadow px-4">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {navLinks.map(({ label, to }) => (
            <li className="nav-item px-2" key={to}>
              <Link
                className={`nav-link text-light fw-bold nav-animated-link ${
                  currentPath === to ? "active-link" : ""
                }`}
                to={to}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="d-flex">
          <Link
            to="/login"
            className="btn btn-outline-info me-2 d-flex align-items-center gap-2">
            <FaSignInAlt /> Login
          </Link>
          <Link
            to="/register"
            className="btn btn-danger d-flex align-items-center gap-2">
            <FaUserPlus /> Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
