import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config';
import { RegistrationContext } from '../context/RegistrationContext';

const Container = styled.div`
  padding: 20px;
  background: #f9f9f9;
  width: 100%;
  max-width: 400px;
  margin: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #2980b9;
  }
`;

const ErrorText = styled.p`
  color: #c0392b;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setIsRegistered } = useContext(RegistrationContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { data } = await axios.post(`${API_URL}/Login`, { email, password });
      localStorage.setItem('token', data.token);
      setIsRegistered(true);
      navigate('/landing');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email:</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Label htmlFor="password">Password:</Label>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <ErrorText role="alert">{error}</ErrorText>}
        <Button type="submit">Log In</Button>
      </Form>
    </Container>
  );
};

export default Login;
