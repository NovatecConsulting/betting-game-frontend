import React from "react";
import { shallow } from "enzyme";
import { AboutUs } from ".";

describe(AboutUs.name + " component", () => {
    it("should render and match snapshot with correct content text.", () => {
        const wrapper = shallow(<AboutUs />);

        expect(wrapper.find("div")).toIncludeText("About us Component");
        expect(wrapper).toMatchSnapshot();
    });
});
