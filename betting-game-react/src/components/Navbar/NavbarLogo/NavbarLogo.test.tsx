import React from "react";
import { shallow } from "enzyme";
import { NavbarLogo } from ".";

describe(NavbarLogo.name + " component", () => {
    it("should render and match snapshot.", () => {
        const wrapper = shallow(<NavbarLogo />);

        expect(wrapper.find("span")).toIncludeText("NOVATIPP");
        expect(wrapper).toMatchSnapshot();
    });
});
