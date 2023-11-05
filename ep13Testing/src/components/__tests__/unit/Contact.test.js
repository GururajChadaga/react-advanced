import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../../Contact';

beforeAll(() => {
  console.log('runs before any test is run');
});

beforeEach(() => {
  console.log('runs before each test is run');
});

afterEach(() => {
  console.log('runs after each test is run');
});

afterAll(() => {
  console.log('runs after every test is run');
});

describe('Contact Tests', () => {
  it('Should render the contact form on Contact render', () => {
    // render
    render(<Contact />);

    //query
    const form = screen.getByTestId('contact-us-form');

    // Assertion
    expect(form).toBeInTheDocument();
  });

  it('Should render two inputs on Contact render', () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole('textbox');
    expect(inputBoxes.length).toBe(2);
  });

  it('Should render submit button on Contact render', () => {
    render(<Contact />);
    const submitButtom = screen.getByText('Submit');
    expect(submitButtom).toBeInTheDocument();
  });
});
