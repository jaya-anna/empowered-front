import React, { useContext } from 'react'
import { SessionContext } from '../contexts/SessionContext';

function Profile() {

    const {user} = useContext(SessionContext)
    console.log(user)
  return (
    <div>
    {user ? ( <div>
      <h1>Welcome, {user.username} !</h1>
    </div>) : (
      <div>
      <h1>Hi</h1>
    </div>
    )
    }
    </div>
  )
}

export default Profile