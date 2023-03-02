import React from 'react'
import { NavLink , useNavigate , Link } from 'react-router-dom'
import { useState } from "react";

function NavBar() {

    const navigate = useNavigate();
    const [isLoggedin, setIsLoggedin] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("holder");
    setIsLoggedin(false);
    navigate("/login");
  };

  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/info">Info</NavLink>
        <NavLink to="/forum">Forum</NavLink>

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
  )
}

export default NavBar