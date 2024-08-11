import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f5f7fa, #c3cfe2);
  padding: 20px;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #666;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1em;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }
`;

const Grievances = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [grievance, setGrievance] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/grievances`, {
        companyName,
        email,
        grievance
      });
      console.log(response.data);
    } catch (error) {
      console.error('Grievance error:', error);
    }
    setCompanyName('');
    setEmail('');
    setGrievance('');
  };

  return (
    <PageWrapper>
      <FormWrapper>
        <Title>Submit Your Grievance</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Company Name:</Label>
          <Input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Label>Grievance:</Label>
          <TextArea
            value={grievance}
            onChange={(e) => setGrievance(e.target.value)}
            required
            rows="5"
          />
          <Button type="submit">Submit</Button>
        </Form>
      </FormWrapper>
    </PageWrapper>
  );
};

export default Grievances;
