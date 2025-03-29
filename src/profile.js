import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';

function Profile() {
    const [statusMessage, setStatusMessage] = useState('');
    const navigate = useNavigate();

    const fetchBookingStatus = () => {
        const storedStatus = localStorage.getItem("latestBookingStatus");
        setStatusMessage(storedStatus ? `Your last booking status: ${storedStatus}` : "No recent bookings.");
    };

    useEffect(() => {
        // Initial fetch
        fetchBookingStatus();

        // Listen for changes in localStorage (when status updates)
        const handleStorageChange = () => {
            fetchBookingStatus();
        };

        window.addEventListener("storage", handleStorageChange);
        
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div style={{ backgroundImage: "linear-gradient(to right, rgb(80, 2, 2), rgb(0, 0, 0))", minHeight: '100vh', padding: '20px' }}>
            <div className="container95">
                <div className="card95" style={{ backgroundImage: "linear-gradient(to right, rgb(80, 2, 2), rgb(0, 0, 0))" }}>
                    <div className="profile-picture">
                        <img src="https://images.squarespace-cdn.com/content/v1/6010d66cc9ad3b7623289724/a17947fb-c43a-4b50-98ea-acdbd01ebc31/BUF+Academy+circle+logo+no+back+jpeg.png" alt="Profile" />
                    </div>
                    <h2 className="name" style={{ color: 'white' }}>Abhinav K Biju</h2>
                    <h3 className="username" style={{ color: 'orangered' }}>@Football United</h3>
                    <p className="tagline" style={{ color: 'white' }}>Keep going.</p>
                    <p className="description" style={{ color: 'white' }}>Turf player</p>
                    <button onClick={goToHome} className="button">Go To Home</button>
                    
                    {/* Show booking status message */}
                    <p className="blinking" style={{ color: 'yellow', fontWeight: 'bold' }}>
                        {statusMessage}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
