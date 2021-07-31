import React from 'react';
import styled from 'styled-components';
import VideosList from '../../components/VideosList';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  margin-top: 70px;
  background-color: #fbe8d3;
  @media (max-width: 576px) {
    justify-content: center;
    padding: 1rem;
  }
`;

function HomePage() {
  return (
    <Wrapper>
      <VideosList />
    </Wrapper>
  );
}

export default HomePage;
