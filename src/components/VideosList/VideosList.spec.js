import VideosList from './VideosList.component';

const { render, screen } = require('@testing-library/react');

// test.js
jest.mock('./youtube-videos-mock.json');

describe('VideosList', () => {
  let container;

  beforeEach(() => {
    container = render(<VideosList />).container;
  });

  test('Should renders VideosList component', () => {
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('Should contains an image with the thumbnail url', () => {
    const videoThumbnailImageElement = screen.getByAltText('fake video title thumbnail');
    expect(videoThumbnailImageElement).toBeInTheDocument();
    expect(videoThumbnailImageElement).toHaveAttribute('src', 'fake-video-url-image.png');
  });
  test('Should contains an image with the channel avatar', () => {
    const channelImageElement = screen.getByAltText('fake channel title');
    expect(channelImageElement).toBeInTheDocument();
    expect(channelImageElement).toHaveAttribute('src', 'fake-channel-image.png');
  });

  test('Should contains a link redirects to the video url', () => {
    const linkELement = screen.getByText(/fake video title/i);
    expect(linkELement).toBeInTheDocument();
    expect(linkELement).toHaveAttribute(
      'href',
      'https://www.youtube.com/watch?v=fakeVideoId'
    );
  });

  test('Should shows the channel title', () => {
    const channelTitleElement = screen.getByText(/fake channel title/i);
    expect(channelTitleElement).toBeInTheDocument();
  });

  test('Should shows the video published date', () => {
    const channelTitleElement = screen.getByText(/2014-09-27T01:39:18Z/i);
    expect(channelTitleElement).toBeInTheDocument();
  });
});
