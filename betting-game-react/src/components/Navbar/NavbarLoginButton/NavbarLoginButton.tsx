import React from "react";
import { useLocation } from "react-router-dom";
import { AuthorizationManager } from "../../../auth";
import { ROUTE_LOGIN_CALLBACK } from "../../../routes";

// TODO: build button component
const NavbarLoginButton: React.FC = () => {
    const location = useLocation();
    const user = AuthorizationManager.getUser();
    return (
        <div className="float-right">
            {user?.profile ? (
                <>
                    {user.profile.picture && (
                        <img
                            src={user.profile.picture}
                            alt={user.profile.email}
                            width={25}
                            height={25}
                        />
                    )}
                    <div className="text-white">{user.profile.email}</div>
                    <div
                        onClick={() => AuthorizationManager.logout()}
                        className="cursor-pointer inline-block text-sm px-5 py-2 lg:mt-0 mr-10 leading-none border rounded-full text-white border-white hover:text-blue-400 hover:bg-white active:bg-blue-700"
                    >
                        Logout
                    </div>
                </>
            ) : location.pathname === ROUTE_LOGIN_CALLBACK ? null : (
                <div
                    onClick={() => AuthorizationManager.login()}
                    className="cursor-pointer inline-block text-sm px-5 py-2 lg:mt-0 mr-10 leading-none border rounded-full text-white border-white hover:text-blue-400 hover:bg-white active:bg-blue-700"
                    data-testid="Login-NavButton"
                >
                    <span data-testid="Login-NavButtonText">Login</span>
                </div>
            )}
        </div>
    );
};

export default NavbarLoginButton;
