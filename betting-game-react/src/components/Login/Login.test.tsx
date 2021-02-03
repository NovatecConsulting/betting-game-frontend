import React from "react";
import { shallow } from "enzyme";
import { Login } from ".";

describe(Login.name + " component", () => {
    it("should render and match snapshot with correct content text.", () => {
        const wrapper = shallow(<Login />);

        expect(wrapper.find("div")).toIncludeText("Login Component");
        expect(wrapper).toMatchSnapshot();
    });
});
