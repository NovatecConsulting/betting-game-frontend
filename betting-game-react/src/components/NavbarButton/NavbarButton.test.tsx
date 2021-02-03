import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { render } from "@testing-library/react";
import NavbarButton, { NavbarButtonProps } from "./NavbarButton";

describe("Navigation bar button for users", () => {
    const navbarButtonMock: NavbarButtonProps = {
        buttonURL: "/testButtonURL",
        buttonText: "TestButtonText",
        buttonTestIdPrefix: "TestButton",
    };

    test("it should render a non-empty navbar button with text", () => {
        const { getByTestId } = render(
            <Router>
                <NavbarButton
                    buttonText={navbarButtonMock.buttonText}
                    buttonURL={navbarButtonMock.buttonURL}
                    buttonTestIdPrefix={navbarButtonMock.buttonTestIdPrefix}
                />
            </Router>
        );

        const navbarButton = getByTestId(
            `${navbarButtonMock.buttonTestIdPrefix}-NavButton`
        );
        const navbarButtonText = getByTestId(
            `${navbarButtonMock.buttonTestIdPrefix}-NavButtonText`
        );

        expect(navbarButton).toBeInTheDocument();
        expect(navbarButtonText).not.toBeEmpty();
    });
});
