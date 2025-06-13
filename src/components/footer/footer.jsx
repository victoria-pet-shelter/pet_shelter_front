import "./footer.css";
import { useState, useEffect } from "react";
import facebookLogo from "../../assets/footer/facebook.png";
import twitterLogo from "../../assets/footer/twitter.png";
import vimeoLogo from "../../assets/footer/vimeo.png";

function Footer() {
  const light = require("../../assets/footer/light.svg");
  const dark = require("../../assets/footer/dark.svg");
  const switchIcon = { light, dark };

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <div className="footer-1">
      <div className="footer-2">
        <div className="switch" onClick={toggleTheme}>
          <div className="switch-2"></div>
          <div className="bright-switch">
            <img
              src={darkMode ? switchIcon.dark : switchIcon.light}
              className="bright"
              alt="Brightness"
            />
          </div>
        </div>

        <a href="/contact">
          <p className="contact-footer">
            <span className="text-black">Contacts</span>
          </p>
        </a>

        <div className="node-1">
          <a href="https://facebook.com">
            <img src={facebookLogo} className="logo" alt="Facebook" />
          </a>
          <a href="https://x.com">
            <img src={twitterLogo} className="logo" alt="Twitter" />
          </a>
          <a href="https://vimeo.com">
            <img src={vimeoLogo} className="logo" alt="Vimeo" />
          </a>
        </div>

        <a href="/about">
          <p className="about-footer">
            <span className="text-black">About us</span>
          </p>
        </a>
      </div>

      <div className="footer-3">
        <div className="sub-footer">
          <p className="terms-footer">
            <span className="text-black">Terms of Service</span>
          </p>
          <p className="text-footer">
            <span className="text-black">
              © 2025 Pet Adoption Center. All Rights Reserved.
            </span>
          </p>
          <p className="privacy-footer">
            <span className="text-black">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
