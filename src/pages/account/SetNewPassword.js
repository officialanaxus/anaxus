import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate, useSearchParams } from 'react-router-dom'; // Import useSearchParams
import './Auth.css';

export default function SetNewPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams(); // Access query parameters
  const navigate = useNavigate();
  const [tokenHash, setTokenHash] = useState('');

  useEffect(() => {
    // Extract token_hash from the URL on component mount
    const hash = searchParams.get('token_hash');
    if (hash) {
      setTokenHash(hash);
    } else {
      setMessage('Invalid or missing token hash. Please try resetting your password again.');
    }
  }, [searchParams]);

  const handlePasswordReset = async () => {
    setMessage('');
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    if (!tokenHash) {
      setMessage('Invalid or missing token hash.');
      return;
    }

    setIsSubmitting(true);

    // Call Supabase to update the user's password using the token hash
    const { error } = await supabase.auth.verifyOtp({
      type: 'recovery',
      token: tokenHash,
      password,
    });

    if (error) {
      setMessage('An error occurred while resetting your password. Please try again.');
      console.error(error);
    } else {
      setMessage('Password successfully updated. Redirecting to login...');
      setTimeout(() => navigate('/account/login'), 3000);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Set New Password</h1>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="auth-input"
        />
        <button
          onClick={handlePasswordReset}
          className="auth-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : 'Set Password'}
        </button>
        {message && <div className="auth-message">{message}</div>}
      </div>
    </div>
  );
}