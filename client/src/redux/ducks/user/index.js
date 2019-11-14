import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_USER = "user/GET_USER"
const GOING = 'user/GOING'
const NOT_GOING = 'user/NOT_GOING'

// initial state
const initialState = {
  user: {},
  going: [],
  notGoing: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload }
    case GOING:
      return { ...state, going: action.payload }
    case NOT_GOING:
      return { ...state, notGoing: action.payload }
    default:
      return state
  }
}

// action creators
const getUser = () => {
  return dispatch => {
    axios.get("https://randomuser.me/api/").then(resp => {
      const person = {
        picture: resp.data.results[0].picture.large,
        fname: resp.data.results[0].name.first,
        lname: resp.data.results[0].name.last,
        phone: resp.data.results[0].phone,
        email: resp.data.results[0].email
      }
      dispatch({
        type: GET_USER,
        payload: person
      })
    })
  }
}

// Post
const userGoing = (user) => {
  return dispatch => {
    axios.post('/users/going', {user}).then(resp => {
      dispatch(getUser())
      dispatch(getUserGoing())
    })
  }
}

const userNotGoing = (user) => {
  return dispatch => {
    axios.post('/users/notgoing', {user}).then(resp => {
      dispatch(getUser())
      dispatch(getUserNotGoing())
    })
  }
}

// Get
const getUserGoing = () => {
  return dispatch => {
    axios.get('/users/going').then(resp => {
      dispatch({
        type: GOING,
        payload: resp.data
      })
    })
  }
}

const getUserNotGoing = () => {
  return dispatch => {
    axios.get('/users/notgoing').then(resp => {
      dispatch({
        type: NOT_GOING,
        payload: resp.data
      })
    })
  }
}


// custom hooks
export function useUser() {
  const user = useSelector(appState => appState.userState.user)
  const dispatch = useDispatch()
  const going = useSelector(appState => appState.userState.going)
  const notGoing = useSelector(appState => appState.userState.notGoing)

  const isGoing = user => dispatch(userGoing(user))
  const isNotGoing = user => dispatch(userNotGoing(user))

  useEffect(() => {
    dispatch(getUser())
    dispatch(getUserGoing())
    dispatch(getUserNotGoing())
  }, [dispatch])

  return { user, isGoing, isNotGoing, going, notGoing }
}
