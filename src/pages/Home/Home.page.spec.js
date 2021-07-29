import Home from './Home.page';

const { render, screen } = require('@testing-library/react');

jest.mock('../../components/VideosList/VideosList', () => {
  return function DummyVideosList() {
    return (
      <div data-testid="videos-list">
        <p>Dummy Videos List component</p>
      </div>
    );
  };
});

describe('Home Page', () => {
  let container;

  beforeEach(() => {
    container = render(<Home />).container;
  });

  test('Should renders Home page component', () => {
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('Should contains VideosList component', () => {
    const videosListsComponent = screen.getByTestId('videos-list');
    expect(videosListsComponent).toBeInTheDocument();
    expect(videosListsComponent.textContent).toBe('Dummy Videos List component');
  });
});
