import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"

import Dashboard from "./Dashboard"

const StyledHr = styled.hr`
  margin: 2% 25% 2% 0%;
`

const Navigation = props => {
  return (
    <Router>
      <div>
        <nav className="flexThis">
          <Link to={"/Dashboard"}> Home </Link>
          {/* {props.role === "attendee" && (
            <Link to="/attendees"> Attendees </Link>
          )}
          {props.role === "instructor" && (
            <Link to="/instructors"> Instructors </Link>
          )} */}
          {/* <Link to={"/Logout"}> Logout </Link> */}
        </nav>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          {/* <AttendeeRoute path="/attendees" component={AttendeeActivities} />
          <InstructorRoute
            path="/instructors"
            component={InstructorActivities}
          /> */}
        </Switch>
        <StyledHr />
      </div>

      {/* <StyledHr /> */}
    </Router>
  )
}

export default Navigation
