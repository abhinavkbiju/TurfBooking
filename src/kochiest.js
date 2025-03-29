// import React, { useEffect, useState } from 'react';
// import "./booking_cart2.css";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Kochieast() {
//     const [values, setValues] = useState({
//         tour: "east",
//         time: "9 pm to 10:30 pm"
//     });

//     const [data, setData] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get('http://localhost:8000/slot')
//             .then(response => setData(response.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setValues(prevValues => ({
//             ...prevValues,
//             [name]: value
//         }));
//     };

//     const dbhandle = () => {
//         axios.post('http://localhost:8000/Stadium', values)
//             .then(response => {
//                 alert("Booking successfully");             
//             })
//             .catch(err => console.log(err));
//     };
//     return (
//         <div className='cart'>
//             <div className='cart_1'>
//                 <h1>BOOKING</h1>
//             </div>
//             <section className="vh-100">
//                 <div className="container h-100">
//                     <div className="row d-flex justify-content-center align-items-center h-100">
//                         <div className="col">
//                             <div className="card mb-4">
//                                 <div className="card-body p-4">
//                                     <div className="row align-items-center">
//                                         <div className="col-md-2 d-flex justify-content-center">
//                                             <div className="color99">
//                                                 <p className="small mb-4 pb-2" style={{ color: "orangered" }}>PLACE</p>
//                                                 <p className="lead fw-normal mb-0">EAST</p>
//                                             </div>
//                                         </div>
//                                         <div className="col-md-2 d-flex justify-content-center">
//                                             <div className="color99">
//                                                 <p className="small mb-4 pb-2" style={{ color: "orangered" }}>TOUR NAME</p>
//                                                 <p className="lead fw-normal mb-0"><i className="fas fa-circle me-2">ISL</i>
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className="col-md-2 d-flex justify-content-center">
//                                             <div className="color99">
//                                                 <p className="small mb-4 pb-2" style={{ color: "orangered" }}>Time</p>
//                                                 <p className="lead fw-normal mb-0">{values.time}</p>
//                                             </div>
//                                         </div>
//                                         <div className="col-md-2 d-flex justify-content-center">
//                                             <div className="color99">
//                                                 <p className="small mb-4 pb-2" style={{ color: "orangered" }}>PRICE</p>
//                                                 <p className="lead fw-normal mb-0">450/-</p>
//                                             </div>
//                                         </div>
//                                         <div className="col-md-2 d-flex justify-content-center">
//                                             <div className="color99">
//                                                 <p className="small mb-4 pb-2" style={{ color: "orangered" }}>BOOKING CHARGE</p>
//                                                 <p className="lead fw-normal mb-0">150/-</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="card mb-5">
//                                 <div className="card-body p-4">
//                                     <div className="float-end">
//                                         <p className="mb-0 me-5 d-flex align-items-center">
//                                             <span className="small me-2">TOTAL:</span> <span
//                                                 className="lead fw-normal" id='color76'>600/-</span>
//                                         </p>
//                                     </div>
//                                     <div>
//                                         <button onClick={dbhandle} className="button99">Book now</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Kochieast;

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Kochieast() {
const navigate=useNavigate('/');
const[data,setData]=useState([])
useEffect(()=>{
axios.get('http://localhost:8000/Kochieast')
.then(response=>setData(response.data))
.catch(err=>console.log(err))
},[])
const dbhandle = () => {
    axios.post('http://localhost:8000/Kochieastpost',data)
        .then(response => {
            navigate('/booking sucess');
        })
        .catch(err => console.log)
};

return (
<div className='d-flex justify-content-center align-items-center bg-light vh-100' >
  <div className='w-75 rounded border p-4'>
    <div className='d-flex justify-content-end bg-black'>  
      </div>
    <table className='table table-striped'>
        <thead>
            <tr>
                <th>Price</th>
                <th>place</th>
                <th>time</th>
            
             
            </tr>
        </thead>
        <tbody>
            {
            data.map((d,i)=>{
                return<tr key={i}>
                    <td>{d.price}</td>
                    <td>{d.place}</td>
                    <td>{d.time}</td>
                </tr>
            })}
        </tbody>
     <button className='button99 btn99' onClick={dbhandle}>book</button>
    </table>
    </div>
</div>
)

}

export default Kochieast;