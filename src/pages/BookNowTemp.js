import React from 'react';
import './BookNowTemp.css'; // Ensure this points to your CSS file

const BookNowTemp = () => {
  return (
    <div className="book-now-temp-container">
      <div className="page-content-box">
        <div className="contact-box">
          <h1>Contact Us to Book Now</h1>
          <p>You can reach us via:</p>
          <ul>
            <li>
              <strong>Phone/Text:</strong> (561) 468-8995 (Preferred)
            </li>
            <li>
              <strong>Email:</strong> schedule@anaxus.tech
            </li>
          </ul>
          <p className="instructions">
            For the fastest response, we recommend texting us. You can also call or email if preferred.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookNowTemp;