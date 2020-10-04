import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

describe('<Navbar />', () => {
  test('it should mount', () => {
    render(<Navbar />);
    const navbar = screen.getByTestId('Navbar');
    expect(navbar).toBeInTheDocument();
  });

  test('it should render all buttons', () => {
    render(<Navbar />);

    const matchesButton = screen.getByTestId('Matches-NavButton');
    expect(matchesButton).toBeInTheDocument();

    const standingsButton = screen.getByTestId('Standings-NavButton');
    expect(standingsButton).toBeInTheDocument();

    const aboutUsButton = screen.getByTestId('AboutUs-NavButton');
    expect(aboutUsButton).toBeInTheDocument();

    const loginButton = screen.getByTestId('Login-NavButton');
    expect(loginButton).toBeInTheDocument();
  });

  test('full app rendering/navigating', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    // verify page content for expected default route
    expect(container.innerHTML).toMatch('Matches Component');

    // check that the content changed to the standings page
    const standingsButton = screen.getByTestId('Standings-NavButton');
    fireEvent.click(standingsButton);
    expect(container.innerHTML).toMatch('Standings Component');

    // check that the content changed to the about us page
    const aboutUsButton = screen.getByTestId('AboutUs-NavButton');
    fireEvent.click(aboutUsButton);
    expect(container.innerHTML).toMatch('About us Component');

    // check that the content changed to the matches page
    const matchesButton = screen.getByTestId('Matches-NavButton');
    fireEvent.click(matchesButton);
    expect(container.innerHTML).toMatch('Matches Component');

    // check that the content changed to the login page
    const loginButton = screen.getByTestId('Login-NavButton');
    fireEvent.click(loginButton);
    expect(container.innerHTML).toMatch('Login Component');
  });
});
