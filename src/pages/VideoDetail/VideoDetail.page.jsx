import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import VideosList from '../../components/VideosList';
import VideoPlayer from '../../components/VideoPlayer';
import useSearchQuery from '../../hooks/useSearchQuery';
import useVideosQuery from '../../hooks/useVideosQuery';

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

const VideoPlayerWrapper = styled.div`
  width: 70%;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

function VideoDetailPage() {
  const { id } = useParams();
  const [data, loading, error] = useVideosQuery({ videoId: id });
  const [relatedVideos, loadingRelatedVideos] = useSearchQuery({
    relatedToVideoId: id,
  });
  const video = ((data || {}).items || [])[0];
  return (
    <Wrapper>
      {loading && '...loading'}
      {error && 'Something was wrong'}
      {data && !loading && (
        <VideoPlayerWrapper>
          <VideoPlayer
            videoId={video.id}
            title={video.snippet.title}
            description={video.snippet.description}
            publishedAt={video.snippet.publishedAt}
          />
        </VideoPlayerWrapper>
      )}
      {relatedVideos && !loadingRelatedVideos && (
        <div>
          <VideosList videos={relatedVideos.items} />
        </div>
      )}
    </Wrapper>
  );
}

export default VideoDetailPage;
