import './home.css';
import dogsImage from '../../assets/home/dogs.jpg';
import starsImage from '../../assets/home/stars.svg';
import useLocalStorage from 'use-local-storage';
import newsImage from '../../assets/news/News Picture.jpg';
import { useEffect, useState } from 'react';

function Home() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 50);
  }, []);

  return (
    <div className={`home ${loaded ? 'home-visible' : ''}`} data-theme={theme}>
      <div className="square-1"></div>
      <div className="square-2"></div>
      <div className="square-3"></div>
      <div className="square-4"></div>
      <div className="square-5"></div>
      <div className="square-6"></div>
      <div className="square-7"></div>
      <div className="square-8"></div>
      <div className="square-9"></div>
      <div className="square-10"></div>
      <div className="square-11"></div>
      <div className="square-12"></div>
      <div className="square-13"></div>
      <div className="square-14"></div>
      <div className="square-15"></div>
      <div className="square-16"></div>
      <div className="square-17"></div>
      <div className="square-18"></div>

      <title>Pet Shelter</title>
      <div className="news-frame fade-in delay-1">
        <div className="news-frame-elements">
          <div className="site-title">Welcome to the Pet Center</div>
          <p className="site-subtitle">Every year, the following come to “Big<br />Homes”:</p>
          <div className="count">
            <div className="dogcount">
              <p className="count-number">69</p>
              <p className="count-animal">dogs</p>
            </div>
            <div className="catcount">
              <p className="count-number">420</p>
              <p className="count-animal">cats</p>
            </div>
          </div>
          <div className="button">
            <a href="/register"><button className="secondary">Register</button></a>
            <a href="/login"><button className="primary">Login</button></a>
          </div>
        </div>
        <img src={dogsImage} className="node-2" alt="Dogs" />
      </div>

      <div className="some-frame fade-in delay-2" id="news">
        <div className="slice-1"></div>
        <p className="news-title"><b>News and Articles</b></p>
        <p className="news-subtitle">Stay updated with our latest news and pet care advice.</p>
        <div className="news-items">
          <div className="news-item">
            <p className="emoji">📰</p>
            <p className="article-title">New Adoption Policies</p>
            <p className="article-subtitle">Learn about our updated<br />procedures</p>
            <p className="article-date">Nov 12, 2022</p>
          </div>
          <div className="news-item">
            <p className="emoji">🐾</p>
            <p className="article-title">Pet Care Tips</p>
            <p className="article-subtitle">Helpful advice for pet owners</p>
            <p className="article-date">Oct 30, 2022</p>
          </div>
          <div className="image-container">
            <img src={newsImage} className="news-picture" alt="News picture" />
          </div>
        </div>
      </div>

      <div className="reviews fade-in delay-3" id="reviews">
        <p className="review-header">Customer reviews</p>
        <p className="review-subheader">See what our happy adopters have to say about their new pets.</p>
        <div className="user-reviews">
          <div className="user-1">
            <div className="avatar-frame">
              <div className="avatar"></div>
            </div>
            <div className="user-name">
              <p className="name-text">Jessica</p>
            </div>
            <div className="user-stars">
              <img src={starsImage} className="stars" alt="Stars" />
            </div>
            <p className="review">I adopted my best friend from here! Such a wonderful experience.</p>
          </div>
          <div className="user-2">
            <div className="avatar-frame">
              <div className="avatar"></div>
            </div>
            <div className="user-name">
              <p className="name-text">Michael</p>
            </div>
            <div className="user-stars">
              <img src={starsImage} className="stars" alt="Stars" />
            </div>
            <p className="review">Great selection of animals and excellent service.</p>
          </div>
          <div className="user-1">
            <div className="avatar-frame">
              <div className="avatar"></div>
            </div>
            <div className="user-name">
              <p className="name-text">Emily</p>
            </div>
            <div className="user-stars">
              <img src={starsImage} className="stars" alt="Stars" />
            </div>
            <p className="review">Couldn't be happier with my new furry companion.</p>
          </div>
        </div>
      </div>
      <div className="decoration-1"></div>
    </div>
  );
}

export default Home;
