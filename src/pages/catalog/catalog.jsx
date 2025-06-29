import './catalog.css';
import React, { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import { useNavigate } from 'react-router-dom';

function Catalog() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const [dbInfo, setDbInfo] = useState([]);
    const [selectedSpecies, setSelectedSpecies] = useState('All');
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [showFilter, setShowFilter] = useState(false);
    const speciesList = ['All', 'Dog', 'Cat', 'Bird', 'Exotic', 'Rodent', 'Fish', 'Farm', 'Reptile'];

    const navigate = useNavigate();

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

    const formatAge = (months) => {
        if (!months || isNaN(months)) return null;
        if (months < 12) {
            return `${months} months old`;
        }
        else if (months > 12) {
            const years = months / 12;
            return `${years.toFixed(1)} years old`;
        }
        else if (months === 12) {
            return `1 year old`;
        }
    }

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

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="catalog" data-theme={theme}>
            <title>Catalog</title>

            <div className="decorations">
                {[...Array(17)].map((_, i) => <div key={i} className={`square-${i + 1}`}></div>)}
                {[...Array(5)].map((_, i) => <p key={i} className={`paws-${i + 1}`}>🐾</p>)}
            </div>

            {!isMobile ? (
                <div className="sidebar fade-in">
                    {speciesList.map((type, index) => (
                        <div className="sidebar-item" key={index} onClick={() => handleSpeciesSelect(type)}>
                            <div className="sidebar-item-icon"><p>🐾</p></div>
                            <p className="sidebar-item-name">{type}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <button className={`filter-toggle ${showFilter ? 'hide' : ''} fade-in-up`} onClick={() => setShowFilter(true)}>
                        ☰ Filter
                    </button>

                    {showFilter && (
                        <>
                            <div className={`sidebar-popup ${showFilter ? 'open slide-in-right' : ''}`}>
                                <div className="sidebar-header">
                                    <p>Category</p>
                                    <button onClick={() => setShowFilter(false)}>✖</button>
                                </div>
                                {speciesList.map((type, index) => (
                                    <div className="sidebar-item" key={index} onClick={() => {
                                        handleSpeciesSelect(type);
                                        setShowFilter(false);
                                    }}>
                                        <div className="sidebar-item-icon"><p>🐾</p></div>
                                        <p className="sidebar-item-name">{type}</p>
                                    </div>
                                ))}
                            </div>
                            <div className={`sidebar-overlay ${showFilter ? 'active fade-in' : ''}`} onClick={() => setShowFilter(false)}></div>
                        </>
                    )}
                </>
            )}
            <div className={`catalog-content ${showFilter ? 'blur' : ''} fade-in`}>
                <div className="catalog-items">
                    {loading ? (
                        <p className="fade-in-up" style={{ fontSize: "24px", marginTop: "20px" }}>Loading pets...</p>
                    ) : (

                        dbInfo.map((animal, index) => (
                            <div key={animal.id} className="pet-cards catalog-appear" style={{ animationDelay: `${index * 50}ms` }}>

                                <div className="pet-image-wrapper">
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
                                        // alt={animal.name || 'No photo'}
                                        className="pet-image"
                                        onError={() =>
                                            setImgError(prev => ({ ...prev, [animal.id]: true }))
                                        }
                                    />
                                </div>

                                <div className="pet-info">
                                    <div className="pet-breed-age">
                                        {animal.breed?.name && <span>{animal.breed.name}</span>}
                                        {animal.age != null && <span> • {formatAge(animal.age)}</span>}
                                    </div>

                                    <div className="pet-bottoms">
                                        <span className="pet-price">{animal.cena ? `${animal.cena} €` : ""}</span>
                                        <button className="pet-button" onClick={() => navigate(`/pet/${animal.id}`)}>
                                            To Anket
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="pagination fade-in-up">
                    <button disabled={currentPage === 1} onClick={() => handlePageChange('prev')}>Previous</button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button disabled={currentPage === totalPages} onClick={() => handlePageChange('next')}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Catalog;