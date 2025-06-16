import './header.css';
import logoIcon from '../../assets/header/logo.svg';
import searchIcon from "../../assets/header/search.svg";
import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";

function Header() {
    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useLocalStorage(
        "theme",
        defaultDark ? "dark" : "light"
    );

    const token = localStorage.getItem("token");

    return (
        <div className="header" data-theme={theme}>
            <div className="menubar">
                <div className="top-bar">
                    <div className="logo-circle">
                        <img src={logoIcon} className="logo" alt="Logo" />
                    </div>
                    <p className="logo-text">Pet Adoption Center</p>
                    <div className="navigation">
                        <Link to="/"><p className="nav-text">Home</p></Link>
                        <Link to="/catalog"><p className="nav-text">Catalog</p></Link>
                        <a href="/#news"><p className="nav-text">News</p></a>
                        <p className="nav-text">Gallery</p>
                        <a href="/#reviews"><p className="nav-text">Reviews</p></a>
                        <Link to="/contact"><p className="nav-text">Contacts</p></Link>

                        {token && (
                            <Link to="/profile"><p className="nav-text">My Profile</p></Link>
                        )}

                        <div className="search">
                            <p className="search-text">Search in site</p>
                            <div className="search-ic">
                                <img src={searchIcon} className="search-ic-img" alt="Search" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
