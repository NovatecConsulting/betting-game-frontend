import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { render } from '@testing-library/react';

import NavbarLoginButton from './NavbarLoginButton';

describe('Login button for the navigation bar', () => {
  test('it should render a non-empty button with text', () => {
    const { getByTestId } = render(
      <Router>
        <NavbarLoginButton />
      </Router>
    );

    const navbarLoginButton = getByTestId('Login-NavButton');
    const navbarLoginButtonText = getByTestId('Login-NavButtonText');

    expect(navbarLoginButton).toBeInTheDocument();
    expect(navbarLoginButtonText).not.toBeEmpty();
  });
});
