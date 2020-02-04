import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = (props) => {

    const [signup, setSignup] = useState({username:"", email:"", password:""})

    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit= (data, e) => {
        console.log(data)
        e.preventDefault();
        e.target.reset();
    };

    const changeHandler = elem => {
        setSignup({ ...signup, [elem.target.name]: elem.target.value});
        console.log("login", signup);
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
                ref={register({required: true, minLength: 3})}
                />
                {errors.username && errors.username.type === "required" && (
                    <p className="starterPs">this field is required.</p>
                )}
                {errors.username && errors.username.type === "minLength" && (
                    <p className="starterPs">this field requires a minimum length of 3 characters.</p>
                )}

            <label htmlFor="email">Email:</label>
                <input 
                onChange={changeHandler}
                type="email"
                name="email" 
                ref={register({required: true, minLength: 5})}
                />
                {errors.email && errors.email.type === "required" && (
                    <p className="starterPs">this field is required.</p>
                )}
                {errors.email && errors.email.type === "minLength" && (
                    <p className="starterPs">this field requires a minimum length of 5 characters.</p>
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
                    <p className="starterPs">this field requires a minimum length of 5 characters.</p>
                )}
                <div>

                <div className="dropDownTitle">Are you an Instructor?</div>
                <select className="selector" name="gender" ref={register}>
                
                    <option className="selector" value="Attendee">No, I'm an Attendee</option>
                    <option value="Instructor">Yes, I'm an Instructor</option>
                </select>
                </div>

                <input type='submit' className="submitButton"/>
        </form>
    )
}

export default RegisterPage;