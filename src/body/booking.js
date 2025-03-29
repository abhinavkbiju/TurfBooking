import React from 'react'
import './booking.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function Booking(){
  return (
    <div className='second'>
      <h1 className='slots'>TURF SLOTS</h1>
      <div className='cards-name' style={{display:"flex"}}>
      <div class="card">
        <img src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/09/12/Photos/turf-kHJF--621x414@LiveMint.jpg" alt="" />
            <div class="card-body">
                <h5 class="card-title">THRISSUR</h5>
                <li class="text">Free cancellation</li>
                <li class="text">7's play ground</li>
                <h5 class="card-text">1500/-</h5>
                <button class="book">Book Now</button>
                <p class="card-text"><small class="text-muted">Last update 30min ago</small></p>
            </div>
            </div>
            <div class="card">
        <img src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/11/29/Photos/Leisure/sport1-kfv--621x414@LiveMint.jpg" alt="" />
            <div class="card-body">
                <h5 class="card-title">KOLLAM</h5>
                <li class="text">Free cancellation</li>
                <li class="text">7's play ground</li>
                <h5 class="card-text">1500/-</h5>
                <button class="book">Book Now</button>
                <p class="card-text"><small class="text-muted">Last update 4hour ago</small></p>
            </div>
            </div>
            <div class="card">
        <img id='image2' src="https://images.livemint.com/r/LiveMint/Period2/2018/04/25/Photos/Processed/flipkart13-kUCF--621x414@LiveMint.jpg" alt="" />
            <div class="card-body">
                <h5 class="card-title">CALICUT</h5>
                <li class="text">Free cancellation</li>
                <li class="text">5's play ground</li>
                <h5 class="card-text">800/-</h5>
                <button class="book">Book Now</button>
                <p class="card-text"><small class="text-muted">Last update 3min age</small></p>
            </div>
            </div>
            <div class="card">
        <img src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2014/10/22/Photos/hockey--621x414.jpg" alt="" />
            <div class="card-body">
                <h5 class="card-title">MALAPURAM</h5>
                <li class="text">Free cancellation</li>
                <li class="text">11's play ground</li>
                <h5 class="card-text">4500/-</h5>
                <button class="book">Book Now</button>
                <p class="card-text"><small class="text-muted">Last update 2days ago</small></p>
            </div>
            </div>
      </div>
      <div className='mnr'>
        
      </div>
    </div>
     
  )
}
export default Booking