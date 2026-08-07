import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerContenar">
      <ul className="heaeritem">
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>
        <Link to="/update/:id" className="nav-link">
          <li>Update</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
