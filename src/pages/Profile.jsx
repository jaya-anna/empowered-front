import axios from 'axios';
import { AppShell, Box, Button, Header } from '@mantine/core'
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { Link } from "react-router-dom";

function Profile(){
  const { user, isAuthenticated, } = useContext(SessionContext);
  const [deleting, setDeleting] = useState(false);
  const handleSubmit = async event => {
    event.preventDefault()

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
  
if(!user){
  return (
    <p>working</p>)
} 
}
console.log(user);
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
      <Link type="button" component={Link} to={`/update/${user._id}`}>
        Update
      </Link>
      {/* <Button title="Go to test test screen" onSubmit={`/profile`} /> */}
    </div>
  );
}

export default Profile;