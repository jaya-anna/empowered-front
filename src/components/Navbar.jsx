import React, { useContext } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { SessionContext } from "../contexts/SessionContext";

function NavBar() {
  // const auth = localStorage.getItem("holder");

  const {isAuthenticated} = useContext(SessionContext)
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("holder");
    setIsLoggedin(false);
    navigate("/login");
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/info">Info</NavLink>
          <NavLink to="/forum">Forum</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <Link
            type="button"
            component={Link}
            to="/"
            variant="subtle"
            color="cyan"
            onClick={handleLogout}
          >
            Logout
          </Link>
        </div>
      ) : (
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/signup">Sign up</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/info">Info</NavLink>
          <NavLink to="/forum">Forum</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
        </div>
      )}
    </div>
  );
}

export default NavBar;