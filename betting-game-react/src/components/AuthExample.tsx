import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation
} from "react-router-dom";
import {PrivateRoute} from "./PrivateRoute";
import {AuthButton} from "./AuthButton";
import {LoginPage} from "./LoginPage";
import {FakeAuthenticationSystem} from "../AuthenticationSystem";

export default function AuthExample() {
    return <Router> <Routing/> </Router>;
};

function Routing() {
    const history = useHistory();
    const location = useLocation();

    const [auth] = useState(new FakeAuthenticationSystem());

    return (
        <div>
            <AuthButton auth={auth} history={history}/>
            <ul>
                <li>
                    <Link to="/public">Public Page</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/public">
                    <PublicPage/>
                </Route>
                <Route path="/login">
                    <LoginPage history={history} location={location} auth={auth}/>
                </Route>
                <PrivateRoute path="/protected" isAuthenticated={auth.isAuthenticated}>
                    <ProtectedPage/>
                </PrivateRoute>
            </Switch>
        </div>
    )
}


const PublicPage = () => <h3>Public</h3>;

const ProtectedPage = () => <h3>Protected</h3>;


/*
export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return  <div className='min-h-screen min-w-screen bg-gray-900 text-center text-6xl text-gray-200 grid items-center tracking-wider'>
        AWESOME BETTING APP
    </div>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
*/