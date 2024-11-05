import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './BookNow.css';  // CSS file for styling the Book Now page

function BookNow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    details: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'YOUR_SERVICE_ID',     // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',    // Replace with your EmailJS Template ID
        formData,
        'YOUR_USER_ID'         // Replace with your EmailJS User ID
      )
      .then((response) => {
        alert('Appointment request sent successfully!');
        setFormData({ name: '', email: '', phone: '', date: '', service: '', details: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send appointment request. Please try again.');
      });
  };

  return (
    <div className="book-now-container">
      <h1>Book an Appointment</h1>
      <form className="book-now-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Preferred Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          Service Type:
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">Select a service</option>
            <option value="Networking Setup">Networking Setup</option>
            <option value="Computer Troubleshooting">Computer Troubleshooting</option>
            <option value="TV Mounting">TV Mounting</option>
            <option value="Business Technical Support">Business Technical Support</option>
          </select>
        </label>
        <label>
          Additional Details:
          <textarea name="details" value={formData.details} onChange={handleChange} placeholder="Provide any specific information..." />
        </label>
        <button type="submit">Submit Appointment Request</button>
      </form>
    </div>
  );
}

export default BookNow;