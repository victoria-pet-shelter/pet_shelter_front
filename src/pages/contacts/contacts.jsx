import "./contacts.css";
import facebookLogo from '../../assets/footer/facebook.png';
import twitterLogo from '../../assets/footer/twitter.png';
import vimeoLogo from '../../assets/footer/vimeo.png';
import useLocalStorage from 'use-local-storage';
import React, { useState } from "react";

// 🗺 Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// ⚠️ Leaflet icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

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
            const res = await fetch("http://localhost:5000/contacts", {
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
    };

    const mapCenter = [56.946285, 24.105078]; // Riga

    return (
        <div className="contact" data-theme={theme}>
            <title>Contact us</title>

            <div className="square-1"></div>
            <div className="square-2"></div>
            <div className="square-3"></div>
            <div className="square-4"></div>
            <div className="square-5"></div>
            <div className="square-6"></div>
            <div className="square-7"></div>

            <div className="contact-top">
                <div className="info">
                    <p className="info-text">Address:<br />Latvia, Fontana iela 69-42</p>
                    <p className="info-text">Phone: +371 29 969 333</p>
                    <p className="info-text">Email:<br />maemolol2@gmail.com</p>
                    <p className="open-time">Work day: 5:00 - 17:00</p>
                </div>

                <div className="map-container">
                    <MapContainer center={mapCenter} zoom={13} style={{ height: "100%", width: "100%", pointerEvents: "none" }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={mapCenter}>
                            <Popup>Pet Center Office! 🐾</Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <a
                    href="https://www.openstreetmap.org/?mlat=56.946285&mlon=24.105078#map=13/56.9463/24.1051"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-clickable">
                    <button className="map-button">Open in OpenStreetMap →</button>
                </a>
            </div>
            <div className="socials">
                <a href="https://facebook.com"><img src={facebookLogo} className="logo" alt="Facebook" /></a>
                <a href="https://vimeo.com"><img src={vimeoLogo} className="logo" alt="Vimeo" /></a>
                <a href="https://x.com"><img src={twitterLogo} className="logo" alt="Twitter" /></a>
            </div>

            <p className="paws-1">🐾</p>
            <p className="paws-2">🐾</p>
            <p className="paws-3">🐾</p>

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
        </div >
    );
}

export default Contact;
