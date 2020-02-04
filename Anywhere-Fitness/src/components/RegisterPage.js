import React, { useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import { axiosWithAuth } from "../utils/axiosWithAuth"

const RegisterPage = props => {
  const [signup, setSignup] = useState({
    username: "",
    email: "",
    password: "",
    role: ""
  })

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data, e) => {
    console.log(data)
    // e.preventDefault()

    axiosWithAuth()
      .post("/auth/register", data)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.payload)
        props.history.push("/DashBoard")
      })
      .catch(err => console.log(err))
    e.target.reset()
  }

  const changeHandler = elem => {
    setSignup({ ...signup, [elem.target.name]: elem.target.value })
    // console.log("login", signup)
  }

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <hr></hr>

      <label htmlFor="username">Username:</label>
      <input
        onChange={changeHandler}
        name="username"
        type="text"
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

      <label htmlFor="email">Email:</label>
      <input
        onChange={changeHandler}
        type="email"
        name="email"
        ref={register({ required: true, minLength: 5 })}
      />
      {errors.email && errors.email.type === "required" && (
        <p className="starterPs">this field is required.</p>
      )}
      {errors.email && errors.email.type === "minLength" && (
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
      <select name="role" ref={register({ required: true })}>
        <option value="instructor">Instructor</option>
        <option value="attendee">Attendee</option>
      </select>

      <input type="submit" className="submitButton" />
    </form>
  )
}

export default RegisterPage
