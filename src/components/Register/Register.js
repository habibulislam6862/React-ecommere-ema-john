import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const {signUpManually} = useAuth();
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = data => {
        const {userEmail, userPassword, userName} = data;
        signUpManually(userEmail, userPassword, userName);
        localStorage.setItem("displayName", userName);
        navigate('/')
    };

    return (
        <div className="container">
            <h2>Sign Up</h2>
             <form onSubmit={handleSubmit(onSubmit)}>
       
            <input placeholder='Enter your name' className="inputText" {...register("userName")} />
            <input placeholder='Enter your email adress' className="inputText" {...register("userEmail")} />
            
            <input placeholder='Enter your new password' className="inputText" type="password" {...register("userPassword", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
            
            <input type="submit" value="Register"/>
        </form>
        </div>
       
    );
};

export default Register;