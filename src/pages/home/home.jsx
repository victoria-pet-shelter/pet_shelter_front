import './home.css';
import dogsImage from '../../assets/home/dogs.jpg';
import starsImage from '../../assets/home/stars.svg';
//import brightnessSwitch from '../../assets/home/brightness-switch.svg';
//import lightIcon from '../../assets/home/light-icon.svg';
import useLocalStorage from 'use-local-storage';

function Home() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <div className="home" data-theme={theme}>
      <div class="square-1"></div>
      <div class="square-2"></div>
      <div class="square-3"></div>
      <div class="square-4"></div>
      <div class="square-5"></div>
      <div class="square-6"></div>
      <div class="square-7"></div>
      <div class="square-8"></div>
      <div class="square-9"></div>
      <div class="square-10"></div>
      <div class="square-11"></div>
      <div class="square-12"></div>
      <div class="square-13"></div>
      <div class="square-14"></div>
      <div class="square-15"></div>
      <div class="square-16"></div>
      <div class="square-17"></div>
      <div class="square-18"></div>
      <div class="home">
        <title>Pet Shelter</title>
        <div class="news-frame">
          <div class="site-title">Welcome to the Pet Center</div>
          
          <p class="site-subtitle">Every year, the following come to “Big<br />Homes”:</p>
          <div class="count">
            <div class="dogcount">
              <p class="count-number">69</p>
              <p class="count-animal">dogs</p>
            </div>
            <div class="catcount">
              <p class="count-number">420</p>
              <p class="count-animal">cats</p>
            </div>
          </div>
          <div class="button">
            <a href="/register"><button class="secondary">Register</button></a>
            <a href="/login"><button class="primary">Login</button></a>
          </div>
          <img src={dogsImage} class="node-2" alt="Dogs" />
          
        </div>
        <div class="some-frame" id="news">
          <div class="slice-1"></div>
          <p class="news-title"><b>News and Articles</b></p>
          <p class="news-subtitle">Stay updated with our latest news and pet care advice.</p>
          <div class="news-items">
            <div class="news-item">
              <p class="emoji">📰</p>
              <p class="article-title">New Adoption Policies</p>
              <p class="article-subtitle">Learn about our updated<br />procedures</p>
              <p class="article-date">Nov 12, 2022</p>
            </div>
            <div class="news-item">
              <p class="emoji">🐾</p>
              <p class="article-title">Pet Care Tips</p>
              <p class="article-subtitle">Helpful advice for pet owners</p>
              <p class="article-date">Oct 30, 2022</p>
            </div>
            <div class="image-container">
              <div class="image">
                <p class="news-picture">News picture</p>
              </div>
            </div>
          </div>
        </div>
        <div class="reviews" id="reviews">
          <p class="review-header">Customer reviews</p>
          <p class="review-subheader">See what our happy adopters have to say about their new pets.</p>
          <div class="user-reviews">
            <div class="user-1">
              <div class="avatar-frame">
                <div class="avatar"></div>
              </div>
              <div class="user-name">
                <p class="name-text">Jessica</p>
              </div>
              <div class="user-stars">
                <img src={starsImage} class="stars" alt="Stars" />
              </div>
              <p class="review">I adopted my best friend from here! Such a wonderful experience.</p>
            </div>
            <div class="user-2">
              <div class="avatar-frame">
                <div class="avatar"></div>
              </div>
              <div class="user-name">
                <p class="name-text">Michael</p>
              </div>
              <div class="user-stars">
                <img src={starsImage} class="stars" alt="Stars" />
              </div>
              <p class="review">Great selection of animals and excellent service.</p>
            </div>
            <div class="user-1">
              <div class="avatar-frame">
                <div class="avatar"></div>
              </div>
              <div class="user-name">
                <p class="name-text">Emily</p>
              </div>
              <div class="user-stars">
                <img src={starsImage} class="stars" alt="Stars" />
              </div>
              <p class="review">Couldn't be happier with my new furry companion.</p>
            </div>
          </div>
        </div>
        <div class="decoration-1"></div>
      </div>
    </div>
  );
}

export default Home;
