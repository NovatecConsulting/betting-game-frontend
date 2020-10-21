import '@testing-library/jest-dom/extend-expect';

import { createMemoryHistory } from 'history';
import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';

import { fireEvent, render } from '@testing-library/react';

import { ABOUTUS, LOGIN, MATCHES, STANDINGS } from '../../config/routes';
import Navbar from './Navbar';

describe('Navigation bar for users', () => {
  test('It should render the logo in the navbar', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const navbarLogo = getByTestId('NavbarLogo');

    expect(navbarLogo).toBeInTheDocument();
  });

  test('It should render the login button in the navbar', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const loginButton = getByTestId('Login-NavButton');

    expect(loginButton).toBeInTheDocument();
  });

  test('it should render matches button', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const matchesButton = getByTestId('Matches-NavButton');

    expect(matchesButton).toBeInTheDocument();
  });

  test('it should render standings button', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const standingsButton = getByTestId('Standings-NavButton');

    expect(standingsButton).toBeInTheDocument();
  });

  test('it should render about us button', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const aboutUsButton = getByTestId('AboutUs-NavButton');

    expect(aboutUsButton).toBeInTheDocument();
  });

  test('it should route when the "Matches" button was clicked', () => {
    const { getByTestId } = render(<Navbar />, { wrapper: MemoryRouter });

    const matchesButton = getByTestId(`Matches-NavButton`);
    fireEvent.click(matchesButton);
    const loadedComponent = getByTestId('Matches');

    expect(loadedComponent).toBeInTheDocument();
  });

  test('it should route when the "Standings" button was clicked', () => {
    const { getByTestId } = render(<Navbar />, { wrapper: MemoryRouter });

    const matchesButton = getByTestId(`Standings-NavButton`);
    fireEvent.click(matchesButton);
    const loadedComponent = getByTestId('Standings');

    expect(loadedComponent).toBeInTheDocument();
  });

  test('it should route when the "About us" button was clicked', () => {
    const { getByTestId } = render(<Navbar />, { wrapper: MemoryRouter });

    const matchesButton = getByTestId(`AboutUs-NavButton`);
    fireEvent.click(matchesButton);
    const loadedComponent = getByTestId('AboutUs');

    expect(loadedComponent).toBeInTheDocument();
  });

  test('it should route when the "Login" button was clicked', () => {
    const { getByTestId } = render(<Navbar />, { wrapper: MemoryRouter });

    const matchesButton = getByTestId(`Login-NavButton`);
    fireEvent.click(matchesButton);
    const loadedComponent = getByTestId('Login');

    expect(loadedComponent).toBeInTheDocument();
  });

  test('it should redirect to matches if the path does not exist', () => {
    const history = createMemoryHistory();
    history.push('/bad/route');
    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    expect(history.location.pathname).toBe('/matches');
  });

  test('it should route to \\matches and render the matches component', () => {
    const history = createMemoryHistory();
    history.push(MATCHES.path);
    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    expect(history.location.pathname).toBe('/matches');
  });

  test('it should route to \\standings and render the standings component', () => {
    const history = createMemoryHistory();
    history.push(STANDINGS.path);
    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    expect(history.location.pathname).toBe('/standings');
  });

  test('it should route to \\aboutus and render the about us component', () => {
    const history = createMemoryHistory();
    history.push(ABOUTUS.path);
    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    expect(history.location.pathname).toBe('/aboutus');
  });

  test('it should route to \\login and render the login component', () => {
    const history = createMemoryHistory();
    history.push(LOGIN.path);
    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    expect(history.location.pathname).toBe('/login');
  });
});
