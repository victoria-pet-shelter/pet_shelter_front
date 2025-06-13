import "./home.css";
import { useEffect, useState } from "react";
import dogsImage from "../../assets/home/dogs.jpg";
import starsImage from "../../assets/home/stars.svg";
//import brightnessSwitch from '../../assets/home/brightness-switch.svg';
//import lightIcon from '../../assets/home/light-icon.svg';

function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="App">
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
        <title>Pet Center</title>
        <div class="news-frame">
          <div class="count">
            <div class="dogcount">
              <p class="text-25">
                <span class="text-black">69</span>
              </p>
              <p class="text-26">
                <span class="text-black">dogs</span>
              </p>
            </div>
            <div class="catcount">
              <p class="text-27">
                <span class="text-black">420</span>
              </p>
              <p class="text-28">
                <span class="text-black">cats</span>
              </p>
            </div>
          </div>
          <div class="button">
            <a href="/register">
              <button class="secondary">
                <span class="text-black">Register</span>
              </button>
            </a>
            <a href="/login">
              <button class="primary">
                <span class="text-black">Login</span>
              </button>
            </a>
          </div>
          <img src={dogsImage} class="node-2" alt="Dogs" />
        </div>
        <div class="some-frame" id="news">
          <div class="slice-1"></div>
          <p class="news-title">
            <span class="text-black">
              <b>News and Articles</b>
            </span>
          </p>
          <p class="news-subtitle">
            <span class="text-black">
              Stay updated with our latest news and pet care advice.
            </span>
          </p>
          <div class="news-items">
            <div class="news-item">
              <p class="emoji">
                <span class="text-black">📰</span>
              </p>
              <p class="article-title">
                <span class="text-black">New Adoption Policies</span>
              </p>
              <p class="article-subtitle">
                <span class="text-black">
                  Learn about our updated
                  <br />
                  procedures
                </span>
              </p>
              <p class="article-date">
                <span class="text-black">Nov 12, 2022</span>
              </p>
            </div>
            <div class="news-item">
              <p class="emoji">
                <span class="text-black">🐾</span>
              </p>
              <p class="article-title">
                <span class="text-black">Pet Care Tips</span>
              </p>
              <p class="article-subtitle">
                <span class="text-black">Helpful advice for pet owners</span>
              </p>
              <p class="article-date">
                <span class="text-black">Oct 30, 2022</span>
              </p>
            </div>
            <div class="image-container">
              <div class="image">
                <p class="text-22">
                  <span class="text-black">News picture</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="reviews" id="reviews">
          <p class="review-header">
            <span class="text-black">Customer reviews</span>
          </p>
          <p class="review-subheader">
            <span class="text-black">
              See what our happy adopters have to say about their new pets.
            </span>
          </p>
          <div class="user-reviews">
            <div class="user-1">
              <div class="avatar-frame">
                <div class="avatar-1"></div>
              </div>
              <div class="user-name">
                <p class="name-text">
                  <span class="text-black">Jessica</span>
                </p>
              </div>
              <div class="user-stars">
                <img src={starsImage} class="stars" alt="Stars" />
              </div>
              <p class="review">
                <span class="text-black">
                  I adopted my best friend from here! Such a wonderful
                  experience.
                </span>
              </p>
            </div>
            <div class="user-2">
              <div class="avatar-frame">
                <div class="avatar-2"></div>
              </div>
              <div class="user-name">
                <p class="name-text">
                  <span class="text-black">Michael</span>
                </p>
              </div>
              <div class="user-stars">
                <img src={starsImage} class="stars" alt="Stars" />
              </div>
              <p class="review">
                <span class="text-black">
                  Great selection of animals and excellent service.
                </span>
              </p>
            </div>
            <div class="user-1">
              <div class="avatar-frame">
                <div class="avatar-3"></div>
              </div>
              <div class="user-name">
                <p class="name-text">
                  <span class="text-black">Emily</span>
                </p>
              </div>
              <div class="user-stars">
                <img src={starsImage} class="stars" alt="Stars" />
              </div>
              <p class="review">
                <span class="text-black">
                  Couldn't be happier with my new furry companion.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="decoration-1"></div>
      </div>
    </div>
  );
}

export default Home;
