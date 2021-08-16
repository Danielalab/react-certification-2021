import React from 'react';
import styled from 'styled-components';
import VideoThumbnail from '../../components/VideoThumbnail';
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
      {data &&
        data.items
          .filter(({ snippet }) => snippet !== undefined)
          .map(({ id, snippet }) => (
            <VideoThumbnail key={id.videoId} id={id.videoId} videoData={snippet} />
          ))}
    </Wrapper>
  );
}

export default HomePage;
