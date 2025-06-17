import './about.css';
import gigachad from '../../assets/about/gigachad.jpg';
import markImage from '../../assets/about/mark.jpg';
import useLocalStorage from "use-local-storage";
import { useEffect, useState } from 'react';

function About() {
    const [loaded, setLoaded] = useState(false);
    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

    useEffect(() => {
        setTimeout(() => setLoaded(true), 50);
    }, []);

    return (
        <div className={`about ${loaded ? 'about-visible' : ''}`} data-theme={theme}>
            <title>About us</title>
            <div className="about-us fade-in delay-1">
                <div className="about-us-history">
                    <div className="history">
                        <p className="history-title">Our history</p>
                        <p className="history-body">
                            We are Alan Arzumanyan and Mark Korobkin - two poor students wandering around the offices of the great horde of Victoria.<br /><br />
                            Mark is known for his sensitive tongue/language (English) and knowledge of Linux. They say that he was born in women's glasses with a bottle of Dr. Pepper between his legs and Linux in front of his eyes. Therefore, Mark's role in the project is largely associated with unusual fantasy and design.<br /><br />
                            Alan, in turn, is the main developer. Grass whispered that his romanticism does not allow a single server to fall. His role in this project is to develop hard and kick Mark with his feet so that he works.
                        </p>
                    </div>
                </div>

                <div className="avatar-section fade-in delay-2">
                    <div className="alan-avatar">
                        <div className="alan-group">
                            <img src={gigachad} className="alan" alt="Alan Arzumanyan" />
                            <p className="name">Alans Arzumanjans</p>
                            <p className="role">Galvenais sigma progrāmetājs</p>
                        </div>
                    </div>

                    <div className="mark-avatar">
                        <div className="group">
                            <img src={markImage} className="mark" alt="Mark Korobkin" />
                            <p className="name">Mark Korobkin</p>
                            <p className="role">Baby mama</p>
                        </div>
                    </div>
                </div>

                <div className="our-mission-frame fade-in delay-3">
                    <div className="frame-1">
                        <div className="mission">
                            <p className="mission-title">Our mission</p>
                            <p className="mission-body">
                                Once our overlord Anatolijs Z. gave us some bread and told us to work.
                                So we started making a pet shelter website. To tame every poor animal and give happiness to people!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
