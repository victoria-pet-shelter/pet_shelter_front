import React, { useState } from 'react';
import "./login.css";
import squaresImage from '../../assets/log-reg/squares.svg';
import eyeOpen from '../../assets/log-reg/eye.png';
import eyeClosed from '../../assets/log-reg/hidden.png';
import useLocalStorage from 'use-local-storage';

function WindowTimeOut() {
    window.location.href = "/";
}

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

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
                const data = await response.json();
                localStorage.setItem("token", data.token);
                setMessage("User logged in successfully!");
                setTimeout(WindowTimeOut, 2000);
            } else {
                setMessage("Error logging in user.");
                setTimeout(WindowTimeOut, 2000);
            }
        } catch (error) {
            setMessage("Request failed: " + error);
            setTimeout(WindowTimeOut, 2000);
        }
    };

    return (
        <div className="login" data-theme={theme}>
            <title>Login</title>
            <img src={squaresImage} className="squares" alt="Squares" />
            <div className="login-form">
                <div className="group-1">
                    <div className="group-2">
                        <p className="welcome-title">Welcome to Pet Shelter</p>
                        <div className="node">
                            <p className="welcome-subtitle">
                                Login. No account? <a href="/register">Register</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="main-frame">
                    <form onSubmit={handleSubmit}>
                        <div className="text-field">
                            <label className="input-label">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                className="input-field"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="text-field">
                            <label className="input-label">Password</label>
                            <div style={{ position: "relative" }}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="input-field"
                                    value={formData.password}
                                    onChange={handleChange}
                                    style={{ paddingRight: "40px" }}
                                />
                                <img
                                    src={showPassword ? eyeClosed : eyeOpen}
                                    alt="Toggle visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="eye"
                                    style={{
                                        position: "absolute",
                                        right: "10px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        cursor: "pointer",
                                        width: "24px",
                                        height: "24px"
                                    }}
                                />
                            </div>
                        </div>

                        <p className="forgot-password">Forgot password?</p>
                        <button className="login-button" type="submit">Log in</button>
                        {message && <p className="message">{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
