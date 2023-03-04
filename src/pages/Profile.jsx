
import { AppShell, Box, Button, Header } from '@mantine/core'
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { Link } from "react-router-dom";

function Profile() {
  const { user, isAuthenticated } = useContext(SessionContext);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    setCurrentUser(user);
  }, []);

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
