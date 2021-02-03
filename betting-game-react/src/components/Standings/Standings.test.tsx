import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Standings from "./Standings";

describe("Component that displays the standings", () => {
    test("it should mount", () => {
        render(<Standings />);

        const standings = screen.getByTestId("Standings");

        expect(standings).toBeInTheDocument();
    });
});
