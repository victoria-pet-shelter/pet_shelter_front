import './catalog.css';
import React, { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

function Catalog() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const [dbInfo, setDbInfo] = useState([]);
    const [selectedSpecies, setSelectedSpecies] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/pets')
            .then(response => response.json())
            .then(data => {
                setDbInfo(data.pets); // assuming API returns { pets: [...] }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching animals: ', error);
                setLoading(false);
            });
    }, []);

    const handleSpeciesSelect = (species) => {
        setSelectedSpecies(species);
    };

    const filteredAnimals = selectedSpecies === 'All'
        ? dbInfo
        : dbInfo.filter(animal => animal.species?.name === selectedSpecies);

    return (
        <div className="catalog" data-theme={theme}>
            <title>Catalog</title>
            {/* Background design */}
            {[...Array(17)].map((_, i) => <div key={i} className={`square-${i + 1}`}></div>)}
            {[...Array(5)].map((_, i) => <p key={i} className={`paws-${i + 1}`}>🐾</p>)}

            {/* Sidebar */}
            <div className="sidebar">
                {['All', 'Dog', 'Cat', 'Bird', 'Exotic', 'Rodent', 'Fish', 'Farm', 'Reptile'].map((type, index) => (
                    <div className="sidebar-item" key={index} onClick={() => handleSpeciesSelect(type)}>
                        <div className="sidebar-item-icon"><p>🐾</p></div>
                        <p className="sidebar-item-name">{type}</p>
                    </div>
                ))}
            </div>

            {/* Main content */}
            <div className="catalog-content">
                <div className="catalog-items">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        filteredAnimals.map(animal => (
                            <div key={animal.id} className="catalog-item">
                                <p className="animal-species">{animal.species?.name}</p>
                                <div className="image-box">
                                    <img src={animal.image} className="animal-image" alt={animal.name || 'Pet'} />
                                </div>
                                <p className="breed-age">{animal.breed?.name}, {animal.age}</p>
                                <button className="adopt-button">To form</button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Catalog;
