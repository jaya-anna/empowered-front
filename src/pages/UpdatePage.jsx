import React from "react";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";

function UpdatePage() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [deleting, setDeleting] = useState(false);

  //const navigate = useNavigate();

//handle Button Update 

  const handleUpdate = async (event) => {
    event.preventDefault();
    console.log("updated Username:", username)

    try {
      const response = await axios.post("http://localhost:5005/auth/update", {
        username: username,
        email: email,
      });
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // handle Button Delete
  const handleDelete = async () => {
    setDeleting(true);
try{
  await axios.delete("http://localhost:5005/auth/delete")
  
}catch (error) {
  console.log("Error: ", error);
  setDeleting(false);
}
  }

  return (
    <div>
      <h1>Update your Profile</h1>
      <form>
        <label>Username</label>
        <input
          type="text"
          value={user.username}
          onChange={(e) => setUsername({ username: e.target.value })}
        />
        <label>Email adress</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => setEmail({ email: e.target.value })}
        />
        <button onClick={handleUpdate}>Save</button>
        <button onClick={handleDelete}> Delete Profile</button>
      </form>
    </div>
  );
}

export default UpdatePage;
