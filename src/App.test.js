import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const Heading = screen.getByText(/Task Force Ellyson/i);
  expect(Heading).toBeInTheDocument();
});

test('renders navbar', () => {
  render(<App />);
  const Navbar = screen.getByRole('navigation');
  expect(Navbar).toBeInTheDocument();
});

test('renders footer', () => {
  render(<App />);
  const Footer = screen.getByRole('contentinfo');
  expect(Footer).toBeInTheDocument();
});