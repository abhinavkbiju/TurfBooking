import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./adminpage.css";

function Adminpage() {
    const navigate = useNavigate();

    const handleUserBookings = () => {
        navigate('/userbooking'); // Navigate to User Bookings page
    };

    const handleUserRegistration = () => {
        navigate('/userreg'); // Navigate to User Registration page
    };

    return (
        <div className='container'>
            <h2>Admin Dashboard</h2>
            <button className='btn' onClick={handleUserBookings}>User Bookings</button>
            <button className='btn' onClick={handleUserRegistration}>User Registration</button>
        </div>
    );
}

export default Adminpage;
