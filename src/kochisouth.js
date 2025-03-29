import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Kochisouth() {
    const navigate = useNavigate('/');
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/Kochisouth')
            .then(response => setData(response.data))
            .catch(err => console.log(err))
    }, [])
    const dbhandle = () => {
        axios.post('http://localhost:8000/Kochisouthpost', data)
            .then(response => {
                navigate('/booking sucess');
            })
            .catch(err => console.log)
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-light vh-100' >
            <div className='w-75 rounded border p-4'>
                <div className='d-flex justify-content-end bg-black'>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Price</th>
                            <th>place</th>
                            <th>time</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, i) => {
                                return <tr key={i}>
                                    <td>{d.price}</td>
                                    <td>{d.place}</td>
                                    <td>{d.time}</td>
                                </tr>
                            })}
                    </tbody>
                    <button className='button99 btn99' onClick={dbhandle}>book</button>
                </table>
            </div>
        </div>
    )

}

export default Kochisouth;