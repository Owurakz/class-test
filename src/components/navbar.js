import React from "react";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="Nav">
      <h1>My Portfolio</h1>
      <ul>
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>Other works</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
