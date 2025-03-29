import React, { useState } from 'react';
import './bookingsucessful.css';

function BookingSuccess() {
  const [modalVisible, setModalVisible] = useState(true);
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  
  return (
    <div className="booking-success">
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>Comfirm booking!</h2>
            <p>Your booking has been confirmed.</p>
            <button onClick={handleCloseModal} className="close-btn">Comfirm</button>
          </div>
        </div>
      )}

      <div className="content">
        <h1 className="title2">Congratulations!</h1>
        <p className="message">Your booking was successful.</p>
      </div>
    </div>
  );
}

export default BookingSuccess;