import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSign = (event) => {
    event.preventDefault();

    let tempErrors = {};
    let isValid = true;

    // Name validation
    if (!values.name) {
      tempErrors["name"] = "Username is required";
      isValid = false;
    }

    // Email validation
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

    // Confirm Password validation
    if (!values.confirmPassword) {
      tempErrors["confirmPassword"] = "Confirm Password is required";
      isValid = false;
    } else if (values.password !== values.confirmPassword) {
      tempErrors["confirmPassword"] = "Passwords do not match";
      isValid = false;
    }

    if (isValid) {
      axios.post('http://localhost:8000/register', values)
        .then(response => { 
          console.log(response); 
          navigate('/login'); 
        })
        .catch(err => console.log(err));
    } else {
      setErrors(tempErrors);
    }
  };

  return (
    <div className="body99">
      <div className="wrapper">
        <form onSubmit={handleSign}>
          <h2 id="title">Football United</h2>
          <h2 id="title">Register</h2>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Username" 
              onChange={e => setValues({ ...values, name: e.target.value })} 
              className={`form-control1 ${errors.name ? 'is-invalid' : ''}`} 
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}

            <input 
              type="text" 
              placeholder="Email" 
              onChange={e => setValues({ ...values, email: e.target.value })} 
              className={`form-control1 ${errors.email ? 'is-invalid' : ''}`} 
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}

            <input 
              type="text" 
              placeholder="Number" 
              className="form-control" 
            />

            <input 
              type="password" 
              placeholder="Password" 
              onChange={e => setValues({ ...values, password: e.target.value })} 
              className={`form-control1 ${errors.password ? 'is-invalid' : ''}`} 
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}

            <input 
              type="password" 
              placeholder="Confirm Password" 
              onChange={e => setValues({ ...values, confirmPassword: e.target.value })} 
              className={`form-control1 ${errors.confirmPassword ? 'is-invalid' : ''}`} 
            />
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
          </div>
          <div className="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn99">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
