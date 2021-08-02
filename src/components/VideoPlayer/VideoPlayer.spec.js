import { render, screen } from '@testing-library/react';
import VideoPlayer from './VideoPlayer.component';

describe('VideoPlayer', () => {
  const dataDummy = {
    videoId: 'testVideoId',
    title: 'Test video title',
    description: 'Test video description',
    publishedAt: '2014-09-27T01:39:18Z',
  };

  beforeEach(() => {
    render(
      <VideoPlayer
        videoId={dataDummy.videoId}
        title={dataDummy.title}
        description={dataDummy.description}
        publishedAt={dataDummy.publishedAt}
      />
    );
  });

  test('Should renders an Iframe with the video url', () => {
    const iframeElement = screen.getByTestId('iframe-with-video');
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute(
      'src',
      `https://www.youtube.com/embed/${dataDummy.videoId}`
    );
  });

  test('Should renders the video title', () => {
    const titleElement = screen.getByText(/test video title/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('Should renders the video description', () => {
    const titleElement = screen.getByText(/test video description/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('Should renders the video published date', () => {
    const titleElement = screen.getByText(/2014-09-27T01:39:18Z/i);
    expect(titleElement).toBeInTheDocument();
  });
});
