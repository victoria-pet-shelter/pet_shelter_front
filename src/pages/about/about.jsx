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
                        <p class="history-title"><span class="text-black">Our history</span></p>
                        <p class="history-body"><span class="text-black">We are Alan Arzumanyan and Mark Korobkin - two poor students wandering around the offices of the great horde of Victoria.<br />Mark is known for his sensitive tongue/language (English) and knowledge of Linux. They say that he was born in women's glasses with a bottle of Dr. Pepper between his legs and Linux in front of his eyes. Therefore, Mark's role in the project is largely associated with unusual fantasy and design.<br />Alan, in turn, is the main developer. Grass whispered that his romanticism does not allow a single server to fall. His role in this project is to develop hard and kick Mark with his feet so that he works.</span></p>
                    </div>
                </div>
                <div class="alan-avatar">
                    
                        <div class="alan-group">
                            <img src={gigachad} class="alan" alt="Alan Arzumanyan" />
                            <p class="name"><span class="text-black">Alans Arzumanjans</span></p>
                            <p class="role"><span class="text-black">Galvenais sigma progrāmetājs</span></p>
                        </div>
                    
                </div>
                <div class="mark-avatar">
                        <div class="group">
                            <img src={markImage} class="mark" alt="Mark Korobkin" />
                            <p class="name"><span class="text-black">Mark Korobkin</span></p>
                            <p class="role"><span class="text-black">Direktors</span></p>
                        </div>
                </div>
                <div class="our-mission-frame">
                    <div class="frame-1">
                        <div class="mission">
                            <p class="mission-title"><span class="text-black">Our mission</span></p>
                            <p class="mission-body"><span class="text-black">Once our overlord Anatolijs Z. gave us some bread and told us to work. So we started making a pet shelter website. To tame every poor animal and give happiness to people!</span></p>
                        </div>
                    </div>
                    <div class="mark-avatar">
                        <div class="node-1">
                            <div class="group">
                                <p class="name"><span class="text-black">Mark Korobkin</span></p>
                                {/* <img src={markImage} class="mark" alt="Mark Korobkin" /> */}
                                <p class="role"><span class="text-black">Direktors</span></p>
                            </div>
                        </div>
                        <div class="our-history"></div>
                    </div>
                </div>
                <div class="our-history"></div>
            </div>
        </div>
    );
}

export default About;