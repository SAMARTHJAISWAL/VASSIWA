import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 3px 0; // Reduced padding
  position: fixed;
  width: 100%;
  bottom: 0;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  margin: 3px 0; // Reduced margin
  font-size: 14px; // Slightly smaller font size
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Contact: vassiwa14@gmail.com</FooterText>
      <FooterText>Phone: +91 6301802613</FooterText>
      <FooterText>
        Address: M5XR+FHG, Auto Nagar, Visakhapatnam, Andhra Pradesh, 530012
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
