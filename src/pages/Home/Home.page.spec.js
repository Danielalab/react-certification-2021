import Home from './Home.page';
import dataDummy from '../../hooks/tests/responses/searchQuerySuccess.json';

const { render, screen, waitFor } = require('@testing-library/react');

jest.mock('../../components/VideoThumbnail/VideoThumbnail.component.jsx');

describe('Home Page', () => {
  test('Should renders Home page component with VideoThumbnail', async () => {
    let loading;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(dataDummy),
      })
    );
    const { container } = render(<Home text="fake searched text" />);
    loading = screen.getByText(/...loading/i);
    expect(container).toBeInTheDocument();
    expect(loading).toBeInTheDocument();
    expect(container).toMatchSnapshot();

    await waitFor(() => screen.getAllByText(/dummy video thumbnail component/i));
    const videosThumbnailComponent = screen.getByText(
      /dummy video thumbnail component fakeVideoId1/i
    );
    expect(videosThumbnailComponent).toBeInTheDocument();
    expect(videosThumbnailComponent.textContent).toBe(
      'Dummy Video Thumbnail component fakeVideoId1'
    );
    loading = screen.queryByText(/...loading/i);
    expect(loading).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('Should renders an Error message', async () => {
    let loading;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.reject(new Error('API error')),
      })
    );
    const { container } = render(<Home text="fake searched text" />);
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
