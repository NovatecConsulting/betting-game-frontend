import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders complete NOVATIPP application", () => {
    const { getByTestId } = render(<App />);

    const navbar = getByTestId("Navbar");

    expect(navbar).toBeInTheDocument();
});
