import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SessionContext } from "../contexts/SessionContext";

function UpdatePage() {
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
const {token} = useContext(SessionContext)
  const navigate = useNavigate();

//handle Button Update 

 const handleUpdate = async (event) => {
    event.preventDefault();
    console.log("updated Username:", username)

    try {
      const response = await axios.put("http://localhost:5005/auth/update", {
        username: username,
        email: email,
      } ,{headers: {
        authorization: `Bearer ${token}`
    }},);
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log("Error: ", error);
    };
  };

  // handle Button Back
 const handleBack = async (event) => {
  const navigate = useNavigate();
 }

  return (
    <div>
      <h1>Update your Profile</h1>
      <form onSubmit={handleUpdate}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername( e.target.value )}
        />
        <label>Email adress</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail( e.target.value )}
        />
        <button type="submit">Save</button>
        <button onClick={() => window.location.reload(false)}> Back to profile</button>
      </form>
    </div>
  );
}

export default UpdatePage;