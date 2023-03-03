import React from 'react'
import { useState } from "react";

function Profile() {

    const [username, setUsername] = useState("");
  return (
    <div>
      <h1>Welcome, {username} !</h1>
    </div>
  )
}

export default Profile