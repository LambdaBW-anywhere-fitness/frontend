import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from "react-redux";

import { loginAndGetUser } from "../actions";

const LoginPage = props => {

    const [login, setLogin] = useState({username:"", password:""})

    const { register, handleSubmit, errors } = useForm();

    // const onSubmit= (data, e) => {
    //     console.log(data);
    //     // e.preventDefault();
    //     axios
    //         .post('https://anywhere-fitness-backend.herokuapp.com/api/auth/login', data)
    //         .then (res => {
    //             console.log(res);
    //             set
    //             localStorage.setItem("token", res.data.payload);
    //             props.history.push('/Dashboard');
    //         })
    //         .catch(err => console.log(err));
    //     e.target.reset();
    // };

    const onSubmit = (data, e) => {
        console.log(data);
        e.preventDefault();
        props.loginAndGetUser(data);
        e.target.reset();
        props.history.push('/Dashboard');
    }

    const changeHandler = elem => {
        setLogin({ ...login, [elem.target.name]: elem.target.value});
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
                ref={register({required: true, minLength: 3})}
                />
                {errors.username && errors.username.type === "required" && (
                    <p className="starterPs">this field is required.</p>
                )}
                {errors.username && errors.username.type === "minLength" && (
                    <p className="starterPs">this field requires a minimum length of 2 characters.</p>
                )}
            
            <label htmlFor="password">Password:</label>
                <input 
                onChange={changeHandler}
                name="password"
                type="password"
                ref={register({required: true, minLength: 5})} 
                />
                {errors.password && errors.password.type === "required" && (
                    <p className="starterPs">this field is required.</p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                    <p className="starterPs">this field requires a minimum length of 2 characters.</p>
                )}

                <input type='submit' className="submitButton2"/>
        </form>
    )
}



export default connect (null, { loginAndGetUser })(LoginPage);