import React from "react";
import { shallow } from "enzyme";
import { NavLink } from "react-router-dom";
import { NavbarLoginButton } from ".";

describe(NavbarLoginButton.name + " component", () => {
    it("should render and match snapshot with correct content.", () => {
        const wrapper = shallow(<NavbarLoginButton />);

        expect(wrapper.find(NavLink).prop("to")).toEqual("/login");
        expect(wrapper.find(NavLink)).toIncludeText("Login");
        expect(wrapper).toMatchSnapshot();
    });
});
