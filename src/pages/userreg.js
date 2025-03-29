import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Userreg() {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/register')
            .then(response => {
                setData(response.data);
                axios.post('http://localhost:8000/userregister', response.data)
                    .then(postResponse => console.log('Data posted successfully', postResponse))
                    .catch(postError => console.log('Error posting data', postError));
            })
            .catch(err => console.log('Error fetching data', err));
    }, []);

    return (
        <div>
            <h1 className="text-center pt-4">User Details</h1>

            <div className="container table-responsive py-5">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Gmail</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((d, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.password}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No bookings available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Userreg;
