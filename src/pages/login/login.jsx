import React, { useState } from 'react';
import "./login.css";
import squaresImage from '../../assets/log-reg/squares.svg';
// import eyeImage from '../../assets/log-reg/eye.svg';
import useLocalStorage from 'use-local-storage';

function WindowTimeOut() {
    window.location.href = "/";
}

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

                // window.location.href = "/";

                const data = await response.json();
                localStorage.setItem("token", data.token);
                await setTimeout(WindowTimeOut, 2000);
            } else {
                setMessage("Error logging in user.");
                await setTimeout(WindowTimeOut, 2000);
            }
        } catch (error) {
            setMessage("Request failed: " + error);
            await setTimeout(WindowTimeOut, 2000);
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