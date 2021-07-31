import React from 'react';
import styled from 'styled-components';
import { items } from './youtube-videos-mock.json';

const { snippet: channel } = items.shift();

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

const VideosList = () =>
  items.map(({ id, snippet }) => (
    <VideoCard key={id.videoId}>
      <figure>
        <img src={snippet.thumbnails.medium.url} alt={`${snippet.title} thumbnail`} />
      </figure>
      <Wrapper>
        <ChannelAvatar src={channel.thumbnails.default.url} alt={channel.channelTitle} />
        <MarginX className="margin-x">
          <Link href={`https://www.youtube.com/watch?v=${id.videoId}`}>
            {snippet.title}
          </Link>
          <div>
            <Text>{snippet.channelTitle}</Text>
            <Text>{snippet.publishedAt}</Text>
          </div>
        </MarginX>
      </Wrapper>
    </VideoCard>
  ));

export default VideosList;
