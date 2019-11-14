import React from "react"
import { useUser } from "../hooks"
import { Link } from 'react-router-dom'

function Going(props) {
  const { going } = useUser()

  console.log('going', going)

  return (
    <div>
        <Link to={'/'}>Home</Link>
        {going.map((user, i) => (
            <div key={i}>
                <img src={user.picture} alt='' />
                <p>Name: {user.fname} {user.lname}</p>
                <p>Phone: {user.phone}</p>
                <p>Email: {user.email}</p>
            </div>
        ))}

    </div>
  )
}

export default Going
