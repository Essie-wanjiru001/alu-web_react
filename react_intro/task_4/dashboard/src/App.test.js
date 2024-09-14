import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { getFullYear, getFooterCopy } from './utils';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders a div with the class App-header', () => {
    render(<App />);
    const headerDiv = screen.getByRole('banner');
    expect(headerDiv).toBeInTheDocument();

    const logo = screen.getByAltText('Holberton Logo: Red Seahorse');
    const heading = screen.getByText('School dashboard');
    expect(logo).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  test('renders a div with the class App-body containing email and password inputs', () => {
    render(<App />);
    const bodyDiv = screen.getByRole('main');
    expect(bodyDiv).toBeInTheDocument();

    const emailInput = screen.getByLabelText('Email:');
    const passwordInput = screen.getByLabelText('Password:');
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  test('renders a button with the text OK', () => {
    render(<App />);
    const button = screen.getByText('OK');
    expect(button).toBeInTheDocument();
  });

  test('renders a div with the class App-footer', () => {
    render(<App />);
    const footerDiv = screen.getByRole('contentinfo');
    expect(footerDiv).toBeInTheDocument();

    const currentYear = getFullYear();
    const footerText = screen.getByText(`Copyright ${currentYear} - ${getFooterCopy(true)}`);
    expect(footerText).toBeInTheDocument();
  });
});
