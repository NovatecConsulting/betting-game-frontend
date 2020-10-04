import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ABOUTUS, MATCHES, STANDINGS } from '../../config/routes';
import AppRouter from '../AppRouter/AppRouter';
import NavbarButton, { NavbarButtonProps } from '../NavbarButton/NavbarButton';
import NavbarLoginButton from '../NavbarLoginButton/NavbarLoginButton';
import NavbarLogo from '../NavbarLogo/NavbarLogo';

const navbarButtonProps: NavbarButtonProps[] = [
  {
    buttonURL: MATCHES.path,
    buttonText: 'Matches',
    buttonTestID: 'Matches-NavButton',
  },
  {
    buttonURL: STANDINGS.path,
    buttonText: 'Standings',
    buttonTestID: 'Standings-NavButton',
  },
  {
    buttonURL: ABOUTUS.path,
    buttonText: 'About us',
    buttonTestID: 'AboutUs-NavButton',
  },
];

const Navbar: React.FC = () => {
  return (
    <Router>
      <nav
        className='flex items-center justify-between flex-wrap border-b-2 border-blue-300 bg-blue-900 p-2'
        data-testid='Navbar'
      >
        <NavbarLogo />
        <div className='block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='text-sm lg:flex-grow inline'>
            {navbarButtonProps.map(
              (navbarButtonProp: NavbarButtonProps, index: number) => {
                return (
                  <NavbarButton
                    key={index}
                    buttonText={navbarButtonProp.buttonText}
                    buttonURL={navbarButtonProp.buttonURL}
                    buttonTestID={navbarButtonProp.buttonTestID}
                  ></NavbarButton>
                );
              }
            )}
          </div>
        </div>
        <NavbarLoginButton />
      </nav>
      <AppRouter />
    </Router>
  );
};

export default Navbar;
