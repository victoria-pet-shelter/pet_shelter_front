import './about.css';
import gigachad from '../../assets/about/gigachad.jpg';
import markImage from '../../assets/about/mark.jpg';

function About() {
    return (
        <div className="about">
            <title>About us</title>
            <div class="about-us">
                <div class="about-us-history">
                    <div class="history">
                        <p class="history-title">Our history</p>
                        <p class="history-body">We are Alan Arzumanyan and Mark Korobkin - two poor students wandering around the offices of the great horde of Victoria.<br />Mark is known for his sensitive tongue/language (English) and knowledge of Linux. They say that he was born in women's glasses with a bottle of Dr. Pepper between his legs and Linux in front of his eyes. Therefore, Mark's role in the project is largely associated with unusual fantasy and design.<br />Alan, in turn, is the main developer. Grass whispered that his romanticism does not allow a single server to fall. His role in this project is to develop hard and kick Mark with his feet so that he works.</p>
                    </div>
                </div>
                <div class="alan-avatar">

                    <div class="alan-group">
                        <img src={gigachad} class="alan" alt="Alan Arzumanyan" />
                        <p class="name">Alans Arzumanjans</p>
                        <p class="role">Galvenais sigma progrāmetājs</p>
                    </div>

                </div>
                <div class="mark-avatar">
                    <div class="group">
                        <img src={markImage} class="mark" alt="Mark Korobkin" />
                        <p class="name">Mark Korobkin</p>
                        <p class="role">Direktors</p>
                    </div>
                </div>
                <div class="our-mission-frame">
                    <div class="frame-1">
                        <div class="mission">
                            <p class="mission-title">Our mission</p>
                            <p class="mission-body">Once our overlord Anatolijs Z. gave us some bread and told us to work. So we started making a pet shelter website. To tame every poor animal and give happiness to people!</p>
                        </div>
                    </div>
                </div>
                <div class="our-history"></div>
            </div>
        </div>
    );
}

export default About;