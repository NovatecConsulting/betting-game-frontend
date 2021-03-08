import React from "react";
import { NavLink } from "react-router-dom";

export interface Props {
    buttonText: string;
    buttonURL: string;
}

const NavItem: React.FC<Props> = ({ buttonText, buttonURL }) => (
    <NavLink
        to={buttonURL}
        className="mr-4 lg:inline-block lg:mt-0 py-2 border-b-2 border-transparent inline-block text-gray-400 hover:text-white"
        activeClassName="border-gray-400 text-indigo-100"
    >
        <span>{buttonText}</span>
    </NavLink>
);

export default NavItem;
