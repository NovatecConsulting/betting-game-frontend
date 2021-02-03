import React from "react";
import { Redirect, Route, RouteProps, Switch } from "react-router-dom";

import routes, { ABOUTUS, MATCHES, STANDINGS } from "../../config/routes";
import NavbarButton, { NavbarButtonProps } from "../NavbarButton/NavbarButton";
import NavbarLoginButton from "../NavbarLoginButton/NavbarLoginButton";
import NavbarLogo from "../NavbarLogo/NavbarLogo";

export const navbarButtons: NavbarButtonProps[] = [
    {
        buttonURL: MATCHES.path,
        buttonText: "Matches",
        buttonTestIdPrefix: "Matches",
    },
    {
        buttonURL: STANDINGS.path,
        buttonText: "Standings",
        buttonTestIdPrefix: "Standings",
    },
    {
        buttonURL: ABOUTUS.path,
        buttonText: "About us",
        buttonTestIdPrefix: "AboutUs",
    },
];

const Navbar: React.FC = () => {
    return (
        <span>
            <nav
                className="flex items-center justify-between flex-wrap border-b-2 border-blue-300 bg-blue-900 p-2"
                data-testid="Navbar"
            >
                <NavbarLogo />
                <div className="block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow inline">
                        {navbarButtons.map(
                            (
                                navbarButton: NavbarButtonProps,
                                index: number
                            ) => (
                                <NavbarButton
                                    key={index}
                                    buttonText={navbarButton.buttonText}
                                    buttonURL={navbarButton.buttonURL}
                                    buttonTestIdPrefix={
                                        navbarButton.buttonTestIdPrefix
                                    }
                                ></NavbarButton>
                            )
                        )}
                    </div>
                </div>
                <NavbarLoginButton />
            </nav>
            <Switch>
                {routes.map((route: RouteProps, index: number) => (
                    <Route
                        data-testid="Route"
                        key={index}
                        exact
                        path={route.path}
                        component={route.component}
                    />
                ))}
                <Redirect to={MATCHES.path} />
            </Switch>
        </span>
    );
};

export default Navbar;
