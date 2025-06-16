import './header.css';
import logoIcon from '../../assets/header/logo.svg';
import searchIcon from "../../assets/header/search.svg";
import useLocalStorage from "use-local-storage";

function Header() {
    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useLocalStorage(
        "theme",
        defaultDark ? "dark" : "light"
    );

    return (
        <div className="header" data-theme={theme}>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://fonts.googleapis.com/css?family=Roboto|Inter|Poppins&display=swap" rel="stylesheet" />
            <link rel="icon" href="../../assets/header/logo-16.png" type="image/png" sizes="16x16" />
            <link rel="icon" href="../../assets/header/logo-32.png" type="image/png" sizes="32x32" />
            <link rel="icon" href="../../assets/header/logo-64.png" type="image/png" sizes="64x64" />
            <link rel="shortcut icon" href="../../assets/logo/logo.ico" />
            <div class="menubar">
                <div class="top-bar">
                    <div class="logo-circle">
                        <img src={logoIcon} class="logo" alt="Logo" />
                    </div>
                    <p class="logo-text">Pet Adoption Center</p>
                    <div class="navigation">
                        <a href="/"><p class="nav-text">Home</p></a>
                        <a href="/catalog"><p class="nav-text">Catalog</p></a>
                        <a href="/#news"><p class="nav-text">News</p></a>
                        <p class="nav-text">Gallery</p>
                        <a href="/#reviews"><p class="nav-text">Reviews</p></a>
                        <a href="/contact"><p class="nav-text">Contacts</p></a>
                        <div class="search">
                            <p class="search-text">Search in site</p>
                            <div class="search-ic">
                                <img src={searchIcon} class="search-ic-img" alt="Search" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
