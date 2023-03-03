import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>© 2023, All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
