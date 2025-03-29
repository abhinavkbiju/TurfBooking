import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Kochisouth() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/Kochiwest')
            .then(response => {
                setData(response.data);
            })
            .catch(err => console.error(err));
    }, []);

    const dbhandle = () => {
        const bookingData = {

        };

        axios.post('http://localhost:8000/Kochiwestpost', bookingData)
            .then(response => {
                navigate('/booking sucess'); 
            })
            .catch(err => console.error(err));
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
            <div className='w-75 rounded border p-4'>
                <div className='d-flex justify-content-end bg-black'></div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Price</th>
                            <th>Place</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.price}</td>
                                    <td>{d.place}</td>
                                    <td>{d.time}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <button className='button99 btn99' onClick={dbhandle}>Book</button>
            </div>
        </div>
    );
}

export default Kochisouth;
