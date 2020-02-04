import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { login_user } from "../actions/index"
import { useDispatch } from "react-redux"

import { connect } from "react-redux"

const LoginPage = props => {
  const [login, setLogin] = useState({ username: "", password: "" })
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data, e) => {
    e.preventDefault()
    dispatch(login_user(data))
    // return <Redirect to="/dashboard" />
    props.history.push("/dashboard")
  }

  const changeHandler = elem => {
    setLogin({ ...login, [elem.target.name]: elem.target.value })
    // console.log("login", login);
  }

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1>Log In</h1>
      <hr></hr>

      <label htmlFor="username">Username:</label>
      <input
        onChange={changeHandler}
        type="text"
        name="username"
        ref={register({ required: true, minLength: 3 })}
      />
      {errors.username && errors.username.type === "required" && (
        <p className="starterPs">this field is required.</p>
      )}
      {errors.username && errors.username.type === "minLength" && (
        <p className="starterPs">
          this field requires a minimum length of 2 characters.
        </p>
      )}

      <label htmlFor="password">Password:</label>
      <input
        onChange={changeHandler}
        name="password"
        type="password"
        ref={register({ required: true, minLength: 5 })}
      />
      {errors.password && errors.password.type === "required" && (
        <p className="starterPs">this field is required.</p>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <p className="starterPs">
          this field requires a minimum length of 2 characters.
        </p>
      )}

      <input type="submit" className="submitButton2" />
    </form>
  )
}

const mapStateToProps = state => {}

export default connect(mapStateToProps, {})(LoginPage)
