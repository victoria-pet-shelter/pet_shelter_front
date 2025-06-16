import React, { useState } from 'react';
import "./login.css";
import squaresImage from '../../assets/log-reg/squares.svg';
// import eyeImage from '../../assets/log-reg/eye.svg';
import useLocalStorage from 'use-local-storage';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useLocalStorage(
        "theme",
        defaultDark ? "dark" : "light"
    );

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

            if (response.ok) {
                // const exists = data.some(user => user.email === formData.email && user.password === formData.password);

                setMessage("User logged in successfully!");
                await setTimeout(2000);
                window.location.href = "/";
                // Store the token in localStorage
                // const token = response.headers.get("Authorization");
                const result = await response.json();
                localStorage.setItem("token", result.token);

            } else {
                setMessage("Error logging in user.");
            }
        } catch (error) {
            setMessage("Request failed: " + error);
        }
    };

    return (
        <div className="login" data-theme={theme}>
            <title>Login</title>
            <img src={squaresImage} className="squares" alt="Squares" />
            <div className="logo-group">

            </div>
            <div className="login-form">
                <div className="group-1">
                    <div className="group-2">
                        <p class="welcome-title">Welcome to Pet Shelter</p>
                        <div className="node">
                            <p class="welcome-subtitle">Login. No account? <a href="/register">Register</a></p>
                        </div>
                    </div>
                </div>
                <div className="main-frame">
                    <form onSubmit={handleSubmit}>
                        <div class="text-field">
                            <label class="input-label">E-mail</label>
                            <input type="email" name="email" class="input-field" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="password-hide-toggle">
                            <div className="eye-icon">
                                <img src="{eyeImage}" className="eye" alt="Eye" />
                            </div>
                            <p class="hide-text">Hide</p>
                        </div>
                        <div class="text-field">
                            <label class="input-label">Password</label>
                            <input type="password" name="password" class="input-field" value={formData.password} onChange={handleChange} />
                        </div>
                        <p class="forgot-password">Forgot password?</p>
                        <button className="login-button" type="submit">Log in</button>
                        {message && <p className="message">{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;