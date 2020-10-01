import React from "react";
import {History, Location} from "history"
import {IAuthenticationSystem} from "../AuthenticationSystem";

interface LoginPageProps {
    history: History,
    location: Location,
    auth: IAuthenticationSystem
}

interface IHasStateWithPathName {
    state: { from: {pathname: string }}
}

export const LoginPage = ({history, location, auth}: LoginPageProps) => {
    let fromPathName = (location as IHasStateWithPathName).state.from.pathname || "/";
    let login = () => {
        auth.authenticate(() => history.replace(fromPathName));
    };

    return (
        <div>
            <p>You must log in to view the page at {fromPathName}</p>
            <button onClick={login}>Log in</button>
        </div>
    );
}