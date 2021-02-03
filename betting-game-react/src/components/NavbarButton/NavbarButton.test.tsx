import React from "react";
import { shallow } from "enzyme";
import { NavLink } from "react-router-dom";
import { NavbarButton } from ".";

describe(NavbarButton.name + " component", () => {
    it("should render and match snapshot with correct content.", () => {
        const wrapper = shallow(
            <NavbarButton
                buttonURL={"/testButtonURL"}
                buttonText={"TestButtonText"}
                buttonTestIdPrefix={"TestButton"}
            />
        );

        expect(wrapper.find(NavLink).prop("to")).toEqual("/testButtonURL");
        expect(wrapper.find(NavLink)).toIncludeText("TestButtonText");
        expect(wrapper).toMatchSnapshot();
    });
});
