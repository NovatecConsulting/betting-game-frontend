import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthorizationManager } from ".";
import { ROUTE_INDEX } from "../routes";

const LoginCallback: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    React.useEffect(() => {
        const doLoginAndRedirect = async () => {
            try {
                await AuthorizationManager.loginCallback();
                setLoggedIn(true);
            } catch (e) {
                setError(e.message);
            }
        };
        doLoginAndRedirect();
    }, []);
    // TODO: use Loading Component
    return error ? (
        <div>{error}</div>
    ) : loggedIn ? (
        <Redirect to={ROUTE_INDEX} />
    ) : (
        <div>Loading...</div>
    );
};

export default LoginCallback;
