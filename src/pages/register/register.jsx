import './register.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import squaresImage from '../../assets/log-reg/squares.svg';
//import eyeImage from '../../assets/log-reg/eye.svg';

function Register() {
    const [formData, setFormData] = useState({ username: '', name: '', password: '', promotions: true });
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
                        <div class="text-field">
                            <label class="input-label">Username</label>
                            <span class="text-rgb-2"><input type="text" name="username" class="input-field" value={formData.username} onChange={handleChange} /></span>
                        </div>
                        <div class="text-field">
                            <label class="input-label">E-mail</label>
                            <span class="text-rgb-2"><input type="email" name="name" class="input-field" value={formData.name} onChange={handleChange} /></span>
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
                        <div class="requirements">
                            <div class="requirements-column">
                                <p>&bull; Use 8 or more characters</p>
                                <p>&bull; One special character</p>
                                <p>&bull; One lowercase character</p>
                            </div>
                            <div class="requirements-column">
                                <p>&bull; One uppercase character</p>
                                <p>&bull; One number</p>
                            </div>
                        </div>
                        <span class="text-rgb-2"><label class="checkbox">I want to receive e-mails about the product, feature<br />updates, events and marketing promotions.
                            <input type="checkbox" name="promotions" onChange={(e) => setFormData({ ...formData, promotions: e.target.checked })} />
                            <span class="checkmark"></span>
                        </label></span>
                        <p><span class="text-rgb-2">By creating an account, you agree to the <a href="/terms">Terms of Use</a><br />and <a href="/privacy">Privacy Policy</a>.</span></p>
                        <button className="register-button" type="submit">Create an account</button>
                        {message && <p className="message">{message}</p>}
                    </form>
                </div>
            </div>
            
        </div>
    );
}

export default Register;