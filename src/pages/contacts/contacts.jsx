import "./contacts.css";
import facebookLogo from '../../assets/footer/facebook.png';
import twitterLogo from '../../assets/footer/twitter.png';
import vimeoLogo from '../../assets/footer/vimeo.png';
import map from '../../assets/contacts/map.svg';
import useLocalStorage from 'use-local-storage';
import React, { useState } from "react";

function Contact() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("✅ Message sent!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("❌ Failed to send message.");
            }
        } catch (error) {
            setStatus("❌ Error: " + error.message);
        }
    }
    return (
        <div className="contact" data-theme={theme}>
            <title>Contact us</title>
            <div class="map-square"></div>
            {/* <img src={map} class="map" alt="Map" /> */}

            <div class="square-1"></div>
            <div class="square-2"></div>
            <div class="square-3"></div>
            <div class="square-4"></div>
            <div class="square-5"></div>
            <div class="square-6"></div>
            <div class="square-7"></div>

            <div className="info">
                <p class="info-text">Address:<br />Latvia, Fontana iela 69-42</p>
                <p class="info-text">Phone: +371 29 969 333</p>
                <p class="info-text">Email:<br />markkorobkin@hotmail.com</p>
                <p class="open-time">Work day: 5:00 - 17:00</p>
            </div>
            <div className="socials">
                <a href="https://facebook.com"><img src={facebookLogo} className="logo" alt="Facebook" /></a>
                <a href="https://vimeo.com"><img src={vimeoLogo} className="logo" alt="Vimeo" /></a>
                <a href="https://x.com"><img src={twitterLogo} className="logo" alt="Twitter" /></a>
            </div>
            <p class="paws-1">🐾</p>
            <p class="paws-2">🐾</p>
            <p class="paws-3">🐾</p>

            <div className="contact-us">
                <div className="form-titles">
                    <p className="form-title">Contact us</p>
                    <p className="form-subtitle">Have a question? Reach out to us</p>
                </div>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" id="name" className="form-input" placeholder="Your name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" className="form-input" placeholder="Your email" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea id="message" className="form-textarea" placeholder="Your message" required maxLength={200} value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="form-button">Submit</button>
                    {status && <p>{status}</p>}
                </form>
                <hr className="divider" />
            </div>
        </div>
    );
};

export default Contact;