import React, { useState } from "react";
import "./header.css";
import Head from "./Head";
import { Link } from "react-router-dom";
function Header() {
  const [click, setClick] = useState(false);
  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "Mobile-nav" : "flexSB"}
            onClick={() => {
              setClick(false);
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/P&P">Patron & Principle</Link>
            </li>
            <li>
              <Link to="/P&P">Quick Links</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="start">
            <div className="btn">GET ADMISSION!</div>
          </div>

          <button
            className="toggle"
            onClick={() => {
              setClick(!click);
            }}
          >
            {click ? (
              <i class="fa-regular fa-circle-xmark"></i>
            ) : (
              <i class="fa-solid fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
}
export default Header;
