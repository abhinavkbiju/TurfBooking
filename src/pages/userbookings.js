import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Userbookings() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchBookings();
    }, []);  

    const fetchBookings = () => {
        axios.get('http://localhost:8000/Booking')
            .then(response => setData(response.data))
            .catch(err => console.log('Error fetching data', err));
    };

    const updateStatus = (id, newStatus) => {
        axios.patch(`http://localhost:8000/Booking/${id}`, { status: newStatus })
            .then(() => {
                setData(prevData =>
                    prevData.map(item =>
                        item.id === id ? { ...item, status: newStatus } : item
                    )
                );
            })
            .catch(error => console.error('Error updating status', error));
    };

    const handleDelete = (id) => {
        if (window.confirm("Would you like to delete this booking?")) {
            axios.delete(`http://localhost:8000/Booking/${id}`)
                .then(() => {
                    setData(prevData => prevData.filter(item => item.id !== id));
                })
                .catch(err => console.log('Error deleting booking', err));
        }
    };

    return (
        <div style={{ backgroundImage: "linear-gradient(to right, rgb(80, 2, 2), rgb(0, 0, 0))", minHeight: '100vh', padding: '20px' }}>
            <h1 className="text-center text-white pt-4">User Bookings</h1>
            <div className="container table-responsive py-5">
                <table className="table table-bordered table-hover table-dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Place</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((d, i) => (
                                <tr key={d.id}>
                                    <th>{i + 1}</th>
                                    <td>{d.place}</td>
                                    <td>{d.time}</td>
                                    <td>
                                        <span className={`badge ${d.status === 'Confirmed' ? 'bg-success' : 'bg-warning'}`}>
                                            {d.status || 'Pending'}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-success btn-sm mr-2"
                                            onClick={() => updateStatus(d.id, 'Confirmed')}
                                            disabled={d.status === 'Confirmed'}
                                        >
                                            Confirm
                                        </button>
                                        <button
                                            className="btn btn-warning btn-sm mr-2"
                                            onClick={() => updateStatus(d.id, 'Pending')}
                                            disabled={d.status === 'Pending'}
                                        >
                                            Pending
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(d.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center text-white">No bookings available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Userbookings;
