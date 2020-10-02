import {Redirect, Route} from "react-router-dom";
import React from "react";

interface PrivateRouteProps {
    path: string,
    isAuthenticated: boolean,
    children: React.ReactNode
}

export const PrivateRoute = ({path, isAuthenticated, children}: PrivateRouteProps) => (
    <Route
        path={path}
        render={({location}) =>
            isAuthenticated
                ? (children)
                : <RedirectToLogin fromLocation={location}/>
        }
    />);

interface RedirectToLoginProps {
    fromLocation: any
}

const RedirectToLogin = ({fromLocation}: RedirectToLoginProps) =>
    <Redirect
        to={{
            pathname: "/login",
            state: {from: fromLocation}
        }}
    />
