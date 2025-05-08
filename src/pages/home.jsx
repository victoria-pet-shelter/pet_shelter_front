import './home.css';

function Home() {
  return (
    <div className="App">
      <div class="home">
        <title>Pet Shelter</title>
        <div class="news-frame">
          <div class="rectangle-1"></div>
          <p class="text-23"><span class="text-black">Welcome to the Pet Center</span></p>
          <img src="./images/node.png" class="node-2" alt="Dogs" />
          <p class="text-24"><span class="text-black">Every year, the following come to “Big
          Homes”:</span></p>
          <div class="dogcount">
            <p class="text-25"><span class="text-black">69</span></p>
            <p class="text-26"><span class="text-black">dogs</span></p>
            <div class="catcount">
              <p class="text-27"><span class="text-black">420</span></p>
              <p class="text-28"><span class="text-black">cats</span></p>
            </div>
          </div>
          <div class="button">
            <div class="secondary">
              <a href="/register"><p class="text-29"><span class="text-black">Register</span></p></a>
            </div>
            <div class="primary">
              <a href="/login"><p class="text-30"><span class="text-black">Login</span></p></a>
            </div>
          </div>
          <div class="decoration-2"></div>
          <div class="decoration-2"></div>
          <div class="decoration-2"></div>
          <div class="decoration-2"></div>
          <div class="decoration-2"></div>
          <div class="decoration-2"></div>
          <div class="decoration-2"></div>
          <div class="decoration-2"></div>
          <div class="decoration-2"></div>
          <div class="decoration-2"></div>
          <div class="node-3"></div>
        </div>
        <div class="some-frame" id="news">
          <div class="slice-1"></div>
          <p class="text-11"><span class="text-black">News and Articles</span></p>
          <p class="text-12"><span class="text-black">Stay updated with our latest news and pet care advice.</span></p>
          <p class="text-13"><span class="text-black">📰</span></p>
          <p class="text-14"><span class="text-black">New Adoption Policies</span></p>
          <p class="text-15"><span class="text-black">Learn about our updated procedures</span></p>
          <p class="text-16"><span class="text-black">Nov 12, 2022</span></p>
          <p class="text-17"><span class="text-black">🐾</span></p>
          <p class="text-18"><span class="text-black">Pet Care Tips</span></p>
          <p class="text-19"><span class="text-black">Helpful advice for pet owners</span></p>
          <p class="text-20"><span class="text-black">Oct 30, 2022</span></p>
          <p class="text-21"><span class="text-black">Oct 30, 2022</span></p>
          <div class="image-container">
            <div class="image">
              <p class="text-22"><span class="text-black">News picture</span></p>
            </div>
          </div>
        </div>
        <div class="reviews" id="reviews">
          <p class="review-header"><span class="text-black">Customer reviews</span></p>
          <p class="review-subheader"><span class="text-black">See what our happy adopters have to say about their new pets.</span></p>
          <div class="user-1">
            <div class="avatar-frame">
              <div class="avatar-1"></div>
            </div>
            <div class="user-name">
              <p class="name-text"><span class="text-black">Jessica</span></p>
            </div>
            <div class="user-stars">
              <img src="./images/stars.svg" class="stars" alt="Stars" />
            </div>
            <p class="review"><span class="text-black">I adopted my best friend from here! Such a wonderful experience.</span></p>
          </div>
          <div class="user-2">
            <div class="avatar-frame">
              <div class="avatar-2"></div>
            </div>
            <div class="user-name">
              <p class="name-text"><span class="text-black">Michael</span></p>
            </div>
            <div class="user-stars">
              <img src="./images/stars.svg" class="stars" alt="Stars" />
            </div>
            <p class="review"><span class="text-black">Great selection of animals and excellent service.</span></p>
          </div>
          <div class="user-3">
            <div class="avatar-frame">
              <div class="avatar-3"></div>
            </div>
            <div class="user-name">
              <p class="name-text"><span class="text-black">Emily</span></p>
            </div>
            <div class="user-stars">
              <img src="./images/stars.svg" class="stars" alt="Stars" />
            </div>
            <p class="review"><span class="text-black">Couldn't be happier with my new furry companion.</span></p>
          </div>
        </div>
        <div class="switch">
          <div class="switch-2"></div>
          <div class="bright-switch">
            <img src="./images/switch.svg" class="bright" alt="Brightness" />
            <div class="light-ic">
              <img src="./images/light.svg" class="light" alt="Light" />
            </div>
          </div>
        </div>
        <p class="paw"><span class="text-black">🐾</span></p>
        <p class="paw"><span class="text-black">🐾</span></p>
        <div class="decoration-1"></div>
        <div class="review-frame">
          <div class="decoration-2"></div>
          <div class="decoration-2"></div>
          <div class="decoration-2"></div>
          <div class="decoration-2"></div>
          <div class="decoration-2"></div>
          <div class="decoration-2"></div>
          <div class="decoration-2"></div>
        </div>
        <div class="footer-1">
          <div class="footer-2">
            <hr />
            <div class="node-1">
              <img src="./images/facebook.png" class="facebook" alt="Facebook" />
              <img src="./images/twitter.png" class="twitter"  alt="Twitter" />
              <img src="./images/vimeo.png" class="vimeo" alt="Vimeo" />
          </div>
        </div>
        <div class="footer-3">
          <div class="sub-footer">
            <p class="text-32"><span class="text-black">© 2025 Pet Adoption Center. All Rights Reserved.</span></p>
            <p class="text-32"><span class="text-black">Privacy Policy</span></p>
            <p class="text-32"><span class="text-black">Terms of Service</span></p>
            <a href="/about"><p class="text-32"><span class="text-black">About us</span></p></a>
            <a href="/contact"><p class="text-32"><span class="text-black">Contacts</span></p></a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
