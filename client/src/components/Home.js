import React from "react"
import { useUser } from "../hooks"
import Icon from '../lib/Icon'
import { Link } from 'react-router-dom'
import '../styles/styles.css'

function Home(props) {
  const { user, isGoing, isNotGoing, notGoing, going } = useUser()

  function handleGoing(user) {
    isGoing(user)
  }

  function handleNotGoing(user) {
    isNotGoing(user)
  }

  return (
    <div className='home'>
        <div className='links'>
            <Link to={'/NotGoing'}>Not Going: {notGoing.length}</Link>
            <Link to={'/Going'}>Going: {going.length}</Link>
        </div>
        <div className='info'>
            <div className='picture'>
                <img src={user.picture} alt='' />
            </div>
            <div className='para'>
                <p>Name: {user.fname} {user.lname}</p>
                <p>Phone: {user.phone}</p>
                <p>Email: {user.email}</p>
            </div>
            <div className='buttons'>
            <button 
            className='not'
            onClick={(e) => handleNotGoing(user)}><Icon icon='times'/></button>
            <button 
            className='going'
            onClick={(e) => handleGoing(user)}><Icon icon='check'/></button>
            </div>
        </div>
    </div>
  )
}

export default Home
