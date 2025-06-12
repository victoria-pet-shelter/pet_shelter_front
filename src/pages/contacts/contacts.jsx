import "./contacts.css";
import facebookLogo from '../../assets/footer/facebook.png';
import twitterLogo from '../../assets/footer/twitter.png';
import vimeoLogo from '../../assets/footer/vimeo.png';

function Contact() {
    return (
        <div className="contact">
            <title>Contact us</title>
            <div className="info">
                <p class="address"><span class="text-black">Address:<br />Latvia, Fontana iela 69-42</span></p>
                <p class="phone"><span class="text-black">Phone: +371 29 969 333</span></p>
                <p class="email"><span class="text-black">Email:<br />markkorobkin@hotmail.com</span></p>
                <p class="open-time"><span class="text-black">Work day: 5:00 - 17:00</span></p>
            </div>
            <div className="socials">
                <a href="https://facebook.com"><img src={facebookLogo} className="logo" alt="Facebook" /></a>
                <a href="https://vimeo.com"><img src={vimeoLogo} className="logo" alt="Vimeo" /></a>
                <a href="https://x.com"><img src={twitterLogo} className="logo" alt="Twitter" /></a>
            </div>
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
                <p class="logo-text"><span class="text-black">🐾</span></p>
            </div>      
        </div>
    );
}

export default Contact;