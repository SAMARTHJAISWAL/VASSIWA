import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(to bottom right, #f5f7fa, #c3cfe2);
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const LinksContainer = styled.div`
  position: absolute;
  top: 120px;
  left: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2em;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }
`;

const LandingTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 2.5em;
  color: #333;
  text-align: center;
  margin-top: 80px;
`;

const LandingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 800px;
  margin-top: 20px;
`;

const LandingImage = styled.img`
  width: 150px;
  height: auto;
  margin-right: 20px;
  border-radius: 10px;
`;

const LandingText = styled.div`
  max-width: 450px;
  text-align: left;
`;

const LandingDescription = styled.p`
  font-size: 1.2em;
  color: #666;
  line-height: 1.6;
`;

const Landing = () => {
  return (
    <LandingWrapper>
      <LinksContainer>
        <StyledLink to="/udyam">Udyam Link</StyledLink>
        <StyledLink to="/msme">MSME Link</StyledLink>
      </LinksContainer>
      <LandingTitle>Welcome to Vassiwa</LandingTitle>
      <LandingContent>
        <LandingImage src={logo} alt="Vassiwa" />
        <LandingText>
          <LandingDescription>
            Vassiwa is dedicated to managing industrial companies in Visakhapatnam.
            Our platform streamlines operations, enhances communication, and provides
            a user-friendly environment for all your organizational needs.
          </LandingDescription>
        </LandingText>
      </LandingContent>
    </LandingWrapper>
  );
};

export default Landing;
