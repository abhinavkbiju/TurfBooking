
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/register';
import Footer from './pages/footer';
import Navbar from './navibar/navibar';
import Booking from './pages/booking';
import Booking_cart from './pages/booking-cart';
import Booknow from './pages/booknow';
import News from './pages/news';
import { useState } from 'react';
import Booking_cart2 from './booking_cart2';
import Booking_cart3 from './booking-cart3';
import Booking_cart4 from './booking-cart4';
import Booking_cart01 from './pages/booking_cart01';
import Stadium from './stadium';
import Kochiest from './kochiest';
import Kochiwest from './kochiwest';
import Kochinorth from './kochinorth';
import Kochisouth from './kochisouth';
import Stadium2 from './stadium2';
import Stadium3 from './stadium3';
import Home2 from './booking_cart2';
import Booking_cart22 from './booking_cart22';
import BookingSuccess from './pages/bookingsucessful';
import Admin from './pages/admin';
import Adminpage from './pages/adminpage';
import Userbookings from './pages/userbookings';
import Userreg from './pages/userreg';
import Profile from './profile';
import { BookingProvider } from './bookingcontext';
import Feedback from './pages/feedback';
import Admin2 from './pages/adminpage2';
import HomePage from './pages/homepage';





function App() {
  const [currentForm, setCurrentForm] = useState('login')
  const [bookingStatus, setBookingStatus] = useState('');
  return (
    <div className="App">


      <Navbar />




      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='booking' element={<Booking />} />
        <Route path='booking-cart' element={<Booking_cart />} />
        <Route path='booknow' element={<Booknow />} />
        <Route path='news' element={<News />} />
        <Route path='booking-cart2' element={<Booking_cart2 />} />
        <Route path='booking-cart3' element={<Booking_cart3 />} />
        <Route path='booking-cart4' element={<Booking_cart4 />} />
        <Route path='booking_cart01' element={<Booking_cart01/>} />
        <Route path='stadium' element={<Stadium/>} />
        <Route path='stadium2' element={<Stadium2/>} />
        <Route path='east' element={<Kochiest/>} />
        <Route path='west' element={<Kochiwest/>} />
        <Route path='north' element={<Kochinorth/>} />
        <Route path='south' element={<Kochisouth/>} />
        <Route path='stadium3' element={<Stadium3/>} />
        <Route path='Home2' element={<Home2/>} />
        <Route path='booking sucess' element={<BookingSuccess/>} />
        <Route path='admin' element={<Admin/>} />
        <Route path='adminpage' element={<Adminpage/>} />
        <Route path='userbooking' setBookingStatus={setBookingStatus} element={<Userbookings/>} />
        <Route path='userreg' element={<Userreg/>} />
        <Route path='profile' bookingStatus={bookingStatus} element={<Profile/>} />
        <Route path='feedback' element={<Feedback/>} />
        <Route path='admin2' element={<Admin2/>}/>
        <Route path='homepage' element={<HomePage/>}/>
    

 

      </Routes>



      <Footer />

    </div>
  );
}
export default App;