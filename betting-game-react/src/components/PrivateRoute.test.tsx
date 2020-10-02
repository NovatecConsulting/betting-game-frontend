import React from "react";
import {MemoryRouter, Route} from "react-router-dom";
import {render} from "react-dom";
import {PrivateRoute} from "./PrivateRoute";
import {unmountComponentAtNode} from "react-dom";

let container: HTMLDivElement;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
});

test("displays children when user is authenticated", () => {
    const isUserAuthenticated = true;
    render(
        <MemoryRouter initialEntries={["/test"]}>
            <PrivateRoute path={"/test"} isAuthenticated={isUserAuthenticated}>
                <p>Private Content</p>
            </PrivateRoute>
            <Route exact path={"/login"}>
                <p>Login</p>
            </Route>
        </MemoryRouter>, container);

    expect(container).toContainHTML("<p>Private Content</p>");
    expect(container).not.toContainHTML("<p>Login</p>");
});

test("redirects to the login when user is not authenticated", () => {
    const isUserAuthenticated = false;
    const container = document.createElement("div");
    render(
        <MemoryRouter initialEntries={["/test"]}>
            <PrivateRoute path={"/test"} isAuthenticated={isUserAuthenticated}>
                <p>Private Content</p>
            </PrivateRoute>
            <Route exact path={"/login"}>
                <p>Login</p>
            </Route>
        </MemoryRouter>, container);

    expect(container).toContainHTML("<p>Login</p>");
    expect(container).not.toContainHTML("<p>Private Content</p>");
});