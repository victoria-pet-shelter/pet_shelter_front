import "./register.css";
import { useState } from "react";
import squaresImage from "../../assets/log-reg/squares.svg";
import eyeOpen from "../../assets/log-reg/eye.png";
import eyeClosed from "../../assets/log-reg/hidden.png";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const [message, setMessage] = useState("");
  const [isShelterOwner, setIsShelterOwner] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggle = () => {
    const newRole = !isShelterOwner;
    setIsShelterOwner(newRole);
    setFormData({ ...formData, role: newRole ? "shelter_owner" : "user" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("User registered successfully!");
        await setTimeout(() => {
          window.location.href = "/";
        }, 2000);
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
      <img src={squaresImage} className="squares" alt="Squares" />
      <div className="registration-form">
        <div className="register-title">
          <p className="welcome-title">
            <span className="text-rgb-1">Welcome to Pet Shelter</span>
          </p>
          <div className="node">
            <p className="welcome-subtitle">
              <span className="text-rgb-1">
                Already have an account? <a href="/login">Login</a>
              </span>
            </p>
          </div>
        </div>
        <div className="main-frame">
          <form onSubmit={handleSubmit}>
            <div className="text-field">
              <label className="input-label">Username</label>
              <span className="text-rgb-2">
                <input
                  type="text"
                  name="name"
                  className="input-field"
                  value={formData.name}
                  onChange={handleChange}
                />
              </span>
            </div>
            <div className="text-field">
              <label className="input-label">E-mail</label>
              <span className="text-rgb-2">
                <input
                  type="email"
                  name="email"
                  className="input-field"
                  value={formData.email}
                  onChange={handleChange}
                />
              </span>
            </div>

            <div className="text-field">
              <label className="input-label">Password</label>
              <span className="text-rgb-2" style={{ position: "relative" }}>
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
                    width: "24px",
                    height: "24px",
                    cursor: "pointer"
                  }}
                />
              </span>
            </div>

            <div className="role-switch" onClick={toggle}>
              <span className={!isShelterOwner ? "active" : ""}>User</span>
              <div className={`switch ${isShelterOwner ? "right" : "left"}`}></div>
              <span className={isShelterOwner ? "active" : ""}>Shelter Owner</span>
            </div>

            <div className="requirements">
              <div className="requirements-column">
                <p>&bull; Use 8 or more characters</p>
                <p>&bull; One special character</p>
                <p>&bull; One lowercase character</p>
              </div>
              <div className="requirements-column">
                <p>&bull; One uppercase character</p>
                <p>&bull; One number</p>
              </div>
            </div>

            <span className="text-rgb-2">
              <label className="checkbox">
                I want to receive e-mails about the product, feature
                <br />
                updates, events and marketing promotions.
                <input
                  type="checkbox"
                  name="promotions"
                  onChange={(e) =>
                    setFormData({ ...formData, promotions: e.target.checked })
                  }
                />
                <span className="checkmark"></span>
              </label>
            </span>

            <p>
              <span className="text-rgb-2">
                By creating an account, you agree to the{" "}
                <a href="/terms">Terms of Use</a>
                <br />
                and <a href="/privacy">Privacy Policy</a>.
              </span>
            </p>

            <button className="register-button" type="submit">
              Create an account
            </button>
            {message && <p className="message">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
