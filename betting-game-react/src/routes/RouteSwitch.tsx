import React from "react";
import { Switch, Route, RouteProps, useHistory } from "react-router-dom";
import { useRoutes } from ".";
import { AuthorizationManager } from "../auth";

let register = true;

const RouteSwitch = () => {
    const routes = useRoutes();
    const history = useHistory();
    // listen for history changes and try to refresh the session if token is about to expire in 5 sec or already expired
    if (register) {
        history.listen(() => {
            AuthorizationManager.updateToken();
            register = false;
        });
    }
    return (
        <Switch>
            {routes.map((route, key) => {
                const r: RouteProps = {
                    children: route.children,
                    component: route.component,
                    exact: route.exact,
                    location: route.location,
                    path: route.path,
                    render: route.render,
                    sensitive: route.sensitive,
                    strict: route.strict,
                };
                return <Route {...r} key={key} />;
            })}
        </Switch>
    );
};

export default RouteSwitch;
