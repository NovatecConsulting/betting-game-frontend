import React from "react";
import { shallow } from "enzyme";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { ABOUTUS, LOGIN, MATCHES, STANDINGS } from "../../routes";
import { Navbar } from ".";
import { NavbarLogo } from "../NavbarLogo";
import { NavbarButton } from "../NavbarButton";
import { NavbarLoginButton } from "../NavbarLoginButton";

describe(Navbar.name + " component", () => {
    it("should render and match snapshot with correct navbar items.", () => {
        const wrapper = shallow(<Navbar />);

        expect(wrapper.find(NavbarLogo)).toExist();
        expect(wrapper.find(NavbarButton)).toHaveLength(3);
        expect(wrapper.find(NavbarButton).at(0).prop("buttonText")).toEqual(
            "Matches"
        );
        expect(wrapper.find(NavbarButton).at(0).prop("buttonURL")).toEqual(
            "/matches"
        );
        expect(wrapper.find(NavbarButton).at(1).prop("buttonText")).toEqual(
            "Standings"
        );
        expect(wrapper.find(NavbarButton).at(1).prop("buttonURL")).toEqual(
            "/standings"
        );
        expect(wrapper.find(NavbarButton).at(2).prop("buttonText")).toEqual(
            "About us"
        );
        expect(wrapper.find(NavbarButton).at(2).prop("buttonURL")).toEqual(
            "/aboutus"
        );
        expect(wrapper.find(NavbarLoginButton)).toExist();
        expect(wrapper).toMatchSnapshot();
    });

    test('it should route when the "Matches" button was clicked', () => {
        const { getByTestId } = render(<Navbar />, { wrapper: MemoryRouter });
        const matchesButton = getByTestId(`Matches-NavButton`);

        fireEvent.click(matchesButton);

        expect(getByTestId("Matches")).toBeInTheDocument();
    });

    test('it should route when the "Standings" button was clicked', () => {
        const { getByTestId } = render(<Navbar />, { wrapper: MemoryRouter });
        const matchesButton = getByTestId(`Standings-NavButton`);

        fireEvent.click(matchesButton);

        expect(getByTestId("Standings")).toBeInTheDocument();
    });

    test('it should route when the "About us" button was clicked', () => {
        const { getByTestId } = render(<Navbar />, { wrapper: MemoryRouter });
        const matchesButton = getByTestId(`AboutUs-NavButton`);

        fireEvent.click(matchesButton);

        expect(getByTestId("AboutUs")).toBeInTheDocument();
    });

    test('it should route when the "Login" button was clicked', () => {
        const { getByTestId } = render(<Navbar />, { wrapper: MemoryRouter });
        const matchesButton = getByTestId(`Login-NavButton`);

        fireEvent.click(matchesButton);

        expect(getByTestId("Login")).toBeInTheDocument();
    });

    test("it should redirect to matches if the path does not exist", () => {
        const history = createMemoryHistory();
        history.push("/bad/route");
        render(
            <Router history={history}>
                <Navbar />
            </Router>
        );

        expect(history.location.pathname).toBe("/matches");
    });

    test("it should route to \\matches and render the matches component", () => {
        const history = createMemoryHistory();
        history.push(MATCHES.path);
        render(
            <Router history={history}>
                <Navbar />
            </Router>
        );

        expect(history.location.pathname).toBe("/matches");
    });

    test("it should route to \\standings and render the standings component", () => {
        const history = createMemoryHistory();
        history.push(STANDINGS.path);
        render(
            <Router history={history}>
                <Navbar />
            </Router>
        );

        expect(history.location.pathname).toBe("/standings");
    });

    test("it should route to \\aboutus and render the about us component", () => {
        const history = createMemoryHistory();
        history.push(ABOUTUS.path);
        render(
            <Router history={history}>
                <Navbar />
            </Router>
        );

        expect(history.location.pathname).toBe("/aboutus");
    });

    test("it should route to \\login and render the login component", () => {
        const history = createMemoryHistory();
        history.push(LOGIN.path);
        render(
            <Router history={history}>
                <Navbar />
            </Router>
        );

        expect(history.location.pathname).toBe("/login");
    });
});
