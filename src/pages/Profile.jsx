import axios from 'axios';
import { AppShell, Box, Button, Header } from '@mantine/core'
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { Link, useNavigate } from "react-router-dom";

function Profile( ){
  const { user, setUser, setIsAuthenticated, setToken } = useContext(SessionContext);
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  // handler for deleting profile
  const handleDeleteProfile = async () => {
    setDeleting(true);
    try {
      await axios.delete(`http://localhost:5005/auth/profile/${user._id}`)

      localStorage.removeItem("holder");
      setIsAuthenticated(false);
      setToken(null);
      setUser(null);

      navigate('/');
    } catch (error) {
      console.log("Error: ", error);
      setDeleting(false);
    }
  }

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.username} !</h1>
          <div>
            <h2>Username</h2>
            <p>{user.username} </p>
            <h2>Email adress</h2>
            <p>{user.email}</p>
          </div>

        </div>
      ) : (
        <div></div>
      )}
      <Link type="button" component={Link} to={`/update/${user._id}`}>
        Update
      </Link>

      <Button onClick={handleDeleteProfile}> Delete profile </Button>
      
    </div>
  );
}

export default Profile;