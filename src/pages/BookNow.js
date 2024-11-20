import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { supabase } from '../supabaseClient'; // Ensure Supabase is set up in your project
import { useNavigate } from 'react-router-dom'; // For navigation
import './BookNow.css'; // CSS file for styling the Book Now page

function BookNow() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage button disabling
  const [phoneError, setPhoneError] = useState(''); // State to manage phone validation error
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State for showing popup
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchUserEmail = async () => {
      const { data: { session } } = await supabase.auth.getSession();
    
      if (session) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          email: session.user.email, // Autofill the email field with the logged-in user's email
        }));
      }
    };

    fetchUserEmail();
  }, []);

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, ''); // Remove non-numeric characters
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    }
    if (phoneNumber.length <= 6) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prevFormData) => ({ ...prevFormData, phone: formattedPhone }));

      // Check for valid phone format
      const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
      if (!phoneRegex.test(formattedPhone) && formattedPhone.length > 0) {
        setPhoneError('Invalid phone number format. Use 123-456-7890');
      } else {
        setPhoneError('');
      }
      return;
    }

    // Update date and time fields correctly
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phoneError) {
      alert('Please fix errors before submitting.');
      return;
    }

    setIsSubmitting(true); // Disable the button

    // Format date to MM/DD/YYYY for EmailJS
    const formattedDate = new Date(formData.date).toLocaleDateString('en-US');
  
    // Prepare data for EmailJS
    const emailData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formattedDate, // Use formatted date
      time: formData.time,
      service: formData.service,
      details: formData.details,
    };
  
    console.log('Sending Email Data:', emailData); // Debugging log for email data
  
    emailjs
      .send(
        'service_o2a6p78', // Replace with your EmailJS Service ID
        'template_5hx8yn9', // Replace with your EmailJS Template ID
        emailData, // Send formatted data
        'T6hrrAGFFeASGhffB' // Replace with your EmailJS User ID
      )
      .then(() => {
        setIsPopupVisible(true); // Show the success popup
        setFormData({
          email: formData.email, // Keep the autofilled email after submission
          name: '',
          phone: '',
          date: '',
          time: '',
          service: '',
          details: '',
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send appointment request. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false); // Re-enable the button
      });
  };

  // Get today's date in the correct format for the date picker
  const today = new Date().toLocaleDateString('en-CA'); // Format as YYYY-MM-DD

  const handleReturnHome = () => {
    navigate('/'); // Redirect to the homepage
  };

  return (
    <div className="book-now-container">
      <h1>Book an Appointment</h1>
      <form className="book-now-form" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled
            required
            placeholder="Your Email"
            className="email-input"
          />
        </label>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="123-456-7890"
          />
          {phoneError && <p className="error-message">{phoneError}</p>}
        </label>
        <label>
          Preferred Date & Time
          <div className="date-time-container">
            <input
              id="date-picker"
              type="date"
              name="date"
              value={formData.date} // Set default value to today's date
              onChange={handleChange}
              required
              className="hidden-date-input"
              min={today}
            />
            <select
              name="time"
              value={formData.time} // Correctly bind to formData.time
              onChange={handleChange}
              required
              className="time-select"
            >
              <option value="">Select Time</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
            </select>
          </div>
        </label>
        <label>
          Service Type
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="Networking Setup">Networking Setup</option>
            <option value="Computer Troubleshooting">
              Computer Troubleshooting
            </option>
            <option value="Home Theater">Home Theater/Cable Management</option>
            <option value="Business Technical Support">
              Business Technical Support
            </option>
            <option value="Other">Other (please provide details)</option>
          </select>
        </label>
        <label>
          Additional details/Brief description
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Provide any specific information/brief description..."
          />
        </label>
        <button type="submit" disabled={isSubmitting || phoneError}>
          {isSubmitting ? 'Submitting...' : 'Submit Appointment Request'}
        </button>
      </form>

      {/* Popup for success message */}
      {isPopupVisible && (
        <div className="popup-container">
          <div className="popup-content">
            <h2>Request Sent</h2>
            <p>
              Your appointment request has been sent successfully. 
              You should receive an automated email shortly and will hear back from us soon.
            </p>
            <button onClick={handleReturnHome}>Return to Home</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookNow;