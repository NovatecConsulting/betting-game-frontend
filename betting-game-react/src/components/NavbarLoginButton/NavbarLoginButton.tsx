import React from 'react';
import { NavLink } from 'react-router-dom';

import { LOGIN } from '../../config/routes';

const NavbarLoginButton: React.FC = () => (
  <div className='float-right'>
    <NavLink
      to={LOGIN.path}
      className='inline-block text-sm px-5 py-2 lg:mt-0 mr-10 leading-none border rounded-full text-white border-white hover:text-blue-400 hover:bg-white active:bg-blue-700'
      data-testid='Login-NavButton'
    >
      <span data-testid='Login-NavButtonText'>Login</span>
    </NavLink>
  </div>
);

export default NavbarLoginButton;
