import './footer.css';
import facebookLogo from '../../assets/footer/facebook.png';
import twitterLogo from '../../assets/footer/twitter.png';
import vimeoLogo from '../../assets/footer/vimeo.png';

function Footer() {
    return (
        <div class="footer-1">
            <div class="footer-2">
                <hr />
                <div class="node-1">
                    <img src={facebookLogo} class="logo" alt="Facebook" />
                    <img src={twitterLogo} class="logo"  alt="Twitter" />
                    <img src={vimeoLogo} class="logo" alt="Vimeo" />
                </div>
            </div>
            <div class="footer-3">
                <div class="sub-footer">
                    <p class="text-footer"><span class="text-black">© 2025 Pet Adoption Center. All Rights Reserved.</span></p>
                    <p class="text-footer"><span class="text-black">Privacy Policy</span></p>
                    <p class="text-footer"><span class="text-black">Terms of Service</span></p>
                    <a href="/about"><p class="text-footer"><span class="text-black">About us</span></p></a>
                    <a href="/contact"><p class="text-footer"><span class="text-black">Contacts</span></p></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;