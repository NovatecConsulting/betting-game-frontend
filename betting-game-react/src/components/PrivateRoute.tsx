import {Redirect, Route} from "react-router-dom";
import React from "react";

interface PrivateRouteProps {
    path : string,
    auth : any,
    children : React.ReactNode
}

export const PrivateRoute = ({path, auth, children} : PrivateRouteProps) => (
        <Route
            path={path}
            render={({ location }) =>
                auth.isAuthenticated ? (
                    children
                ) : <RedirectToLogin fromLocation={location}/>
            }
        />
    );

interface RedirectToLoginProps {
    fromLocation : any
}

const RedirectToLogin = ({fromLocation} : RedirectToLoginProps) => (
    <Redirect
        to={{
            pathname: "/login",
            state: { from: fromLocation }
        }}
    />
)