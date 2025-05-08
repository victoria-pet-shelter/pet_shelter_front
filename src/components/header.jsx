import './header.css';

function Header() {
    return (
        <div className="header">
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://fonts.googleapis.com/css?family=Roboto|Inter|Poppins&display=swap" rel="stylesheet" />
            <link rel="icon" href="../images/logo/logo-16.png" type="image/png" sizes="16x16" />
            <link rel="icon" href="../images/logo/logo-32.png" type="image/png" sizes="32x32" />
            <link rel="icon" href="../images/logo/logo-64.png" type="image/png" sizes="64x64" />
            <link rel="shortcut icon" href=".../../pub/images/logo/logo.ico" />
            <div class="menubar">
                <div class="top-bar">
                    <div class="logo-circle">
                        <p class="logo-text"><span class="text-black">Pet Adoption Center</span></p>
                        <div class="navigation">
                            <a href="/"><p class="nav-text"><span class="text-black">Home</span></p></a>
                            <p class="nav-text"><span class="text-black">Animal Catalog</span></p>
                            <a href="/#news"><p class="nav-text"><span class="text-black">News</span></p></a>
                            <p class="nav-text"><span class="text-black">Gallery</span></p>
                            <a href="/#reviews"><p class="nav-text"><span class="text-black">Reviews</span></p></a>
                            <a href="/contact"><p class="nav-text"><span class="text-black">Contacts</span></p></a>
                            <div class="search">
                                <p class="text-31"><span class="text-black">Search in site</span></p>
                                <div class="search-ic">
                                    <img src="../images/search.svg" class="search-ic-img" alt="Search" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="../images/logo/logo.svg" class="logo" alt="Logo" />
                </div>
            </div>
        </div>
    );
}

export default Header;