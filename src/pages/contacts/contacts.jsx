import "./contacts.css";
import facebookLogo from '../../assets/footer/facebook.png';
import twitterLogo from '../../assets/footer/twitter.png';
import vimeoLogo from '../../assets/footer/vimeo.png';
import map from '../../assets/contacts/map.svg';

function Contact() {
    return (
        <div className="contact">
            <title>Contact us</title>
            <div class="map-square"></div>
            <img src={map} class="map" alt="Map" />
            
            <div class="square-1"></div>
            <div class="square-2"></div>
            <div class="square-3"></div>
            <div class="square-4"></div>
            <div class="square-5"></div>
            <div class="square-6"></div>
            <div class="square-7"></div>
            
            <div className="info">
                <p class="info-text"><span class="text-black">Address:<br />Latvia, Fontana iela 69-42</span></p>
                <p class="info-text"><span class="text-black">Phone: +371 29 969 333</span></p>
                <p class="info-text"><span class="text-black">Email:<br />markkorobkin@hotmail.com</span></p>
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
                    <p className="form-title"><span className="text-black">Contact us</span></p>
                    <p className="form-subtitle"><span className="text-black">Have a question? Reach out to us</span></p>
                </div>
                
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label"><span className="text-black">Name</span></label>
                        <input type="text" id="name" className="form-input" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label"><span className="text-black">Email</span></label>
                        <input type="email" id="email" className="form-input" placeholder="Your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="form-label"><span className="text-black">Message</span></label>
                        <textarea id="message" className="form-textarea" placeholder="Your message" required maxLength={200}></textarea>
                    </div>
                    <button type="submit" className="form-button"><span className="text-white">Submit</span></button>
                </form>
                <hr className="divider" />
            </div>      
        </div>
    );
}

export default Contact;