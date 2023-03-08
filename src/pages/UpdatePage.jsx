import React, { useContext , useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SessionContext } from "../contexts/SessionContext";
import { Button, Input, Text } from "@mantine/core";

function UpdatePage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const {token , setUser, user} = useContext(SessionContext)
  const navigate = useNavigate();

    //handle Button Update 
    const handleUpdate = async (event) => {
        event.preventDefault();
        console.log("updated Username:", username)

        try {
          const response = await axios.put(`http://localhost:5005/auth/update/${user._id}`, {
            username: username,
            email: email,
          } ,{headers: {
            authorization: `Bearer ${token}`
        }},);

          console.log(response.data);
          setUser(response.data);

          navigate('/profile');
        } catch (error) {
          console.log("Error: ", error);
        };
      };

  return (
    <div>
      <h1>Update your Profile</h1>
      <form onSubmit={handleUpdate} >
        <label>Username</label>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername( e.target.value )}
        />
        <label>Email adress</label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail( e.target.value )}
        />
        <Button type="submit">Save</Button>

      </form>
    </div>
  );
}

export default UpdatePage;