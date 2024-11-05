import React from 'react';
import { Link } from 'react-router-dom';
import { Box, styled } from '@mui/material';

const NavbarContainer = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 20px',
  backgroundColor: '#333',
  color: 'white',
  borderRadius: '16px', // Rounded corners
  maxWidth: '900px', // Centering the navbar within a max-width
  margin: '0 auto',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Optional shadow for effect
});

const NavLinks = styled(Box)({
  display: 'flex',
  gap: '20px',
});

const StyledLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    color: '#3A8DFF', // Hover color for links
  },
});

export default function Navbar() {
  return (
    <NavbarContainer>
      <h2 style={{ margin: '0' }}>Anaxus</h2>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/book-now">Book Now</StyledLink>
        <StyledLink to="/support">Support</StyledLink>
      </NavLinks>
    </NavbarContainer>
  );
}
