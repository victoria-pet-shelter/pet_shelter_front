import './register.css';
import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({ name: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch("http://localhost:8080/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
            const exists = data.some(user => user.name === formData.name && user.password === formData.password);
            if (exists) {
            setMessage("User registered successfully!");
            } else {
            setMessage("Error registering user.");
            }
        } else {
            setMessage("Error registering user.");
        }
        } catch (error) {
        setMessage("Request failed: " + error);
        }
    };

    return (
        <div className="register">
            <meta charset='utf-8' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Register</title>
            <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
            <div class="register-frame">
                <div class="squares">
                    <img src="./images/squares.svg" class="squares" alt="Squares" />
                </div>
                <div class="sidebar">
                    <div class="sign-up">
                        <div class="page">
                            <div class="sign-up-frame">
                                <div class="register-title">
                                    <p class="welcome-title"><span class="text-rgb-1">Welcome to Pet Shelter</span></p>
                                    <div className="node">
                                        <p class="welcome-subtitle"><span class="text-rgb-1">Login. No account? <a href="/register">Register</a></span></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;