import React from 'react';
import "./booking_cart2.css";
function Booking_cart22() {
    return (
        <div className='cart'>
            <div className='cart_1'>
                <h1>BOOKING</h1>
            </div>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card mb-4">
                                <div className="card-body p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div className="color99">
                                                <p className="small mb-4 pb-2" style={{ color: "orangered" }}>TOUR NAME</p>
                                                <p className="lead fw-normal mb-0">ISL</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div className="color99">
                                                <p className="small mb-4 pb-2" style={{ color: "orangered" }}>LOCATION</p>
                                                <p className="lead fw-normal mb-0"><i className="fas fa-circle me-2"></i>
                                                CALICUT</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div className="color99">
                                                <p className="small mb-4 pb-2" style={{ color: "orangered" }}>Time</p>
                                                <p className="lead fw-normal mb-0">9pm to 10pm</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div className="color99">
                                                <p className="small mb-4 pb-2" style={{ color: "orangered" }}>PRICE</p>
                                                <p className="lead fw-normal mb-0">1500/-</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div className="color99">
                                                <p className="small mb-4 pb-2" style={{ color: "orangered" }}>BOOKING CHARGE</p>
                                                <p className="lead fw-normal mb-0">150/-</p>
                                            </div>
                                            <h1>BOOKING SUCESSFULLY</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-5">
                                <div className="card-body p-4">
                                    <div className="float-end">
                                        <p className="mb-0 me-5 d-flex align-items-center">
                                            <span className="small me-2">TOTAL:</span> <span
                                                className="lead fw-normal" id='color76'>1650/-</span>
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Booking_cart22;