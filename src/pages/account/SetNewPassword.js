import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Auth.css';

export default function SetNewPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [tokenHash, setTokenHash] = useState('');

  useEffect(() => {
    const hash = searchParams.get('token_hash');
    console.log('Extracted token_hash:', hash);
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

    try {
      const { error } = await supabase.auth.verifyOtp({
        type: 'recovery',
        token: tokenHash,
        password,
      });

      if (error) {
        if (error.message.includes('Token has expired')) {
          setMessage('The reset link has expired. Please request a new password reset.');
        } else if (error.message.includes('Invalid token')) {
          setMessage('The reset link is invalid. Please request a new password reset.');
        } else {
          setMessage('An error occurred while resetting your password. Please try again.');
        }
        console.error('Error resetting password:', error);
      } else {
        setMessage('Password successfully updated. Redirecting to login...');
        setTimeout(() => navigate('/account/login'), 3000);
      }
    } catch (err) {
      setMessage('An unexpected error occurred. Please try again.');
      console.error('Unexpected error:', err);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Set New Password</h1>
        {tokenHash ? (
          <>
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
          </>
        ) : (
          <p className="auth-message">
            Invalid or missing token hash. Please try resetting your password again.
          </p>
        )}
        {message && <div className="auth-message">{message}</div>}
      </div>
    </div>
  );
}