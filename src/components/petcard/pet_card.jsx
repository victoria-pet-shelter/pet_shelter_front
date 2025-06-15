import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './pet_card.css';
// import '../pages/catalog/catalog.jsx';

function PetCard() {
    const { id } = useParams();
    const [pet, setPet] = useState(null);

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
    useEffect(() => {
        fetch(`http://localhost:5000/pets/${id}`)
            .then(res => res.json())
            .then(setPet)
            .catch(console.error);
    }, [id]);

    if (!pet) return <p>Loading...</p>;

    return (
        <div className="pet-page">
            <div className="pet-top">
                <img
                    src={pet.mongo_image_id ? `http://localhost:5000/image/${pet.mongo_image_id}` : '/placeholder.jpg'}
                    alt={pet.name}
                    className="pet-photo"
                />
                <div className="pet-details">
                    <h2>{pet.breed?.name || 'Unknown'} • {formatAge(pet.age)}</h2>
                    <p className="pet-price">{pet.cena} €</p>
                    <p className="pet-description">
                        {pet.description || 'No description available.'}
                    </p>

                    <button className="pet-more-btn" onClick={() => window.open(pet.external_url, '_blank')}>
                        More Details
                    </button>
                </div>
            </div>
            {/* <div className="pet-info">
                <h1 className="pet-name">{pet.name || 'No name provided'}</h1>
                <p className="pet-description">
                    {pet.description || 'No description available.'}
                </p>

                <div className="pet-bottom">
                    <div className="pet-block">
                        <h3>Description</h3>
                        <p>{pet.description || 'No description available.'}</p>
                    </div>
                    <div className="pet-block">
                        <h3>Contact Information</h3>
                        <p><strong>Phone:</strong> {pet.contact_phone || 'Not provided'}</p>
                        <p><strong>Email:</strong> {pet.contact_email || 'Not provided'}</p>
                    </div>
                    <div className="pet-block">
                        <h3>Location</h3>
                        <p>{pet.location || 'Location not specified'}</p>
                    </div>
                </div>
            </div> */}

        </div>
    );
};
export default PetCard;
