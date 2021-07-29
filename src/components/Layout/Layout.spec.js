import Layout from './Layout.component';

const { render, screen } = require('@testing-library/react');

describe('Layout', () => {
  test('Should renders Layout component', () => {
    const { container } = render(<Layout />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('Should contains a "main" tag with "container" class', () => {
    const { container } = render(<Layout />);
    const mainElement = container.querySelector('main');
    expect(mainElement).toBeInTheDocument();
    expect(mainElement.classList.contains('container')).toBe(true);
  });

  test('Should renders a children element', () => {
    const { container } = render(
      <Layout>
        <p>Hello world!</p>
      </Layout>
    );
    const children = screen.getByText(/Hello world!/i);
    expect(children).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
