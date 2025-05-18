import "./contact.css";

function Contact() {
    return (
        <div className="contact">
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
            <title>Contact us</title>
            <div className="contact-us">
                <div className="contact-form">
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
                </div>
                <hr className="divider" />
                <p class="logo-text"><span class="text-black">🐾</span></p>
            </div>
                    
        </div>
    );
}

export default Contact;