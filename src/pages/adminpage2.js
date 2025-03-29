import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./admin.css";

function Admin() {
    const [values, setValues] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const navigate = useNavigate();

    const handleSign = async (event) => {
        event.preventDefault();
        setServerError('');
        setErrors({});
        let tempErrors = {};
        let isValid = true;

        if (!values.email) {
            tempErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            tempErrors.email = "Invalid email format";
            isValid = false;
        }

        if (!values.password) {
            tempErrors.password = "Password is required";
            isValid = false;
        }

        if (isValid) {
            try {
                const response = await axios.post('http://localhost:8000/AdminLogin', {
                    email: values.email,
                    password: values.password,
                });

                console.log("API Response:", response.data); // Debugging

                if (response.data.success) {
                    console.log("Login successful");
                    navigate('/adminpage'); // Redirects to Adminpage on success
                } else {
                    setErrors({ email: "Invalid email or password" });
                }
            } catch (err) {
                console.error("API call failed: ", err);
                setServerError("Server error. Please try again later.");
            }
        } 
    };

    return (
        <div className="body99">
            <div className="wrapper">
                <form onSubmit={handleSign}>
                    <h2 id="title">Football United</h2>
                    <h2 id="title">ADMIN LOGIN</h2>
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

                    {serverError && <div className="error-message">{serverError}</div>}

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
