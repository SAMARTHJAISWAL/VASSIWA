import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { useNavigate, Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import { API_URL } from '../config';
import { RegistrationContext } from '../context/RegistrationContext';

const Container = styled.div`
  padding: 20px;
  background: #f9f9f9;
  width: 100%;
  max-width: 600px;
  margin: auto;
  font-size: 14px; // Set the base font size smaller
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  font-size: 14px; // Smaller font size for inputs
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 20px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 14px; // Smaller font size for the button
  &:hover {
    background-color: darkblue;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  padding: 10px;
  margin-top: 5px;
  width: 100%;
  font-size: 14px; // Smaller font size for the date picker
`;

const FileInput = styled(Input)`
  border: none;
`;

const ErrorText = styled.p`
  color: #c0392b;
  margin-top: 15px;
`;

const Registration = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    contactNumber: '',
    dateOfJoining: new Date(),
    udyamId: '',
    natureOfProduct: '',
    password: '',
    screenshot: null
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const { setIsRegistered } = useContext(RegistrationContext);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type.startsWith("image/")) {
        handleChange('screenshot', file);
      } else {
        alert("Only image files are allowed.");
        e.target.value = null;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!formData.screenshot) {
      setError('Please upload a screenshot of your Udyam ID.');
      return;
    }

    // The backend expects multipart/form-data (it stores the uploaded screenshot)
    const body = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      body.append(key, value instanceof Date ? value.toISOString() : value);
    });

    setSubmitting(true);
    try {
      await axios.post(`${API_URL}/companies`, body);
      setIsRegistered(true);
      navigate('/landing'); // Redirect to landing page after registration
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <h1>Company Registration</h1>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="companyName">Company Name:</Label>
        <Input
          id="companyName"
          type="text"
          value={formData.companyName}
          onChange={(e) => handleChange('companyName', e.target.value)}
          required
        />

        <Label htmlFor="email">Email:</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
        />

        <Label htmlFor="contactNumber">Contact Number:</Label>
        <Input
          id="contactNumber"
          type="tel"
          value={formData.contactNumber}
          onChange={(e) => handleChange('contactNumber', e.target.value)}
          required
        />

        <Label htmlFor="dateOfJoining">Date of Joining:</Label>
        <StyledDatePicker
          id="dateOfJoining"
          selected={formData.dateOfJoining}
          onChange={(date) => handleChange('dateOfJoining', date)}
          dateFormat="MMMM d, yyyy"
        />

        <Label htmlFor="udyamId">Udyam ID:</Label>
        <Input
          id="udyamId"
          type="text"
          value={formData.udyamId}
          onChange={(e) => handleChange('udyamId', e.target.value)}
          required
        />

        <Label htmlFor="natureOfProduct">Nature of Product:</Label>
        <Input
          id="natureOfProduct"
          type="text"
          value={formData.natureOfProduct}
          onChange={(e) => handleChange('natureOfProduct', e.target.value)}
          required
        />

        <Label htmlFor="password">Password:</Label>
        <Input
          id="password"
          type="password"
          minLength={6}
          autoComplete="new-password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          required
        />

        <Label htmlFor="screenshot">Upload Screenshot of ID:</Label>
        <FileInput
          id="screenshot"
          type="file"
          accept="image/jpeg, image/png"
          onChange={handleFileChange}
        />

        {error && <ErrorText role="alert">{error}</ErrorText>}
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Registering...' : 'Register'}
        </Button>
        <p style={{ marginTop: '20px' }}>
          Already registered? <Link to="/login">Log in here</Link>.
        </p>
      </Form>
    </Container>
  );
};

export default Registration;
