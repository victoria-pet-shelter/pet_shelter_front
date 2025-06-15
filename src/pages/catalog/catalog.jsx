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

    const speciesMap = {
        Dog: 1,
        Cat: 2,
        Exotic: 3,
        Rodent: 4,
        Bird: 5,
        Fish: 6,
        Farm: 7,
        Reptile: 8,
    };

    const fetchData = (page = 1, species) => {
        setLoading(true);

        let url = `http://localhost:5000/pets?page=${page}&pageSize=25`;
        if (species && species !== 'All') {
            url += `&speciesId=${speciesMap[species]}`;
        }

        fetch(url)
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
        fetchData(currentPage, selectedSpecies);
    }, [currentPage, selectedSpecies]);


    const handleSpeciesSelect = (species) => {
        setSelectedSpecies(species);
        setCurrentPage(1);
    };

    const handlePageChange = (direction) => {
        if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (direction === 'next' && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const [imgError, setImgError] = useState({});
    useEffect(() => {
        console.log("Received species ids:", dbInfo.map(a => a.species_id));
    }, [dbInfo]);


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
                        dbInfo.map(animal => (
                            <div key={animal.id} className="catalog-item">
                                <div className="species-label">
                                    {Object.entries(speciesMap).find(([key, value]) => value === animal.species_id)?.[0] || "?"}
                                </div>

                                {imgError[animal.id] && (
                                    <div className="animal-alt-overlay">
                                        {animal.name || 'No photo'}
                                    </div>
                                )}
                                <img
                                    src={animal.mongo_image_id ? `http://localhost:5000/image/${animal.mongo_image_id}` : '/placeholder.jpg'}
                                    className="animal-image"
                                    // alt={animal.name || 'No photo'}
                                    onError={() =>
                                        setImgError(prev => ({ ...prev, [animal.id]: true }))
                                    }
                                />

                                <div className="info-overlay">
                                    {animal.breed?.name && <div>{animal.breed.name}</div>}
                                    {animal.age != null && <div>{animal.age} years old</div>}
                                </div>

                                <div className="catalog-item-footer">
                                    <div className="price-tag">{animal.cena ? `${animal.cena} €` : ""}</div>
                                    <button className="adopt-button" onClick={() => window.open(animal.external_url, '_blank')}>
                                        To form
                                    </button>
                                </div>
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