import React from 'react';
import { Link } from 'react-router-dom';
import { Box, styled } from '@mui/material';

const NavbarContainer = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 20px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker, semi-transparent background
  color: 'white',
  borderRadius: '16px',
  maxWidth: '1200px', // Increased width
  width: '95%',
  margin: '0 auto',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
  backdropFilter: 'blur(10px)', // Blur effect for transparency
});

const LeftLinks = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
});

const Divider = styled('div')({
  height: '24px',
  width: '1px',
  backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white divider
});

const RightLinks = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
});

const StyledLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontWeight: 700,
  '&:hover': {
    color: '#3A8DFF',
  },
});

const StyledButton = styled('button')({
  background: 'none',
  border: 'none',
  color: 'white',
  fontSize: '1.1rem',
  fontWeight: 700,
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    color: '#3A8DFF',
  },
});

export default function Navbar({ user, onSignOut }) {
  return (
    <NavbarContainer>
      {/* Left side with logo, divider, and main navigation links */}
      <LeftLinks>
        <h2 style={{ margin: '0' }}>Anaxus</h2>
        <Divider />
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/book-now">Book Now</StyledLink>
        <StyledLink to="/support">Support</StyledLink>
      </LeftLinks>

      {/* Right side with Login and Sign Up (or Sign Out) */}
      <RightLinks>
        {user ? (
          <StyledButton onClick={onSignOut}>
            Sign Out
          </StyledButton>
        ) : (
          <>
            <StyledLink to="/account/login">Login</StyledLink>
            <StyledLink to="/account/signup">Sign Up</StyledLink>
          </>
        )}
      </RightLinks>
    </NavbarContainer>
  );
}