import React from "react";
import { shallow } from "enzyme";
import { Matchday } from ".";

describe(Matchday.name + " component", () => {
    it("should render and match snapshot with correct content text.", () => {
        const wrapper = shallow(<Matchday />);

        expect(wrapper.find("div")).toIncludeText("Matchday Component");
        expect(wrapper).toMatchSnapshot();
    });
});
