import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { useNavigate, Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

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

const Registration = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    contactNumber: '',
    dateOfJoining: new Date(),
    udyamId: '',
    natureOfProduct: '',
    screenshot: null
  });

  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    navigate('/landing'); // Redirect to landing page after form submission
  };

  return (
    <Container>
      <h1>Company Registration</h1>
      <Form onSubmit={handleSubmit}>
        <Label>Company Name:</Label>
        <Input
          type="text"
          value={formData.companyName}
          onChange={(e) => handleChange('companyName', e.target.value)}
          required
        />

        <Label>Email:</Label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
        />

        <Label>Contact Number:</Label>
        <Input
          type="text"
          value={formData.contactNumber}
          onChange={(e) => handleChange('contactNumber', e.target.value)}
          required
        />

        <Label>Date of Joining:</Label>
        <StyledDatePicker
          selected={formData.dateOfJoining}
          onChange={(date) => handleChange('dateOfJoining', date)}
          dateFormat="MMMM d, yyyy"
        />

        <Label>Udyam ID:</Label>
        <Input
          type="text"
          value={formData.udyamId}
          onChange={(e) => handleChange('udyamId', e.target.value)}
          required
        />

        <Label>Nature of Product:</Label>
        <Input
          type="text"
          value={formData.natureOfProduct}
          onChange={(e) => handleChange('natureOfProduct', e.target.value)}
          required
        />

        <Label>Upload Screenshot of ID:</Label>
        <FileInput
          type="file"
          accept="image/jpeg, image/png"
          onChange={handleFileChange}
        />

        <Button type="submit">Register</Button>
        <p style={{ marginTop: '20px' }}>
          Already registered? <Link to="/login">Log in here</Link>.
        </p>
      </Form>
    </Container>
  );
};

export default Registration;
