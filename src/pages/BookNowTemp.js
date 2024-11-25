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
              <strong>Phone:</strong> (555) 123-4567
            </li>
            <li>
              <strong>Email:</strong> contact@anaxus.tech
            </li>
            <li>
              <strong>Text:</strong> (555) 123-4567 (Preferred)
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