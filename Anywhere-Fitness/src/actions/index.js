import { axiosWithAuth } from "../utils/axiosWithAuth"
import { Redirect } from "react-router-dom"
import axios from "axios"
export const GET_CLASSES_START = "GET_CLASSES_START"
export const GET_CLASSES_SUCCESS = "GET_CLASSES_SUCCESS"
export const GET_CLASSES_FAILURE = "GET_CLASSES_FAILURE"
export const ADD_CLASS_START = "ADD_CLASS_START"
export const ADD_CLASS_SUCCESS = "ADD_CLASS_SUCCESS"
export const ADD_CLASS_FAILURE = "ADD_CLASS_FAILURE"
export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FINISH = "LOGIN_FINISH"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const login_user = data => dispatch => {
  console.log(data)
  dispatch({ type: LOGIN_START })
  axios
    .post("https://anywhere-fitness-backend.herokuapp.com/api/auth/login", data)
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.user.token)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.user })
      //   props.history.push("/Dashboard")
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE })
    })
    .finally(() => {
      dispatch({ type: LOGIN_FINISH })
    })
}

export const register_user = data => dispatch => {
  dispatch({ type: REGISTER_START })
  axios
    .post(
      "https://anywhere-fitness-backend.herokuapp.com/api/auth/register",
      data
    )
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.token)
      dispatch({ type: REGISTER_SUCCESS, payload: res.data })
      //   props.history.push("/Dashboard")
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE })
    })
}

export const addClass = newClass => dispatch => {
  dispatch({ type: ADD_CLASS_START })

  axiosWithAuth()
    .post("/classes", newClass)
    .then(
      res =>
        console.log(res) &
        dispatch({ type: ADD_CLASS_SUCCESS, payload: res.data })
    )
    .catch(
      err =>
        console.log(err) & dispatch({ type: ADD_CLASS_FAILURE, payload: err })
    )
}

export const editClass = (newClass, id) => dispatch => {
  dispatch({ type: GET_CLASSES_START })

  axiosWithAuth()
    .put(`/classes/${id}`, newClass)
    .then(
      res =>
        console.log(res) &
        dispatch({ type: GET_CLASSES_SUCCESS, payload: res.data })
    )
    .catch(
      err =>
        console.log(err) & dispatch({ type: GET_CLASSES_FAILURE, payload: err })
    )
}

export const getClasses = () => dispatch => {
  dispatch({ type: GET_CLASSES_START })
  axiosWithAuth()
    .get("/classes")
    .then(res => {
      console.log(res)
      dispatch({ type: GET_CLASSES_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_CLASSES_FAILURE })
    })
}
