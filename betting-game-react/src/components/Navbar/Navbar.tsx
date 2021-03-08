import React from "react";
import { NavItem } from "./NavItem";
import { NavbarLogo } from "./NavbarLogo";
import { NavItemRoute, ROUTE_INDEX, useRoutes } from "../../routes";
import { Has } from "../../auth/Has";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { UserProfile } from "./UserProfile";
import { AuthorizationManager } from "../../auth";
import { User } from "oidc-client";

const Navbar: React.FC = () => {
    const routes = useRoutes();
    const [user, setUser] = React.useState<User | null>(null);
    const [error, setError] = React.useState<string | undefined>(undefined);

    const fetchUser = () => {
        AuthorizationManager.getUser()
            .then((loadedUser) => {
                setUser(loadedUser);
            })
            .catch((err) => {
                setError(err.message);
                console.log(err);
            });
    };

    React.useEffect(() => {
        fetchUser();
    }, []);

    const navItems = routes.filter(
        (route) => route.isNavItem
    ) as NavItemRoute[];

    return (
        <span>
            <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-2">
                <Link to={ROUTE_INDEX}>
                    <NavbarLogo />
                </Link>
                <div className="block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow inline">
                        {navItems.map((route) => (
                            <Has
                                key={route.path}
                                permissions={route.permissions}
                                Yes={() => (
                                    <NavItem
                                        buttonText={route.title}
                                        buttonURL={route.path}
                                    />
                                )}
                            />
                        ))}
                    </div>
                </div>
                <div className="float-right">
                    {error ? (
                        <div>Error: {error}</div>
                    ) : user?.profile ? (
                        <div className="flex items-center justify-between flex-wrap">
                            <UserProfile
                                profile={user.profile}
                                className="hidden md:flex"
                            />
                            <Button
                                label={"Logout"}
                                onClick={() => AuthorizationManager.logout()}
                                className="lg:mr-5 md:mr-4 ml-5"
                            />
                        </div>
                    ) : (
                        <Button
                            label={"Login"}
                            onClick={() => AuthorizationManager.login()}
                            className="lg:mr-5 md:mr-4 ml-5"
                        />
                    )}
                </div>
            </nav>
        </span>
    );
};

export default Navbar;
