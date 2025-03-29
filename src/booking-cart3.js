import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Booking_cart3() {
  const [values, setValues] = useState({
    name: '',
    place: '',
    time: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let formErrors = {};
    if (!values.name) formErrors.name = "Name is required";
    if (!values.place) formErrors.place = "Place is required";
    if (!values.time) formErrors.time = "Time is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      axios.post('http://localhost:8000/Booking', values)
        .then(response => {
          console.log(response);
          navigate('/booking sucess');  
        })
        .catch(err => console.log(err));
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className='cart44'>
      <div className='cart_44'>
        <h1>BOOKING NOW</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <section className="vh-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card mb-4">
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      <div className="col-md-2 d-flex justify-content-center">
                        <div className="color99">
                          <p className="small text-muted mb-4 pb-2" style={{ color: "white" }}>USERNAME</p>
                          <input
                            type='text'
                            placeholder='name'
                            className="lead lead1 fw-normal mb-0"
                            value={values.name}
                            onChange={e => setValues({ ...values, name: e.target.value })}
                          />
                          {errors.name && <p className="text-danger">{errors.name}</p>}
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div className="color99">
                          <p className="small text-muted mb-4 pb-2">LOCATION</p>
                          <div className="input-group mb-3">
                            <select
                              className="custom-select" style={{ color: "black", background: "white" }}
                              id="inputGroupSelect01"
                              value={values.place}
                              onChange={e => setValues({ ...values, place: e.target.value })}
                            >
                              <option value="">PLACE</option>
                              <option value="EDAPLLY">EDAPALLY</option>
                              <option value="KALOOR">KALOOR</option>
                              <option value="CHACOLAS">CHACOLAS</option>
                            </select>
                            {errors.place && <p className="text-danger">{errors.place}</p>}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div className="color99">
                          <p className="small text-muted mb-4 pb-2">TIME</p>
                          <div className="input-group mb-3">
                            <select
                              className="custom-select"
                              id="inputGroupSelect01"
                              value={values.time}
                              onChange={e => setValues({ ...values, time: e.target.value })} style={{ color: "black", background: "white" }}
                            >
                              <option value="">TIME</option>
                              <option value="10am to 12pm">10am to 12pm</option>
                              <option value="6pm to 8pm">6pm to 8pm</option>
                              <option value="8pm to 10pm">8pm to 10pm</option>
                              <option value="10pm to 11pm">10pm to 11pm</option>
                            </select>
                            {errors.time && <p className="text-danger">{errors.time}</p>}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div className="color99">
                          <p className="small text-muted mb-4 pb-2">PRICE</p>
                          <p className="lead fw-normal mb-0">800/-</p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div className="color99">
                          <p className="small text-muted mb-4 pb-2">BOOKING CHARGE</p>
                          <p className="lead fw-normal mb-0">150/-</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-5">
                  <div className="card-body p-4">
                    <div className="float-end">
                      <p className="mb-0 me-5 d-flex align-items-center">
                        <span className="small me-2">TOTAL:</span>
                        <span className="lead fw-normal" id='color76'>950/-</span>
                      </p>
                    </div>
                    <div>
                      <button className="button99" type="submit">Book now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default Booking_cart3;