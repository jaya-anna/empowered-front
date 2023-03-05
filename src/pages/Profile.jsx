import { AppShell, Box, Button, Header } from '@mantine/core'
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { Link } from "react-router-dom";
import axios from 'axios';

function Profile() {
  const { user, isAuthenticated } = useContext(SessionContext);
  const [currentUser, setCurrentUser] = useState();

  //Diana:
  const {token} = useContext(SessionContext);
  console.log(token );

  useEffect(() => {
    fetch('http://localhost:5005/auth/verify', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setCurrentUser(data.user));
  }, [token]);

return (
  <div>
    {currentUser ? (
      <div>
        <h1>Welcome, {currentUser.username} !</h1>
        <div>
          <h2>Username</h2>
          <p>{currentUser.username} </p>
          <h2>Email address</h2>
          <p>{currentUser.email}</p>
        </div>
        <div>
          <h2>Your Posts</h2>
          <p> </p>
          <h2>Your Comments</h2>
          <p> </p>
        </div>
      </div>
    ) : (
      <div></div>
    )}
    <Button type="button" component={Link} to="/update">
      Update
    </Button>
    <button>Delete</button>
  </div>
);
    }
  
export default Profile;
