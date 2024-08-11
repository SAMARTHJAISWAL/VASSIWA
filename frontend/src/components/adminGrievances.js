import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f5f7fa, #c3cfe2);
  padding: 20px;
`;

const Container = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const GrievanceList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const GrievanceItem = styled.li`
  margin-bottom: 10px;
  font-size: 1.1em;
  color: #666;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AdminGrievances = () => {
  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    const storedGrievances = JSON.parse(localStorage.getItem('grievances')) || [];
    setGrievances(storedGrievances);
  }, []);

  return (
    <PageWrapper>
      <Container>
        <Title>Review Grievances</Title>
        <GrievanceList>
          {grievances.map((grievance, index) => (
            <GrievanceItem key={index}>
              <strong>Company Name:</strong> {grievance.companyName}
              <br />
              <strong>Email:</strong> {grievance.email}
              <br />
              <strong>Grievance:</strong> {grievance.grievance}
            </GrievanceItem>
          ))}
        </GrievanceList>
      </Container>
    </PageWrapper>
  );
};

export default AdminGrievances;
