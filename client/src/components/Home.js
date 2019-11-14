import React from "react"
import { useUser } from "../hooks"
import Icon from '../lib/Icon'
import { Link } from 'react-router-dom'

function Home(props) {
  const { user, isGoing, isNotGoing, notGoing, going } = useUser()

  function handleGoing(user) {
    isGoing(user)
  }

  function handleNotGoing(user) {
    isNotGoing(user)
  }

  return (
    <div>
        <div>
            <Link to={'/NotGoing'}>{notGoing.length} Not Going</Link>
            <br/>
            <Link to={'/Going'}>{going.length} Going</Link>
        </div>
        <img src={user.picture} alt='' />
        <p>Name: {user.fname} {user.lname}</p>
        <p>Phone: {user.phone}</p>
        <p>Email: {user.email}</p>
        <div>
          <button onClick={(e) => handleNotGoing(user)}><Icon icon='times'/></button>
          <button onClick={(e) => handleGoing(user)}><Icon icon='check'/></button>
        </div>
    </div>
  )
}

export default Home
