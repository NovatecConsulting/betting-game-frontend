import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavbarLoginButton from './NavbarLoginButton';

describe('<NavbarLoginButton />', () => {
  test('it should mount', () => {
    render(<NavbarLoginButton />);
    
    const navbarLoginButton = screen.getByTestId('NavbarLoginButton');

    expect(navbarLoginButton).toBeInTheDocument();
  });
});