import React, { useEffect } from "react"
import { Route } from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { connect } from "react-redux"
import { getClasses } from "../actions/index"

const InstructorActivities = props => {
  useEffect(() => {
    props.getClasses()
  }, [])
  return (
    <div>
      <h1>Instructor Activities</h1>
      <div>
        <form>
          <input />
          &nbsp;
          <input />
          &nbsp;
          <input />
          &nbsp;
          <input />
          &nbsp;
          <input />
          &nbsp;
          <input />
          <button>Add Class</button>
        </form>
      </div>

      <div>
        {props.classes.map((item, i) => (
          <div key={i}>
            <p>Class: {item.class_name}</p>
            <p>Class duration: {item.class_duration}</p>
            <p>Intensity: {item.class_intensity_level}</p>
            <p>City: {item.class_city}</p>
            <p>Date: {item.class_date}</p>
            <p>Start time: {item.start_time}</p>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    classes: state.classes
  }
}

export default connect(mapStateToProps, { getClasses })(InstructorActivities)

// "class_name": "yoga at sunrise",
//     "class_duration": "45 minutes",
//     "class_intensity_level": "low",
//     "class_city": "San Francisco",
//     "class_date": "2020-02-15T00:00:00.000Z",
//     "start_time": "7am",
//     "class_timezone": null
