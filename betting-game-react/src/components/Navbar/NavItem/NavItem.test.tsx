import React from "react";
import { shallow } from "enzyme";
import { NavLink } from "react-router-dom";
import { NavItem } from ".";

describe(NavItem.name + " component", () => {
    it("should render and match snapshot with correct content.", () => {
        const wrapper = shallow(
            <NavItem
                buttonURL={"/testButtonURL"}
                buttonText={"TestButtonText"}
            />
        );

        expect(wrapper.find(NavLink).prop("to")).toEqual("/testButtonURL");
        expect(wrapper.find(NavLink)).toIncludeText("TestButtonText");
        expect(wrapper).toMatchSnapshot();
    });
});
