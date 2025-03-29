import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        let tempErrors = {};
        let isValid = true;

        if (!data.email) {
            tempErrors["email"] = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            tempErrors["email"] = "Email is not valid";
            isValid = false;
        }

        if (!data.password) {
            tempErrors["password"] = "Password is required";
            isValid = false;
        }

        if (isValid) {
            axios.get('http://localhost:8000/register', {
                params: {
                    email: data.email,
                    password: data.password
                }
            })
                .then(response => {
                    const user = response.data.find(user => user.email === data.email && user.password === data.password);
                    if (user) {
                        console.log("Login successful");
                        navigate(`/`);
                    } else {
                        setErrors({ login: 'Invalid email or password' });
                    }
                })
                .catch(err => {
                    console.error(err);
                    setErrors({ login: 'Invalid email or password' });
                });
        } else {
            setErrors(tempErrors);
        }
    };

    return (
        <div className="body">
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h2 id="title">User Login</h2>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Email"
                            onChange={e => setData({ ...data, email: e.target.value })}
                            className={`form-control1 ${errors.email ? 'is-invalid' : ''}`}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={e => setData({ ...data, password: e.target.value })}
                            className={`form-control1 ${errors.password ? 'is-invalid' : ''}`}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>
                    {errors.login && <div className="text-danger">{errors.login}</div>}
                    <div className="forgot-pass">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn99">Login</button>
                   
                </form>
            </div>
        </div>
    );
}

export default Login;