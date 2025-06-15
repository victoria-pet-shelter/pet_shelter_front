import './catalog.css';
import React, { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

function Catalog() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const [dbInfo, setDbInfo] = useState([]);
    const [selectedSpecies, setSelectedSpecies] = useState('All');
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchData = (page = 1) => {
        setLoading(true);
        fetch(`http://localhost:5000/pets?page=${page}&pageSize=25`)
            .then(response => response.json())
            .then(data => {
                setDbInfo(data.pets);
                setCurrentPage(data.currentPage);
                setTotalPages(data.totalPages);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching animals: ', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const handleSpeciesSelect = (species) => {
        setSelectedSpecies(species);
    };

    const handlePageChange = (direction) => {
        if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (direction === 'next' && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const filteredAnimals = selectedSpecies === 'All'
        ? dbInfo
        : dbInfo.filter(animal => animal.species?.name?.toLowerCase() === selectedSpecies.toLowerCase());

    return (
        <div className="catalog" data-theme={theme}>
            <title>Catalog</title>
            {[...Array(17)].map((_, i) => <div key={i} className={`square-${i + 1}`}></div>)}
            {[...Array(5)].map((_, i) => <p key={i} className={`paws-${i + 1}`}>🐾</p>)}

            <div className="sidebar">
                {['All', 'Dog', 'Cat', 'Bird', 'Exotic', 'Rodent', 'Fish', 'Farm', 'Reptile'].map((type, index) => (
                    <div className="sidebar-item" key={index} onClick={() => handleSpeciesSelect(type)}>
                        <div className="sidebar-item-icon"><p>🐾</p></div>
                        <p className="sidebar-item-name">{type}</p>
                    </div>
                ))}
            </div>

            <div className="catalog-content">
                <div className="catalog-items">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        filteredAnimals.map(animal => (
                            <div key={animal.id} className="catalog-item">
                                <img
                                    src={animal.mongo_image_id ? `http://localhost:5000/image/${animal.mongo_image_id}` : '/placeholder.jpg'}
                                    className="animal-image"
                                    alt={animal.name || 'No photo'}
                                />
                                <div className="info-overlay">
                                    {animal.breed?.name && <span>{animal.breed.name}</span>}
                                    {animal.age != null && <span>{animal.breed?.name ? ', ' : ''}{animal.age} years old</span>}
                                </div>

                                <button className="adopt-button" onClick={() => window.open(animal.external_url, '_blank')}>To form</button>
                            </div>

                        ))
                    )}
                </div>

                <div className="pagination">
                    <button disabled={currentPage === 1} onClick={() => handlePageChange('prev')}>Previous</button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button disabled={currentPage === totalPages} onClick={() => handlePageChange('next')}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Catalog;