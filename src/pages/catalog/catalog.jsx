import './catalog.css';
import React, { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

function Catalog() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const [dbInfo, setDbInfo] = useState([]);
    const [species, setSpecies] = useState("Dog");
    const [loading, setLoading] = useState(true);
    const [selectedSpecies, setSelectedSpecies] = useState('All');

    useEffect(() => {
        fetch('https://localhost:5000/catalog')
        .then(response => response.json())
        .then(data => {
            setDbInfo(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching animals: ', error);
            setLoading(false);
        });
    }, []);

    const handleSpeciesSelect = species => {
        setSelectedSpecies(species);
    };

    const filteredAnimals = selectedSpecies === 'All'
        ? dbInfo
        : dbInfo.filter(animal => animal.species === selectedSpecies);


    return (
        <div className="catalog" data-theme={theme}>
            <title>Catalog</title>
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
            <p class="paws-1">🐾</p>
            <p class="paws-2">🐾</p>
            <p class="paws-3">🐾</p>
            <p class="paws-4">🐾</p>
            <p class="paws-5">🐾</p>
            <div class="sidebar">
                <div class="sidebar-item">
                    <div class="sidebar-item-icon">
                        <p>🐶</p>
                    </div>
                    <a onClick={() => setSpecies("Dog")}><p class="sidebar-item-name">Dog</p></a>
                </div>
                <div class="sidebar-item">
                    <div class="sidebar-item-icon">
                        <p>🐱</p>
                    </div>
                    <a onClick={() => setSpecies("Cat")}><p class="sidebar-item-name">Cat</p></a>
                </div>
                <div class="sidebar-item">
                    <div class="sidebar-item-icon">
                        <p>🐦</p>
                    </div>
                    <a onClick={() => setSpecies("Bird")}><p class="sidebar-item-name">Bird</p></a>
                </div>
                <div class="sidebar-item">
                    <div class="sidebar-item-icon">
                            <p>🦥</p>
                    </div>
                    <a onClick={() => setSpecies("Exotic")}><p class="sidebar-item-name">Exotic</p></a>
                </div>
                <div class="sidebar-item">
                    <div class="sidebar-item-icon">
                            <p>🦥</p>
                    </div>
                    <a onClick={() => setSpecies("Rodent")}><p class="sidebar-item-name">Rodent</p></a>
                </div>
                <div class="sidebar-item">
                    <div class="sidebar-item-icon">
                            <p>🦥</p>
                    </div>
                    <a onClick={() => setSpecies("Fish")}><p class="sidebar-item-name">Fish</p></a>
                </div>
                <div class="sidebar-item">
                    <div class="sidebar-item-icon">
                            <p>🦥</p>
                    </div>
                    <a onClick={() => setSpecies("Farm")}><p class="sidebar-item-name">Farm</p></a>
                </div>
                <div class="sidebar-item">
                    <div class="sidebar-item-icon">
                            <p>🦥</p>
                    </div>
                    <a onClick={() => setSpecies("Reptile")}><p class="sidebar-item-name">Reptile</p></a>
                </div>
            </div>
            <div class="catalog-content">
                <div class="catalog-items">
                    {dbInfo.map(animal => (
                        <div key={animal.id} class="catalog-item">
                            <p class="animal-species">{species}</p>
                            <div class="image-box">
                                <img src={animal.photo} class="animal-image" alt="Image" />
                            </div>
                            <p class="breed-age">{animal.breed}, {animal.age}</p>
                            <button class="adopt-button">To form</button>
                        </div>
                    ))}
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    
                </div>
                <div class="catalog-items-2">
                    {/* Example items, replace with dynamic content as needed */}
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                </div>
                <div class="catalog-items-2">
                    {/* Example items, replace with dynamic content as needed */}
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
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
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                </div>
                <div class="catalog-items-2">
                    {/* Example items, replace with dynamic content as needed */}
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
                        <div class="image-box">
                            <img src="{image}" class="animal-image" alt="Image" />
                        </div>
                        <p class="breed-age">Breed, Age</p>
                        <button class="adopt-button">To form</button>
                    </div>
                    <div class="catalog-item">
                        <p class="animal-species">{species}</p>
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