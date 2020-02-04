import React from "react"
import InstructorActivities from "./InstructorActivities"
import AttendeeActivities from "./AttendeeActivities"
import { useSelector } from "react-redux"

const Dashboard = () => {
  const user = useSelector(state => state.user)
  console.log(user)
  return (
    <div>
      {user.role === "attendee" && <AttendeeActivities />}
      {user.role === "instructor" && <InstructorActivities />}
    </div>
  )
}

export default Dashboard
