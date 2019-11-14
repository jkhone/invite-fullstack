import React from "react"
import { useUser } from "../hooks"
import { Link } from 'react-router-dom'
import '../styles/styles.css'

function Going(props) {
  const { going } = useUser()

  return (
    <div>
        <Link to={'/'}>Home</Link>
        <div className='page'>
            {going.map((user, i) => (
                <div
                className='info'
                key={i}>
                    <div className='picture'>
                        <img src={user.picture} alt='' />
                    </div>
                    <div className='para'>
                        <p>Name: {user.fname} {user.lname}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Email: {user.email}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Going
