import React, { useState } from 'react';
import "./login.css";
import { data, Link } from 'react-router-dom';
import squaresImage from '../../assets/log-reg/squares.svg';

function Login() {
    const [formData, setFormData] = useState({ name: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch("http://localhost:5000/users", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            // body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
            const exists = data.some(user => user.name === formData.name && user.password === formData.password);
            if (exists) {
            setMessage("User logged in successfully!");
            } else {
            setMessage("Error logging in user.");
            }
        } else {
            setMessage("Error logging in user.");
        }
        } catch (error) {
        setMessage("Request failed: " + error);
        }
    };

    return (
        <div className="login">
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
            <link href="./login.css" rel="stylesheet" />
            <title>Login</title>
            <div className="logo-group">
                <div className="group-1">
                    <div className="group-2">
                        <p class="welcome-title"><span class="text-rgb-1">Welcome to Pet Shelter</span></p>
                        <div className="node">
                            <p class="welcome-subtitle"><span class="text-rgb-1">Login. No account? <a href="/register">Register</a></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-form">
                <img src={squaresImage} className="squares" alt="Squares" />
                <div className="main-frame">
                    <form onSubmit={handleSubmit}>
                        <div className="text-field">
                            <span class="text-rgb-2"><input type="email" name="email" class="input-field" value={formData.name} onChange={handleChange} placeholder="E-mail" /></span>
                        </div>
                        <div className="text-field">
                            <span class="text-rgb-2"><input type="password" name="password" class="input-field" value={formData.password} onChange={handleChange} placeholder="Password" /></span>
                            <div className="password-hide-toggle">
                                <div className="eye-icon">
                                    <img src={eyeImage} className="eye" alt="Eye" />
                                </div>
                                <p class="hide-text"><span class="text-rgb-1">Hide</span></p>
                            </div>
                            <p class="forgot-password"><span class="text-rgb-1">Forgot password?</span></p>
                        </div>
                        <button className="login-button" type="submit">Log in</button>
                        {message && <p className="message">{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;