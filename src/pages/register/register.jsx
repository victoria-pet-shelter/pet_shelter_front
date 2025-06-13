import './register.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import squaresImage from '../../assets/log-reg/squares.svg';
//import eyeImage from '../../assets/log-reg/eye.svg';

function Register() {
    const [formData, setFormData] = useState({ username: '', name: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("User registered successfully!");
            } else {
                setMessage("Error registering user.");
            }
        } catch (error) {
            setMessage("Request failed: " + error);
        }
    };

    return (
        <div className="register">
            <title>Register</title>
            <img src={squaresImage} class="squares" alt="Squares" />
            <div className="registration-form">
                <div class="register-title">
                    <p class="welcome-title"><span class="text-rgb-1">Welcome to Pet Shelter</span></p>
                    <div className="node">
                        <p class="welcome-subtitle"><span class="text-rgb-1">Already have an account? <a href="/login">Login</a></span></p>
                    </div>
                </div>
                <div className="main-frame">
                    <form onSubmit={handleSubmit}>
                        <span class="text-rgb-2"><input type="email" name="username" class="input-field" value={formData.username} onChange={handleChange} placeholder="E-mail" /></span>
                        <div className="password-hide-toggle">
                            <div className="eye-icon">
                                <img src="{eyeImage}" className="eye" alt="Eye" />
                            </div>
                            <p class="hide-text"><span class="text-rgb-1">Hide</span></p>
                        </div>
                        <span class="text-rgb-2"><input type="password" name="password" class="input-field" value={formData.password} onChange={handleChange} placeholder="Password" /></span>
                        <p class="forgot-password"><span class="text-rgb-1">Forgot password?</span></p> 
                        <button className="register-button" type="submit">Create an account</button>
                        {message && <p className="message">{message}</p>}
                    </form>
                </div>
            </div>
            
        </div>
    );
}

export default Register;