import React from 'react';
import styled from 'styled-components';

// Styling for the container
const FeedbackContainer = styled.div`
  background-color: #f4f4f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  width: 80%;
  max-width: 600px;
  margin: 20px auto;
  text-align: center;
`;

// Styling for the form
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Styling for the text area
const TextArea = styled.textarea`
  width: 90%;
  height: 100px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: none; // Prevent resizing the text area
`;

// Styling for the label
const Label = styled.label`
  font-size: 16px;
  color: #333;
`;

// Styling for the button
const Button = styled.button`
  background-color: #0056b3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004494;
  }
`;

const Feedback = () => {
  return (
    <FeedbackContainer>
      <h2>Feedback</h2>
      <Form>
        <Label htmlFor="feedback">Your Feedback:</Label>
        <TextArea id="feedback" required></TextArea>
        <Button type="submit">Submit</Button>
      </Form>
    </FeedbackContainer>
  );
};

export default Feedback;
