import './header.css';
import { Link } from 'react-router-dom';
import pawIcon from '../../assets/logo/logo.svg'; 
import searchIcon from '../../assets/icons/search.png';

function Header() {
  return (
    <div className="header">
      <div className="top-bar">
        <div className="left-logo">
          <div className="circle">
            <img src={pawIcon} alt="Paw" className="paw-icon" />
          </div>
          <p className="brand-name">Pet Adoption Center</p>
        </div>
        <div className="navigation">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/catalog" className="nav-link">Animal Catalog</Link>
          <a href="/#news" className="nav-link">News</a>
          <a href="/#reviews" className="nav-link">Reviews</a>
          <Link to="/contact" className="nav-link">Contacts</Link>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search in site" />
          <img src={searchIcon} alt="Search" className="search-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
