import Header from './Header';

const { render, screen } = require('@testing-library/react');

describe('Header', () => {
  let container;

  beforeEach(() => {
    container = render(<Header />).container;
  });

  test('Should renders Header component', () => {
    expect(container).toMatchSnapshot();
  });

  test('Should contains a logo image', () => {
    const imageElement = screen.getByAltText(/pied piper logo/i);
    expect(imageElement).toBeInTheDocument();
  });

  test('Should contains an user avatar', () => {
    const imageElement = screen.getByAltText(/current user avatar/i);
    expect(imageElement).toBeInTheDocument();
  });

  test('Should contains a toggle switch button', () => {
    const togleSwitchButton = screen.getByRole('switch');
    expect(togleSwitchButton).toBeInTheDocument();
    expect(togleSwitchButton.children.length).toBe(2);
    expect(togleSwitchButton.firstChild).toHaveAttribute('type', 'checkbox');
  });

  test('Should contains an input', () => {
    const inputElement = screen.getByPlaceholderText(/search/i);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });
});
