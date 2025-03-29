import React, { useState } from 'react';
import "./booking.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Booking() {
    const [value, setValues] = useState({
        feedback: '',  // Ensure this matches the input field
    });
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        let tempErrors = {}
        let isValid = true;

        if (!value.feedback) {
            tempErrors["feedback"] = "feedback required";
            isValid = false;
        }

        if (isValid) {
            axios.post('http://localhost:8000/feedback', value)
                .then(response => {
                    console.log(response);
                    navigate('/');
                })
                .catch(err => console.log(err));
        } else {
            setErrors(tempErrors);
        }
    };

    return (
        <div className='booking'>
            <div className='book-now'>
                <div className="row p-5 align-items-center">
                    <div className="col-md-6">
                        <h1 style={{ color: "white", fontFamily: "initial" }}>CUSTOMER CARE</h1>
                        <div className='cstc'>
                            <p>Booking issue</p>
                            <p>Booking cancellation</p>
                            <p>Slot timing issue</p>
                            <p>Tournament</p>
                        </div>
                        <div className="d-flex gap-3">
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input
                                className="inputfeed"
                                placeholder='Feedback'
                                value={value.feedback}  
                                onChange={e => setValues({ ...value, feedback: e.target.value })}  
                            />
                            
                            <button type="submit" className="btn btn-outline-dark">Submit Feedback</button> {/* Submit button */}
                            {errors.feedback &&<div>{errors.feedback}</div>}
                        </form>
                    </div>
                    <div className="col-md-6 text-center">
                        <img
                            src="https://img.freepik.com/free-vector/customer-support-illustration_23-2148904079.jpg"
                            className="img-fluid rounded-circle w-50"
                            alt="Customer support"
                        />
                    </div>
                    <div className="www">
                        <h6>www.footballunited.com</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Booking;
