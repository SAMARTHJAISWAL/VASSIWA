import React from 'react';
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
  max-width: 600px;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const RuleList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const RuleItem = styled.li`
  margin-bottom: 10px;
  font-size: 1.1em;
  color: #666;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
`;

const Disclaimer = () => {
  return (
    <PageWrapper>
      <Container>
        <Title>Disclaimer Rules</Title>
        <RuleList>
          <RuleItem>1. All users must abide by the terms and conditions.</RuleItem>
          <RuleItem>2. No unauthorized use of this platform is allowed.</RuleItem>
          <RuleItem>3. The company is not responsible for any data loss.</RuleItem>
          <RuleItem>4. All activities are monitored for security purposes.</RuleItem>
          <RuleItem>5. Users must report any suspicious activity immediately.</RuleItem>
        </RuleList>
      </Container>
    </PageWrapper>
  );
};

export default Disclaimer;
