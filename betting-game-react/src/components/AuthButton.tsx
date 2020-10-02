import React from "react";
import { History } from 'history';
import {IAuthenticationSystem} from "../AuthenticationSystem";

interface AuthButtonProps {
    history: History,
    auth: IAuthenticationSystem
}

export const AuthButton = ({history, auth}: AuthButtonProps) => {
    let signout = () => {
        auth.signout(() => history.push("/"));
    };

    return auth.isAuthenticated
        ? (<p>
            Welcome {auth.userName}!
            <button onClick={signout}>
                Sign out
            </button>
        </p>)
        : (<p>You are not logged in.</p>);
}
