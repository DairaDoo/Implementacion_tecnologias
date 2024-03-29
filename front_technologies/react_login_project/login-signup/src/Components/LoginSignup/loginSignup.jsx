import React, { useState } from 'react';
import './loginSignup.css'
import user_icon from '../Assets/user.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import clothing_image from '../Assets/clothing_image.avif'

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");

    return (
        <div className = 'container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {/*user Name*/} 
                <div className="input">
                    <img src={user_icon} alt="user icon" />
                    <input type="text" placeholder='Name'/>
                </div>
                {/*Last Name*/} 
                <div className="input">
                    <img src={user_icon} alt="user icon" />
                    <input type="text" placeholder='Last Name'/>
                </div>
                {/*user email*/} 
                <div className="input">
                    <img src={email_icon} alt="user email icon" />
                    <input type="email" placeholder='Email'/>
                </div>
                {/*user password*/} 
                <div className="input">
                    <img src={password_icon} alt="password icon" />
                    <input type="password" placeholder='Password'/>
                </div>
                {/*Confirm Password*/} 
                <div className="input">
                    <img src={password_icon} alt="password icon" />
                    <input type="password" placeholder='Confirm Password'/>
                </div>
            </div>
            <div className="forgot-password">Lost Password? <span>Click Here!</span> </div>
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick = {() => {setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Log in</div>
            </div>
        </div>
    )
}

export default LoginSignup;