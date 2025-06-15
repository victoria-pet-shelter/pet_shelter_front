import './header.css';
import logoIcon from '../../assets/header/logo.svg';
import searchIcon from "../../assets/header/search.svg";

function Header() {
    return (
        <div className="header">
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
                    <p class="logo-text"><span class="text-black">Pet Adoption Center</span></p>
                        <div class="navigation">
                            <a href="/"><p class="nav-text"><span class="text-black">Home</span></p></a>
                            <a href="/catalog"><p class="nav-text"><span class="text-black">Catalog</span></p></a>
                            <a href="/#news"><p class="nav-text"><span class="text-black">News</span></p></a>
                            <a href="/#reviews"><p class="nav-text"><span class="text-black">Reviews</span></p></a>
                            <a href="/contact"><p class="nav-text"><span class="text-black">Contacts</span></p></a>
                            <div class="search">
                                <p class="text-31"><span class="text-black">Search in site</span></p>
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