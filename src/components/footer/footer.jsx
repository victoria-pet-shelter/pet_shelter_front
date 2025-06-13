import './footer.css';
import { useState, useEffect } from 'react';
import facebookLogo from '../../assets/footer/facebook.png';
import twitterLogo from '../../assets/footer/twitter.png';
import vimeoLogo from '../../assets/footer/vimeo.png';

function Footer() {
    const light = require('../../assets/footer/light.svg');
    const dark = require('../../assets/footer/dark.svg');
    const switchIcon = { light, dark };
    const [brightness, setBrightness] = useState(switchIcon.light);

    return (
        <div class="footer-1">
            <div class="footer-2">
                <div class="switch">
                    <div class="switch-2"></div>
                    <div class="bright-switch">
                        <img src={brightness} class="bright" alt="Brightness" onClick={() => setBrightness(switchIcon.dark)} />
                    </div>
                </div>
                <a href="/contact"><p class="contact-footer"><span class="text-black">Contacts</span></p></a>
                <div class="node-1">
                    <a href="https://facebook.com"><img src={facebookLogo} class="logo" alt="Facebook" /></a>
                    <a href="https://x.com"><img src={twitterLogo} class="logo"  alt="Twitter" /></a>
                    <a href="https://vimeo.com"><img src={vimeoLogo} class="logo" alt="Vimeo" /></a>
                </div>
                <a href="/about"><p class="about-footer"><span class="text-black">About us</span></p></a>
            </div>
            <div class="footer-3">
                <div class="sub-footer">
                    
                    <p class="terms-footer"><span class="text-black">Terms of Service</span></p>
                    <p class="text-footer"><span class="text-black">© 2025 Pet Adoption Center. All Rights Reserved.</span></p>
                    <p class="privacy-footer"><span class="text-black">Privacy Policy</span></p>
                    
                </div>
            </div>
        </div>
    );
}

export default Footer;