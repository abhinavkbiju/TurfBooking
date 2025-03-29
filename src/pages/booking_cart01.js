import { useEffect, useState } from 'react';
import axios from 'axios';

function Booking_cart01() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = () => {
        axios.get('http://localhost:8000/Booking')
            .then(response => setData(response.data))
            .catch(err => console.log('Error fetching data', err));
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Would you like to delete this booking?");
        if (confirmDelete) {
            axios.delete(`http://localhost:8000/Booking/${id}`)
                .then(() => {
                    setData(prevData => prevData.filter(item => item.id !== id));
                })
                .catch(err => console.log('Error deleting booking', err));
        }
    };

    return (
        <div style={{ backgroundImage: "linear-gradient(to right, rgb(80, 2, 2), rgb(0, 0, 0))" }}>
            <h1 className="text-center pt-4">User Details</h1>
            <div className="container table-responsive py-5">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Place</th>
                            <th>Time</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((d, i) => (
                                <tr key={d.id}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{d.place}</td>
                                    <td>{d.time}</td>
                                    <td>{d.name}</td>
                                    <td>
                                        <span className={`badge ${d.status === 'Confirmed' ? 'bg-success' : 'bg-warning'}`}>
                                            {d.status || 'Pending'}
                                        </span>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(d.id)} className='btn btn-danger btn-sm'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">No bookings available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Booking_cart01;
