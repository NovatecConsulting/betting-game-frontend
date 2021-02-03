import React from "react";
import { shallow } from "enzyme";
import { Standings } from ".";

describe(Standings.name + " component", () => {
    it("should render and match snapshot with correct content text.", () => {
        const wrapper = shallow(<Standings />);

        expect(wrapper.find("div")).toIncludeText("Standings Component");
        expect(wrapper).toMatchSnapshot();
    });
});
