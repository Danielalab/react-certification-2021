import Home from './Home.page';

const { render, screen, waitFor } = require('@testing-library/react');

jest.mock('../../components/VideosList/VideosList.component');

describe('Home Page', () => {
  test('Should renders Home page component with VideosList', async () => {
    let loading;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ items: [] }),
      })
    );
    const { container } = render(<Home text="fake searched text" />);
    loading = screen.getByText(/...loading/i);
    expect(container).toBeInTheDocument();
    expect(loading).toBeInTheDocument();
    expect(container).toMatchSnapshot();

    await waitFor(() => screen.getByTestId('videos-list'));
    const videosListsComponent = screen.getByTestId('videos-list');
    expect(videosListsComponent).toBeInTheDocument();
    expect(videosListsComponent.textContent).toBe('Dummy Videos List component');
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
