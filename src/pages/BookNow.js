import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { supabase } from '../supabaseClient'; // Ensure Supabase is set up in your project
import './BookNow.css'; // CSS file for styling the Book Now page

function BookNow() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    date: '',
    service: '',
    details: '',
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_cpkajrx', // Replace with your EmailJS Service ID
        'template_5hx8yn9', // Replace with your EmailJS Template ID
        formData,
        'T6hrrAGFFeASGhffB' // Replace with your EmailJS User ID
      )
      .then(() => {
        alert('Appointment request sent successfully!');
        setFormData({
          email: formData.email, // Keep the autofilled email after submission
          name: '',
          phone: '',
          date: '',
          service: '',
          details: '',
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send appointment request. Please try again.');
      });
  };

  const today = new Date().toISOString().split('T')[0];

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
            required
            placeholder="Your Email" // Placeholder text for the email input
            className="email-input" // New CSS class for the email input
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
          />
        </label>
        <label>
          Preferred Date
          <div className="custom-date-container">
            <input
              id="date-picker"
              type="date"
              name="date"
              value={formData.date || today}
              onChange={handleChange}
              required
              className="hidden-date-input"
              min={today}
            />
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
            required
          />
        </label>
        <button type="submit">Submit Appointment Request</button>
      </form>
    </div>
  );
}

export default BookNow;