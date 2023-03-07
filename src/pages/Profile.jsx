import axios from 'axios';
import { AppShell, Box, Button, Header } from '@mantine/core'
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { Link, useNavigate } from "react-router-dom";

function Profile( ){
  const { user, setUser, isAuthenticated } = useContext(SessionContext);
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
  
      if(!user){
        return (
          <p>working</p>)
          } 

      navigate('/profile');
  }

    console.log(user);

  // handle Button Delete
  /* const handleDelete = async () => {
    setDeleting(true);
try{
  await axios.delete("http://localhost:5005/auth/delete")
  .then(() => this.setState({ status: 'Delete successful' }));
  
}catch (error) {
  console.log("Error: ", error);
  setDeleting(false);
} */

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
      {/* <Button title="Go to test test screen" onSubmit={`/profile`} /> */}
    </div>
  );
}

export default Profile;