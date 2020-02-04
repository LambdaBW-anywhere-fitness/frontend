import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

const AttendeeRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (rest.role === "attendee") {
          return <Component />
        } else {
          return <Redirect to="/" />
        }
      }}
    />
  )
}

const mapStateToProps = state => {
  return {
    role: state.user.role
  }
}

export default connect(mapStateToProps, {})(AttendeeRoute)
