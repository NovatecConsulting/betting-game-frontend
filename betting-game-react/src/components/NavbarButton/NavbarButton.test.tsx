import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavbarButton from './NavbarButton';

describe('<NavbarButton />', () => {
  test('it should mount', () => {
    render(<NavbarButton buttonText='' buttonURL='' buttonTestID='' />);

    const navbarButton = screen.getByTestId('NavbarButton');

    expect(navbarButton).toBeInTheDocument();
  });
});
