import './Navibar.css';
import { Link } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Bootstrap from 'bootstrap/dist/js/bootstrap.js';

function Navbar() {

  return (

    <nav className='navbar  sticky-top navbar-expand-lg  navbar-light '>
      <div id="dr1" class="dropdown dropdown dropend">
        <button id="dr" type="button" style={{ width: "150px", height: "50px", backgroundColor: "rgb(78, 6, 6)" }} class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown">Menu</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="/booking_cart01">Bookings</a></li>
          <li><a class="dropdown-item" href="/news">Football News</a></li>
          <li><a class="dropdown-item" href="/booknow">Book slot</a></li>
          <li><a class="dropdown-item" href="/">Slots</a></li>     
        </ul>
      </div>
      <h3 style={{ width: "150px", height: "50px", color: "white" }}>Football United</h3>

      <button style={{ width: "60px" }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" ></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ marginRight: "70px" }}>
          <li className='Nav-item'>
            <Link to="homepage" style={{ color: "rgb(255, 255, 255)", textDecoration: "none" }}> Home </Link>
          </li>
          <li className='Nav-item'>
            <Link to="about" style={{ color: "rgb(255, 255, 255)", textDecoration: "none" }}>About</Link>
          </li>
          <li className='Nav-item'>
            <Link to="login" style={{ color: "rgb(255, 255, 255)", textDecoration: "none" }}>Login</Link>
          </li>
          <li className='Nav-item'>
            <Link to="register" style={{ color: "rgb(255, 255, 255)", textDecoration: "none" }}>Register</Link>
          </li>
          <li className='Nav-item'>
            <Link to="booking" style={{ color: "rgb(255, 255, 255)", textDecoration: "none" }}>Help me</Link>
          </li>
          <li className='Nav-item'>
            <Link to="admin" style={{ color: "rgb(255, 255, 255)", textDecoration: "none" }}>Admin page</Link>
          </li>
          <li className='Nav-item'>
            <Link to="profile" style={{ color: "rgb(255, 255, 255)", textDecoration: "none" }}>Profile</Link>
          </li>

        </ul>

      </div>


    </nav>

  );
}
export default Navbar;
