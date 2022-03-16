import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from './../../hooks/useAuth';
import googleLogo from '../../images/google.png';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {signInManually, loginWithGoogle} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";
    const { register, handleSubmit,  formState: { errors } } = useForm();

    // handle manual signin
    const onSubmit = data => {
        const {userEmail, userPassword} = data;
        signInManually(userEmail, userPassword)
            .then( () => {
                // redirect to the page where the user triggered
                navigate(from)
            })
    };

    // handle google sign in
    const googleLoginHandler = () => {
        loginWithGoogle()
        .then(() => {
            // redirect to the page where the user triggered
            navigate(from)
        })
    }

    return (
        <div className='container'>
            <h2>Sign In</h2>
             <form onSubmit={handleSubmit(onSubmit)}>
       
                <input  placeholder='Enter your email adress'  className="inputText" {...register("userEmail")} />
                
                <input placeholder='Enter your password' className="inputText" type="password" {...register("userPassword", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" value="LogIn"/>
            </form>
            <div>
            <div className="oneClickLogin" onClick={googleLoginHandler}>
                <img src={googleLogo} alt="Google" />
            </div>
            </div>
        </div>
       
    );
};

export default Login;