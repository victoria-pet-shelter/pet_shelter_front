import "./footer.css";
import { useState, useEffect } from "react";
import Toggle from "react-toggle";
import { useMediaQuery } from "react-responsive";
import facebookLogo from "../../assets/footer/facebook.png";
import twitterLogo from "../../assets/footer/twitter.png";
import vimeoLogo from "../../assets/footer/vimeo.png";
import useLocalStorage from 'use-local-storage';

function Footer() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <div class="footer-1" data-theme={theme}>
      <div class="footer-2">
        <input type="checkbox" onChange={setTheme} />
        <a href="/contact">
          <p class="contact-footer">
            <span class="text-black">Contacts</span>
          </p>
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
          <p class="about-footer">
            <span class="text-black">About us</span>
          </p>
        </a>
      </div>
      <div class="footer-3">
        <div class="sub-footer">
          <p class="terms-footer">
            <span class="text-black">Terms of Service</span>
          </p>
          <p class="text-footer">
            <span class="text-black">
              © 2025 Pet Adoption Center. All Rights Reserved.
            </span>
          </p>
          <p class="privacy-footer">
            <span class="text-black">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
