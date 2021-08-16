import ToggleSwitch from './TogleSwitch.component';

const { render, screen } = require('@testing-library/react');

describe('ToggleSwitch', () => {
  let container;

  beforeEach(() => {
    container = render(<ToggleSwitch />).container;
  });
  test('Should renders a ToggleStwitch component', () => {
    expect(container).toMatchSnapshot();
  });

  test('Should contains a label with a switch role', () => {
    const labelElement = screen.getByRole('switch');
    expect(labelElement).toBeInTheDocument();
  });
  test('Should contains an input type checkbox', () => {
    const inputElement = screen.getByRole('button');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'checkbox');
  });
  test('Should contains a span tag', () => {
    const spanElement = container.querySelector('span');
    expect(spanElement).toBeInTheDocument();
  });
});
