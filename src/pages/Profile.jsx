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
  
  if (!user) {
    return <p>Loading</p>
  }
  console.log(user);
  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.username} !</h1>
        </div>
      ) : (
        <div>
        </div>
      )}
      <Link type="button" component={Link} to="/update">
        Update
      </Link>
      <button>Delete</button>
    </div>
  );
}

export default Profile;
