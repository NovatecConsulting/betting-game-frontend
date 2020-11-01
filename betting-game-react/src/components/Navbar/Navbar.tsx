import React from "react";
import { NavbarButton } from "./NavbarButton";
import { NavbarLoginButton } from "./NavbarLoginButton";
import { NavbarLogo } from "./NavbarLogo";
import { NavItemRoute, useRoutes } from "../../routes";
import { Has } from "../../auth/Has";

// TODO: NavbarLogo as link to HOME ("/")
// TODO: Remove test id things
const Navbar: React.FC = () => {
    const routes = useRoutes();
    const navItems = routes.filter(
        (route) => route.isNavItem
    ) as NavItemRoute[];
    return (
        <span>
            <nav
                className="flex items-center justify-between flex-wrap border-b-2 border-blue-300 bg-blue-900 p-2"
                data-testid="Navbar"
            >
                <NavbarLogo />
                <div className="block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow inline">
                        {navItems.map((route) => (
                            <Has
                                key={route.path}
                                permissions={route.permissions}
                                Yes={() => (
                                    <NavbarButton
                                        buttonText={route.title}
                                        buttonURL={route.path}
                                        buttonTestIdPrefix={"TODO: REMOVE"}
                                    />
                                )}
                            />
                        ))}
                    </div>
                </div>
                <NavbarLoginButton />
            </nav>
        </span>
    );
};

export default Navbar;
