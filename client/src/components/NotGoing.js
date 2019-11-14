import React from "react"
import { useUser } from "../hooks"
import { Link } from 'react-router-dom'

function NotGoing(props) {
  const { notGoing } = useUser()

  return (
    <div>
        <Link to={'/'}>Home</Link>
        {notGoing.map((user, i) => (
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

export default NotGoing
