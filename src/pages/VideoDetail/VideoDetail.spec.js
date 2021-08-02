import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import VideoDetail from './VideoDetail.page';
import dataDummy from '../../hooks/tests/responses/searchQuerySuccess.json';

const { render, screen, waitFor } = require('@testing-library/react');

/* mocking children componnets */
jest.mock('../../components/VideosList/VideosList.component');
jest.mock('../../components/VideoPlayer/VideoPlayer.component');

describe('VideoDetail Page', () => {
  test('Should renders VideoDetail page component with VideoPlayer & VideosList', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(dataDummy),
      })
    );
    /* render component with router */
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <VideoDetail />
      </Router>
    );
    history.push('/fakeVideoId1');

    let loading;
    let videosListsComponent;
    let videoPlayerComponent;

    loading = screen.getByText(/...loading/i);
    videosListsComponent = screen.queryByText('videos-list');
    videoPlayerComponent = screen.queryByText('video-player');
    expect(container).toBeInTheDocument();
    expect(loading).toBeInTheDocument();
    expect(videosListsComponent).not.toBeInTheDocument();
    expect(videoPlayerComponent).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();

    await waitFor(() => {
      expect(screen.getByTestId('videos-list')).toBeInTheDocument();
      expect(screen.getByTestId('video-player')).toBeInTheDocument();
    });
    videosListsComponent = screen.getByTestId('videos-list');
    videoPlayerComponent = screen.getByTestId('video-player');
    loading = screen.queryByText(/...loading/i);
    expect(videosListsComponent).toBeInTheDocument();
    expect(videosListsComponent.textContent).toBe('Dummy Videos List component');
    expect(videoPlayerComponent).toBeInTheDocument();
    expect(videoPlayerComponent.textContent).toBe('Dummy Video Player component');
    expect(loading).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('Should renders an Error message', async () => {
    let loading;
    const history = createMemoryHistory();
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.reject(new Error('API error')),
      })
    );

    /* render component with router */
    const { container } = render(
      <Router history={history}>
        <VideoDetail />
      </Router>
    );
    history.push('/fakeVideoId1');

    loading = screen.getByText(/...loading/i);
    expect(container).toBeInTheDocument();
    expect(loading).toBeInTheDocument();
    expect(container).toMatchSnapshot();

    await waitFor(() => screen.getByText(/Something was wrong/i));
    const errorMessage = screen.getByText(/Something was wrong/i);
    expect(errorMessage).toBeInTheDocument();
    loading = screen.queryByText(/...loading/i);
    expect(loading).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
