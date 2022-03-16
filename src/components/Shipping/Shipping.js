import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from './../../hooks/useAuth';
const Shipping = () => {
    const { register  } = useForm();
    const {user} = useAuth();
    return (
        <div className="container">
            <h2>Enter your Shipping information</h2>
             <form>
       
                <input placeholder='Enter your name' defaultValue={user.displayName} className="inputText" {...register("userName")} />
                <input placeholder='Enter your email adress' defaultValue={user.email} className="inputText" {...register("userEmail")} />
                <input placeholder='Mobile Number' className="inputText" {...register("phone")} />
                <p>Enter your address</p>
                <input placeholder='Enter your city name' className="inputText" {...register("city")} />
                <input placeholder='Enter your Home name' className="inputText" {...register("Home")} />
                <input placeholder='Enter your Post office name' className="inputText" {...register("postOffice")} />
                
            <input type="submit" value="Order Now"/>
        </form>
        </div>
    );
};

export default Shipping;