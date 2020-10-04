import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';
import { NavbarButtonProps, navbarButtons } from './NavbarButtonProps';

describe('<Navbar />', () => {
  test('it should render a navbar with a logo, a login button and all navigation buttons', () => {
    const { getByTestId } = render(<Navbar></Navbar>);

    const navbar = getByTestId('Navbar');
    const navbarLogo = getByTestId('NavbarLogo');
    let navbarButtonsArray: any[] = [];
    navbarButtons.map((navbarButton: NavbarButtonProps, index: number) => {
      navbarButtonsArray.push(
        getByTestId(`${navbarButton.buttonTestIdPrefix}-NavButton`)
      );
    });

    expect(navbar).toBeInTheDocument();
    expect(navbarLogo).toBeInTheDocument();
    navbarButtonsArray.forEach((navbarButton) => {
      expect(navbarButton).toBeInTheDocument();
    });
  });
});
