import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (isSubmitting) return; // Prevent spamming the login button
    setIsSubmitting(true);
    setErrorMessage('');

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      if (error.message.includes('Invalid login credentials')) {
        setErrorMessage('Incorrect password. Please try again.');
      } else if (error.message.includes('User not found')) {
        setErrorMessage('No account found with this email. Would you like to create one?');
      } else {
        setErrorMessage('An error occurred during login. Please try again.');
      }
    } else if (data.user) {
      navigate('/book-now'); // Redirect on successful login
    }

    setIsSubmitting(false);
  };

  const handleGoogleLogin = async () => {
    if (isSubmitting) return; // Prevent spamming
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/book-now`, // Redirect to "Book Now" after Google login
      },
    });
  };

  const handleMicrosoftLogin = async () => {
    if (isSubmitting) return; // Prevent spamming
    await supabase.auth.signInWithOAuth({
      provider: 'azure',
      options: {
        redirectTo: `${window.location.origin}/book-now`, // Redirect to "Book Now" after Microsoft login
      },
    });
  };

  const handlePasswordReset = () => {
    navigate('/account/resetpassword'); // Navigate to password reset page
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <Link to="/" className="back-button">← Back to Home</Link>
        <h1 className="auth-title">
          Login
          <span className="auth-subtitle">(You must login to book an appointment)</span>
        </h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
        />
        <button 
          onClick={handleLogin} 
          className="auth-button" 
          disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Login'}
        </button>
        {errorMessage && (
          <div className="auth-error-message">
            {errorMessage}
            {errorMessage.includes('Incorrect password') && (
            <button
               onClick={handlePasswordReset}
               className="reset-password-link"
          >
              Reset Password
          </button>
    )}
          </div>
        )}
        <div className="auth-create-account">
          <span>Don’t have an account?</span>
          <Link to="/account/signup" className="auth-link">Create an Account</Link>
        </div>
        <div className="auth-or">or</div>
        <div className="auth-social-buttons">
          {/* Google Button with Tooltip */}
          <div className="tooltip">
            <button onClick={handleGoogleLogin} className="social-button">
              <img
                src="https://raw.githubusercontent.com/officialanaxus/anaxus/refs/heads/main/Images/Google%20icon.svg"
                alt="Google"
                className="social-logo"
              />
            </button>
            <span className="tooltip-text">Login with Google</span>
          </div>

          {/* Microsoft Button with Tooltip */}
          <div className="tooltip">
            <button onClick={handleMicrosoftLogin} className="social-button">
              <img
                src="https://raw.githubusercontent.com/officialanaxus/anaxus/refs/heads/main/Images/Microsoft%20icon.svg"
                alt="Microsoft"
                className="social-logo"
              />
            </button>
            <span className="tooltip-text">Login with Microsoft</span>
          </div>
        </div>
      </div>
    </div>
  );
}