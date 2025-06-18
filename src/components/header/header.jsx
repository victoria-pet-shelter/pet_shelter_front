import './header.css';
import logoIcon from '../../assets/header/logo.svg';
import searchIcon from "../../assets/header/search.svg";
import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { useEffect, useState } from "react";
import profileIcon from "../../assets/header/profile_icon.png";

function Header() {
    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useLocalStorage(
        "theme",
        defaultDark ? "dark" : "light"
    );

    const token = localStorage.getItem("token");
    const [tokenExists, setTokenExists] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        setTokenExists(!!token);
        console.log("🔐 Token found:", token);
    }, []);

    return (
        <div className="header" data-theme={theme}>
            <div className="menubar">
                <div className="top-bar">
                    <div className="logo-circle">
                        <img src={logoIcon} className="logo" alt="Logo" />
                    </div>
                    <p className="logo-text">Pet Adoption Center</p>

                    <button className="burger" onClick={toggleMenu}>☰</button>

                    <div className={`navigation ${menuOpen ? "open" : ""}`}>

                        <Link to="/" onClick={closeMenu}><p className="nav-text">Home</p></Link>
                        <Link to="/catalog" onClick={closeMenu}><p className="nav-text">Catalog</p></Link>
                        <a href="/#news" onClick={closeMenu}><p className="nav-text">News</p></a>
                        <a href="/#reviews" onClick={closeMenu}><p className="nav-text">Reviews</p></a>
                        <Link to="/contact" onClick={closeMenu}><p className="nav-text">Contacts</p></Link>

                        {tokenExists ? (
                            <>
                                {console.log("✅ Rendering My Profile")}
                                <Link to="/profile" className="nav-text">
                                    <img src={profileIcon} alt="profile" className="profile-ic" onClick={closeMenu} />
                                </Link>
                            </>
                        ) : (
                            console.log("❌ No token, not showing My Profile")
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
            {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
        </div>
    );
}

export default Header;
