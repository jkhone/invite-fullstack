import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Going from './Going'
import NotGoing from './NotGoing'

function App(props) {

  return (
    <Router>
      <div className='app'>
        <Route exact path='/' component={Home} />
        <Route path='/Going' component={Going} />
        <Route path='/NotGoing' component={NotGoing} />
      </div>
    </Router>
  )
}

export default App
