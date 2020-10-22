import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';

describe('Login compontent for users', () => {
  test('the login should be visible to the user as soon as the component mounted', () => {
    render(<Login />);

    const login = screen.getByTestId('Login');

    expect(login).toBeInTheDocument();
  });
});
