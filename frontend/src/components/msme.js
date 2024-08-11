import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 20px;
`;

const MSME = () => {
  return (
    <PageWrapper>
      <h2>MSME Page</h2>
      <p>Content for the MSME page goes here. For more information, visit the <a href="https://msme.gov.in/" target="_blank" rel="noopener noreferrer">MSME Official Website</a>.</p>
    </PageWrapper>
  );
};

export default MSME;