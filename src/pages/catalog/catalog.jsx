import './catalog.css';
import React, { useState, useEffect } from 'react';

function Catalog() {
    return (
        <div className="catalog">
            <title>Catalog</title>
            <div class="sidebar">
                <div class="sidebar-item">
                    <div class="sidebar-item-icon">
                        <p>🐶</p>
                    </div>
                    <p class="sidebar-item-name">Dog</p>
                </div>
                <div class="sidebar-item">
                    <div class="sidebar-item-icon">
                        <p>🐱</p>
                    </div>
                    <p class="sidebar-item-name">Cat</p>
                </div>
                <div class="sidebar-item">
                    <div class="sidebar-item-icon">
                        <p>🐦</p>
                    </div>
                    <p class="sidebar-item-name">Bird</p>
                </div>
                <div class="sidebar-item">
                    <div class="sidebar-item-icon">
                            <p>🦥</p>
                    </div>
                    <p class="sidebar-item-name">Exotic</p>
                </div>
            </div>
            <div class="catalog-content">
                <div class="catalog-items">
                    {/* Example items, replace with dynamic content as needed */}
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                </div>
                <div class="catalog-items">
                    {/* Example items, replace with dynamic content as needed */}
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                </div>
                <div class="catalog-items">
                    {/* Example items, replace with dynamic content as needed */}
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                </div>
                <div class="catalog-items">
                    {/* Example items, replace with dynamic content as needed */}
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                </div>
                <div class="catalog-items">
                    {/* Example items, replace with dynamic content as needed */}
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">Dog</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalog;