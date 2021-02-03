import React from "react";
import { shallow } from "enzyme";
import { {{pascalCase name}} } from ".";

describe({{pascalCase name}}.name + " component", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it("should render and match snapshot.", () => {
        const wrapper = shallow(<{{pascalCase name}} />);

        expect(wrapper).toMatchSnapshot();
    });
});
