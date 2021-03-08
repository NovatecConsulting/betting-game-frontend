import React from "react";
import { shallow } from "enzyme";
import { Button } from ".";

describe(Button.name + " component", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it("should render and match snapshot with label and onClick method.", () => {
        const onClick = jest.fn();

        const wrapper = shallow(<Button label="Test" onClick={onClick} />);

        wrapper.find("div").simulate("click");

        expect(onClick).toHaveBeenCalled();
        expect(wrapper.find("div")).toIncludeText("Test");
        expect(wrapper).toMatchSnapshot();
    });
});
