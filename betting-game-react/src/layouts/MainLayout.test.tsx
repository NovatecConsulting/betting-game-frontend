import React from "react";
import { shallow } from "enzyme";
import { MainLayout } from ".";

describe(MainLayout.name + " component", () => {
    it("should render and match snapshot, given no children.", () => {
        const wrapper = shallow(<MainLayout />);

        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot, given one child.", () => {
        const wrapper = shallow(
            <MainLayout>
                <div>Test</div>
            </MainLayout>
        );

        expect(wrapper.find("div")).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });
});
