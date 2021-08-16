import Header from './Header.component';

const { render, screen, fireEvent } = require('@testing-library/react');

describe('Header', () => {
  let container;
  const handleInputChangeMock = jest.fn();

  beforeEach(() => {
    container = render(<Header handleInputChange={handleInputChangeMock} />).container;
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

  test('Should contains an button to search a video', () => {
    const buttonElement = screen.getByLabelText('search');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'submit');

    //  change input value
    fireEvent.change(screen.getByPlaceholderText(/search/i), {
      target: { value: 'test' },
    });
    fireEvent.click(buttonElement);

    expect(handleInputChangeMock).toBeCalled();
    expect(handleInputChangeMock).toBeCalledWith('test');
  });
});
