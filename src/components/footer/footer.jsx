import "./footer.css";
import facebookLogo from "../../assets/footer/facebook.png";
import twitterLogo from "../../assets/footer/twitter.png";
import vimeoLogo from "../../assets/footer/vimeo.png";
import sunIcon from "../../assets/footer/light.png";
import moonIcon from "../../assets/footer/dark.svg";
import useLocalStorage from "use-local-storage";

function Footer() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="footer-1" data-theme={theme}>
      <div className="footer-2">
        <button onClick={switchTheme} className="theme-button">
          <img
            src={theme === "light" ? moonIcon : sunIcon}
            alt="Toggle Theme"
            className="theme-icon"
          />
        </button>

        <a href="/contact">
          <p className="footer-text">Contacts</p>
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
          <p className="footer-text">About us</p>
        </a>
      </div>
      <div className="footer-3">
        <div className="sub-footer">
          <p className="footer-text">Terms of Service</p>
          <p className="footer-text">
            © 2025 Pet Adoption Center. All Rights Reserved.
          </p>
          <p className="footer-text">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
