import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { routes, RoutesProvider, RouteSwitch } from "./routes";
import { AuthContext } from "./auth";

const App: React.FC = () => (
    <AuthContext>
        <RoutesProvider value={routes}>
            <Router basename={process.env.PUBLIC_URL}>
                <RouteSwitch />
            </Router>
        </RoutesProvider>
    </AuthContext>
);

export default App;
