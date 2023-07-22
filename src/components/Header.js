import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">
            <li>
              <p>Home</p>
            </li>
          </Link>
          <Link to="/services">
            <li>
              <p>Services</p>
            </li>
          </Link>
          <Link to="/contact">
            <li>
              <p>Contact</p>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <p>About</p>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
