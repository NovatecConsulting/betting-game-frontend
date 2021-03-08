import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

describe(Home.name + " component", () => {
    it("should render and match snapshot with correct content text.", () => {
        const wrapper = shallow(<Home />);

        expect(wrapper.find("div")).toIncludeText("Home Component");
        expect(wrapper).toMatchSnapshot();
    });
});
