import React, { useState } from 'react';
import "./login.css";
import squaresImage from '../../assets/log-reg/squares.svg';
// import eyeImage from '../../assets/log-reg/eye.svg';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
            // const exists = data.some(user => user.email === formData.email && user.password === formData.password);
            
            setMessage("User logged in successfully!");
            
        } else {
            setMessage("Error logging in user.");
        }
        } catch (error) {
        setMessage("Request failed: " + error);
        }
    };

    return (
        <div className="login">
            <title>Login</title>
            <img src={squaresImage} className="squares" alt="Squares" />
            <div className="logo-group">
                
            </div>
            <div className="login-form">
                <div className="group-1">
                    <div className="group-2">
                        <p class="welcome-title"><span class="text-rgb-1">Welcome to Pet Shelter</span></p>
                        <div className="node">
                            <p class="welcome-subtitle"><span class="text-rgb-1">Login. No account? <a href="/register">Register</a></span></p>
                        </div>
                    </div>
                </div>
                <div className="main-frame">
                    <form onSubmit={handleSubmit}>
                        <div class="text-field">
                            <label class="input-label">E-mail</label>
                            <span class="text-rgb-2"><input type="email" name="email" class="input-field" value={formData.email} onChange={handleChange} /></span>
                        </div>
                        <div className="password-hide-toggle">
                            <div className="eye-icon">
                                <img src="{eyeImage}" className="eye" alt="Eye" />
                            </div>
                            <p class="hide-text"><span class="text-rgb-1">Hide</span></p>
                        </div>
                        <div class="text-field">
                            <label class="input-label">Password</label>
                            <span class="text-rgb-2"><input type="password" name="password" class="input-field" value={formData.password} onChange={handleChange} /></span>
                        </div>
                        <p class="forgot-password"><span class="text-rgb-1">Forgot password?</span></p>
                        <button className="login-button" type="submit">Log in</button>
                        {message && <p className="message">{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;