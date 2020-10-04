import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from 'react-router-dom';

import routes, { MATCHES } from '../../config/routes';
import NavbarButton from '../NavbarButton/NavbarButton';
import NavbarLoginButton from '../NavbarLoginButton/NavbarLoginButton';
import NavbarLogo from '../NavbarLogo/NavbarLogo';
import { NavbarButtonProps, navbarButtons } from './NavbarButtonProps';

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
            {navbarButtons.map(
              (navbarButton: NavbarButtonProps, index: number) => {
                return (
                  <NavbarButton
                    key={index}
                    buttonText={navbarButton.buttonText}
                    buttonURL={navbarButton.buttonURL}
                    buttonTestIdPrefix={navbarButton.buttonTestIdPrefix}
                  ></NavbarButton>
                );
              }
            )}
          </div>
        </div>
        <NavbarLoginButton />
      </nav>
      <Switch>
        {routes.map((route: RouteProps, index: number) => (
          <Route
            data-testid='Route'
            key={index}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
        <Redirect to={MATCHES.path} />
      </Switch>
    </Router>
  );
};

export default Navbar;
