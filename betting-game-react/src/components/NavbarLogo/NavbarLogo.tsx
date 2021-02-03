import React from "react";

const NavbarLogo: React.FC = () => (
    <div
        data-testid="NavbarLogoContainer"
        className="text-white mr-6 ml-10 inline"
    >
        <span
            data-testid="NavbarLogo"
            className="font-semibold text-xl tracking-tight"
        >
            NOVATIPP
        </span>
    </div>
);

export default NavbarLogo;
