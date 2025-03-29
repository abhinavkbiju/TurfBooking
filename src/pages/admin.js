import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./admin.css";

function Admin() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState(""); 
    const navigate = useNavigate();

    const handleSign = async (event) => {
        event.preventDefault();
        setErrorMessage(""); 

        let tempErrors = {};
        let isValid = true;

        if (!values.email) {
            tempErrors["email"] = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            tempErrors["email"] = "Email is not valid";
            isValid = false;
        }

        // Password validation
        if (!values.password) {
            tempErrors["password"] = "Password is required";
            isValid = false;
        }

        if (isValid) {
            try {
                const response = await axios.post('http://localhost:8000/Admin', {
                    email: values.email,
                    password: values.password
                });

                if (response.data && response.data.id) {
                    console.log("User ID:", response.data.id);
                    navigate('/adminpage'); 
                } else {
                    setErrorMessage("Invalid login credentials"); 
                }

            } catch (err) {
                console.error("API call failed: ", err);
                setErrorMessage("Server error. Please try again.");
            }
        } else {
            setErrors(tempErrors);
        }
    };

    return (
        <div className="body99">
            <div className="wrapper">
                <form onSubmit={handleSign}>
                    <h2 id="title">Football United</h2>
                    <h2 id="title">ADMIN LOGIN</h2>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Email"
                            value={values.email}
                            onChange={e => setValues({ ...values, email: e.target.value })}
                            className={`form-control1 ${errors.email ? 'is-invalid' : ''}`}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}

                        <input
                            type="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={e => setValues({ ...values, password: e.target.value })}
                            className={`form-control1 ${errors.password ? 'is-invalid' : ''}`}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>
                    <div className="forgot-pass">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn99">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Admin;
