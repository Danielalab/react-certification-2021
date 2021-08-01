import React from 'react';
import styled from 'styled-components';
import defaultChannelAvatar from '../../assets/images/undraw_default_avatar.svg';

const VideoCard = styled.div`
  max-width: 320px;
  margin: 0.75rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Link = styled.a`
  color: #000000;
  font-weight: 700;
`;

const ChannelAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Text = styled.p`
  margin: 0;
  color: #555555;
`;

const MarginX = styled.div`
  margin: 0 0.75rem;
`;

const Video = ({ id, videoData }) => {
  return (
    <VideoCard>
      <figure>
        <img src={videoData.thumbnails.medium.url} alt={`${videoData.title} thumbnail`} />
      </figure>
      <Wrapper>
        <ChannelAvatar src={defaultChannelAvatar} alt={videoData.channelTitle} />
        <MarginX className="margin-x">
          <Link href={`https://www.youtube.com/watch?v=${id}`}>{videoData.title}</Link>
          <div>
            <Text>{videoData.channelTitle}</Text>
            <Text>{videoData.publishedAt}</Text>
          </div>
        </MarginX>
      </Wrapper>
    </VideoCard>
  );
};

const VideosList = ({ videos }) =>
  videos.map(({ id, snippet }) => (
    <Video key={id.videoId} id={id.videoId} videoData={snippet} />
  ));

export default VideosList;
