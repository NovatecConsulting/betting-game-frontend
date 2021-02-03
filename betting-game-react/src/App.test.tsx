import React from "react";
import { shallow } from "enzyme";
import { Navbar } from "./components/Navbar";
import App from "./App";

describe(App.name + " component", () => {
    it("should render and match snapshot.", () => {
        const wrapper = shallow(<App />);

        expect(wrapper.find(Navbar)).toExist();
        expect(wrapper).toMatchSnapshot();
    });
});
