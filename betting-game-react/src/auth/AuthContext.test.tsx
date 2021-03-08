import React from "react";
import { shallow } from "enzyme";
import { AuthContext } from ".";

describe(AuthContext.name + " component", () => {
    it("should render children and match snapshot.", () => {
        const wrapper = shallow(
            <AuthContext>
                <div>Test</div>
            </AuthContext>
        );

        expect(wrapper.find("div")).toHaveLength(1);
        expect(wrapper).toIncludeText("Test");
        expect(wrapper).toMatchSnapshot();
    });
});
