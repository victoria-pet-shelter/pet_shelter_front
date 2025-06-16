import React, { useEffect, useState } from "react";
import "./user_profile.css";
import useLocalStorage from 'use-local-storage';

const API_URL = "http://localhost:5000";

function UserProfile() {
    const token = localStorage.getItem("token");

    const [user, setUser] = useState(null);
    const [editData, setEditData] = useState({ name: "", email: "", phone: "", role: "user" });
    const [newPassword, setNewPassword] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        fetch(`${API_URL}/users/me`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setEditData({
                    name: data.name || "",
                    email: data.email || "",
                    phone: data.phone || "",
                    role: data.role || "user"
                });
            });
    }, [token]);

    if (!token) {
        return <p>You need to <a href="/login">log in</a> to view your profile.</p>;
    }

    const handleChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const saveProfile = async () => {
        if (!user) return;
        const res = await fetch(`${API_URL}/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(editData)
        });
        const text = await res.text();
        setStatus(text);
    };

    const updatePassword = async () => {
        if (!user) return;
        const res = await fetch(`${API_URL}/users/${user.id}/password`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ newPassword })
        });
        const data = await res.json();
        setStatus(data.message);
        setNewPassword("");
    };

    if (!user) return <p>Loading...</p>;

    return (
        <div className="profile-container">
            <h2 className="profile-title">My Profile</h2>

            <div className="profile-form">
                <label>Name</label>
                <input name="name" value={editData.name} onChange={handleChange} />

                <label>Email</label>
                <input name="email" value={editData.email} onChange={handleChange} />

                <label>Phone</label>
                <input name="phone" value={editData.phone} onChange={handleChange} />

                <label>Role</label>
                <select name="role" value={editData.role} onChange={handleChange}>
                    <option value="user">user</option>
                    <option value="shelter_owner">shelter_owner</option>
                </select>

                <button onClick={saveProfile} className="save-button">Save</button>
            </div>

            <div className="password-section">
                <h3>Change Password</h3>
                <input
                    type="password"
                    placeholder="New password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <button onClick={updatePassword} className="password-button">Update Password</button>
                <button onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/";
                }}>Logout</button>

            </div>

            <p>{status}</p>
        </div>
    );
}

export default UserProfile;
