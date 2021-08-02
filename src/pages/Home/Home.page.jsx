import React from 'react';
import styled from 'styled-components';
import VideosList from '../../components/VideosList';
import useSearchQuery from '../../hooks/useSearchQuery';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  margin-top: 70px;
  @media (max-width: 576px) {
    justify-content: center;
    padding: 1rem;
  }
`;

function HomePage({ text }) {
  const [data, loading, error] = useSearchQuery({ text });
  return (
    <Wrapper>
      {loading && '...loading'}
      {error && 'Something was wrong'}
      {data && <VideosList videos={data.items} />}
    </Wrapper>
  );
}

export default HomePage;
