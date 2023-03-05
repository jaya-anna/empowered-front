import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdatePage() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [deleting, setDeleting] = useState(false);

  const navigate = useNavigate();

  //Diana: This is the function that will be called when the component mounts.
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get("http://localhost:5005/auth/verify");
        setUser(response.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    getUser();
  }, []);

// handle Update 
  const handleUpdate = async (event) => {
    event.preventDefault();

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

  // handle Delete
  const handleDelete = async () => {
    setDeleting(true);
    try {
      await axios.delete("http://localhost:5005/auth/delete");
      navigate("/");
    } catch (error) {
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email adress</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail( e.target.value )}
        />
        <button onClick={handleUpdate}>Save</button>
        <button onClick={handleDelete}> Delete Profile</button>
      </form>
      <footer>{deleting ? "Deleting..." : null}</footer>
    </div>
  );
}

export default UpdatePage;
