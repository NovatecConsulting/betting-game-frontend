import React from "react";
import { Redirect } from "react-router-dom";
import { AuthorizationManager } from ".";
import { Loading } from "../components/Loading";
import { ROUTE_INDEX } from "../routes";

const LoginCallback: React.FC = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [error, setError] = React.useState<string | undefined>(undefined);

    React.useEffect(() => {
        const doLoginAndRedirect = async () => {
            try {
                await AuthorizationManager.loginCallback();
                setLoggedIn(true);
            } catch (error) {
                setError(error.message);
            }
        };
        doLoginAndRedirect();
    }, []);

    return error ? (
        <div>{error}</div>
    ) : loggedIn ? (
        <Redirect to={ROUTE_INDEX} />
    ) : (
        <Loading />
    );
};

export default LoginCallback;
