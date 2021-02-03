import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AboutUs from "./AboutUs";

describe("Component that shows information about our company", () => {
    test("the about us component should be visible to the user as soon as the component mounted", () => {
        render(<AboutUs />);

        const aboutUs = screen.getByTestId("AboutUs");

        expect(aboutUs).toBeInTheDocument();
    });
});
