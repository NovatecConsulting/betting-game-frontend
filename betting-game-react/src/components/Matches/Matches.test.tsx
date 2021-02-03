import React from "react";
import { shallow } from "enzyme";
import { Matches } from ".";

describe(Matches.name + " component", () => {
    it("should render and match snapshot with correct content text.", () => {
        const wrapper = shallow(<Matches />);

        expect(wrapper.find("div")).toIncludeText("Matches Component");
        expect(wrapper).toMatchSnapshot();
    });
});
