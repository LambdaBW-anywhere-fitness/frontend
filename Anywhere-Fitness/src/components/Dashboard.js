import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import Axios from "axios"
import { Col } from "reactstrap"
import styled from "styled-components"

const StyledCard = styled.div`
  background-color: white; 
   //#E6EAFF
//#4B3DF1;
  width: 65%;
  border: 2px solid #ff5500;
  display: flex;
  margin: 3% 0% 3% 17.5%;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  @media (max-width: 600px) {
    flex-direction: column;
}

}
`

const StyledTitle = styled.h1`
  font-size: 3rem;
  width: 100%;
  margin: 0% 0 0% 0%;
  padding: 0 2% 0 2%;
  background-image: url(./assets/bwpic1.jpg);
  background-position: center;
  background-repeat: no-repeat;
  height: 20rem;
  align-items: center;
  background-size: cover;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  color: white;
  text-shadow: -1px -1px 0 #ff5500, 1px -1px 0 #ff5500, -1px 1px 0 #ff5500,
    1px 1px 0 #ff5500;
  @media (min-width: 1200px) {
    height: 22rem;
  }
  @media (min-width: 601px) {
    justify-content: start;
    align-items: flex-end;
    width: 100%;
    padding: 0 0% 0% 1%;
  }
  @media (max-width: 816px) {
    height: 21rem;
  }
  @media (max-width: 670px){
    height: 22rem;
}
  @media (max-width: 600px) {
    width: 96%;
    margin: 0;
  }
  @media (max-width: 450px) {
    font-size: 2rem;
  }
`
const StyledSubtitle = styled.h3`
  border-bottom: 1px solid black;
  width: 80%;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 2% 0 5% 0;
  color: black;
  background-color: rgb(229, 294, 255);
  margin: 20% 0 0 10%;
  @media (max-width: 600px) {
    margin: 5% 0 0 10%;
  }
`

const Dashboard = props => {
  //Setting state for Users + Classes below--
  const [userData, setUserData] = useState([{}])

  //Setting state for Classes below--
  const [classData, setClassData] = useState([])

  const [titleUsername, setTitleUsername] = useState("")

  useEffect(() => {
    Axios.get(
      "https://anywhere-fitness-backend.herokuapp.com/api/classes"
    ).then(resp => {
      setClassData(resp.data)
      console.log("This is the Classes data: ", resp.data)
      setTitleUsername(props.user.username)
      console.log("this is my title username: ", titleUsername)
    })
  }, [])

  return (
    <div className="container">
      {classData.map(c => (
        <>
          <Col sm="12">
            <StyledCard>
              <StyledTitle>{c.class_name}</StyledTitle>
              <div className="unflexThis">
                <StyledSubtitle>
                  Intensity Level : {c.class_intensity_level}
                </StyledSubtitle>
                <p className="paraClass">Class Duration : {c.class_duration}</p>
                <p className="paraClass">Location : {c.class_city}</p>
                <p className="paraClass">Start Time : {c.start_time}</p>
                <p className="paraClass">Class Date : {c.class_date}</p>
                <button className="rsvp">R.S.V.P</button>
              </div>
            </StyledCard>
          </Col>
        </>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(Dashboard)
