import "@testing-library/jest-dom/extend-expect";

import React from "react";

import { render } from "@testing-library/react";

import NavbarLogo from "./NavbarLogo";

describe("Logo for the navigation bar", () => {
    test("it should render a non-empty container with the logo", () => {
        const { getByTestId } = render(<NavbarLogo />);
        const navbarLogoContainer = getByTestId("NavbarLogoContainer");
        const navbarLogo = getByTestId("NavbarLogoContainer");

        expect(navbarLogoContainer).toBeInTheDocument();
        expect(navbarLogo).toBeInTheDocument();
        expect(navbarLogo).not.toBeEmptyDOMElement();
    });
});
