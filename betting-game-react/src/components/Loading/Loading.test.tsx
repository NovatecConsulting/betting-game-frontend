import React from "react";
import { shallow } from "enzyme";
import { Loading } from ".";

describe(Loading.name + " component", () => {
    it("should render and match snapshot.", () => {
        const wrapper = shallow(<Loading />);

        expect(wrapper).toIncludeText("Loading...");
        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot with size attribute set.", () => {
        const wrapper = shallow(<Loading size={32} />);

        expect(wrapper).toIncludeText("Loading...");
        expect(wrapper).toMatchSnapshot();
    });
});
