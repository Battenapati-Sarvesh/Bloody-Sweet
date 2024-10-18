import './App.css';
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from './UserContext';
import axios from 'axios';

function Profile() {
    const { userData } = useContext(UserContext);
    const [donor, setDonor] = useState(null); // Initialize as null for a single donor
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDonor = async () => {
            try {
                const response = await axios.get('http://localhost:8080/Get/Profile', {
                    params: {
                        email: userData.email
                    }
                });

                // Check if the response is an object
                if (response.data) {
                    setDonor(response.data); // Set the single donor object
                } else {
                    throw new Error('No donor data received');
                }
                setError('');
            } catch (error) {
                setError('Error fetching data. Please try again.');
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (userData.email) {
            fetchDonor();
        }
    }, [userData.email]);

    if (loading) {
        return <p>Loadimg...</p>;
    }

    return (
        <div id='profiledata'>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {donor ? ( // Conditional rendering for the donor object
                <div class="profile">
                    <h2>{donor.name}</h2>
                    <p>Blood Group: {donor.bloodGroup}</p>
                    <p>Location: {donor.state}</p>
                    <p>City: {donor.city}</p>
                    <p>Zip: {donor.zip}</p>
                </div>
            ) : (
                <p>No donor data available.</p>
            )}
        </div>
    );
}

export default Profile;
