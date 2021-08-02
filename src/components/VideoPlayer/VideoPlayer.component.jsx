import styled from 'styled-components';

const Iframe = styled.iframe`
  width: 100%;
  height: 500px;
  @media (max-width: 576px) {
    width: 100%;
    height: 250px;
  }
`;

const VideoTitle = styled.h2`
  font-weight: bold;
  margin-top: 1rem;
`;

const Divider = styled.hr`
  margin: 1rem 0;
`;

const Text = styled.p`
  color: #555555;
  margin: 0;
`;

const VideoDescription = styled.p`
  margin: 0.5rem;
`;

const VideoPlayer = ({ videoId, title, description, publishedAt }) => (
  <>
    <Iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      data-testid="iframe-with-video"
    />
    <VideoTitle className="title--font">{title}</VideoTitle>
    <Text>{publishedAt}</Text>
    <Divider />
    <VideoDescription>{description}</VideoDescription>
  </>
);

export default VideoPlayer;
