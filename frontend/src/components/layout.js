import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './footer';
import { RegistrationContext } from '../context/RegistrationContext';
import logo from '../assets/logo.jpg';

const Navbar = styled.nav`
  background-color: #2c3e50;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-right: 20px;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

const NavItem = styled.li`
  padding: 14px 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 1.1em;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #34495e;
    color: #ecf0f1;
  }
`;

const MainContent = styled.main`
  padding-bottom: 50px;
`;

const Layout = ({ children }) => {
  const { isRegistered } = useContext(RegistrationContext);

  return (
    <div>
      <Navbar>
        <LogoContainer>
          <Link to="/">
            <Logo src={logo} alt="Company Logo" />
          </Link>
        </LogoContainer>
        <NavList>
          <NavItem>
            <NavLink to="/gallery">Gallery</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/events">Events</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={isRegistered ? "/grievances" : "/feedback"}>{isRegistered ? "Grievances" : "Feedback"}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/disclaimer">Disclaimer</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </NavItem>
        </NavList>
      </Navbar>
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
};

export default Layout;
