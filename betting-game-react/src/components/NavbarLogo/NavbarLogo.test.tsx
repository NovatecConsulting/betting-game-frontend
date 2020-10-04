import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavbarLogo from './NavbarLogo';

describe('<NavbarLogo />', () => {
  test('it should mount', () => {
    render(<NavbarLogo />);
    
    const navbarLogo = screen.getByTestId('NavbarLogo');

    expect(navbarLogo).toBeInTheDocument();
  });
});