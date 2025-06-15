import "./footer.css";
import facebookLogo from "../../assets/footer/facebook.png";
import twitterLogo from "../../assets/footer/twitter.png";
import vimeoLogo from "../../assets/footer/vimeo.png";
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
    <div class="footer-1" data-theme={theme}>
      <div class="footer-2">
        <button onClick={switchTheme}>
          Switch to {theme === "light" ? "dark" : "light"} theme
        </button>
        <a href="/contact">
          <p class="footer-text">Contacts</p>
        </a>
        <div class="node-1">
          <a href="https://facebook.com">
            <img src={facebookLogo} class="logo" alt="Facebook" />
          </a>
          <a href="https://x.com">
            <img src={twitterLogo} class="logo" alt="Twitter" />
          </a>
          <a href="https://vimeo.com">
            <img src={vimeoLogo} class="logo" alt="Vimeo" />
          </a>
        </div>
        <a href="/about">
          <p class="footer-text">About us</p>
        </a>
      </div>
      <div class="footer-3">
        <div class="sub-footer">
          <p class="footer-text">Terms of Service</p>
          <p class="footer-text">
            © 2025 Pet Adoption Center. All Rights Reserved.
          </p>
          <p class="footer-text">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
