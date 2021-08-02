import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VideosList from './VideosList.component';
import dataDummy from '../../hooks/tests/responses/searchQuerySuccess.json';

describe('VideosList', () => {
  let container;

  beforeEach(() => {
    container = render(<VideosList videos={dataDummy.items} />, {
      wrapper: MemoryRouter,
    }).container;
  });

  test('Should renders VideosList component', () => {
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('Should contains an image with the thumbnail url', () => {
    const videoThumbnailImageElement = screen.getByAltText(
      'fake video title 1 thumbnail'
    );
    expect(videoThumbnailImageElement).toBeInTheDocument();
    expect(videoThumbnailImageElement).toHaveAttribute('src', 'fake-video-url-image.png');
  });

  test('Should contains an image with the channel avatar', () => {
    const channelImageElement = screen.getAllByAltText('fake channel title')[0];
    expect(channelImageElement).toBeInTheDocument();
    expect(channelImageElement).toHaveAttribute('src', 'undraw_default_avatar.svg');
  });

  test('Should contains a link redirects to the video url', () => {
    const linkELement = screen.getByText(/fake video title 1/i);
    expect(linkELement).toBeInTheDocument();
    expect(linkELement).toHaveAttribute('href', '/fakeVideoId1');
  });

  test('Should shows the channel title', () => {
    const channelTitleElement = screen.getAllByText(/fake channel title/i)[0];
    expect(channelTitleElement).toBeInTheDocument();
  });

  test('Should shows the video published date', () => {
    const channelTitleElement = screen.getAllByText(/2014-09-27T01:39:18Z/i)[0];
    expect(channelTitleElement).toBeInTheDocument();
  });
});
