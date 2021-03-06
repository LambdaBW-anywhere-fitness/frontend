import React from "react"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          {
            console.log("role")
          }
          return <Component />
        } else {
          {
            console.log("login")
          }
          return <Redirect to="/" />
        }
      }}
    />
  )
}

export default PrivateRoute
