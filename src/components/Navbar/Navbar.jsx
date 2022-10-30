import React, { useState } from "react";
import "./Navbar.css";
import bloodIcon from "../../assets/images/bloodIcon.jpg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navToggler, setNavToggler] = useState(true);
  const closeNavbar = () => setNavToggler(false);

  return (
    <div className="  navbar-content ">
      <Link
        to="/"
        className="navbar-brand text-uppercase fw-7 text-white ls-2 fs-24"
      >
        <img src={bloodIcon} className="Nabicon" alt=""></img>
      </Link>
      <div className="">
        <div className="brand-and-toggler ">
          <button
            type="button"
            className="navbar-open-btn text-black"
            onClick={() => setNavToggler(!navToggler)}
          >
            <FaBars size={30} />
          </button>

          <div
            className={
              navToggler
                ? "navbar-collapse show-navbar-collapse"
                : "navbar-collapse"
            }
          >
            <button
              type="button"
              className="navbar-close-btn text-black"
              onClick={closeNavbar}
            >
              <FaTimes size={30} />
            </button>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-black ls-1 text-uppercase fw-6 fs-22"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="/#Volunteer"
                  className="nav-link text-black ls-1 text-uppercase fw-6 fs-22"
                >
                  Volunteers
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/#Bloodtypes"
                  className="nav-link text-black ls-1 text-uppercase fw-6 fs-22"
                >
                  Bloode Types
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-black ls-1 text-uppercase fw-6 fs-22"
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/AddDonator"
                  className="nav-link text-red ls-1 text-uppercase fw-6 fs-22"
                >
                  AddDonator
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
