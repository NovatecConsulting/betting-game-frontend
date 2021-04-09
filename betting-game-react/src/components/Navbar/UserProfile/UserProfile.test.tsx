import React from "react";
import { shallow } from "enzyme";
import { UserProfile } from ".";
import { Profile } from "oidc-client";

describe(UserProfile.name + " component", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it("should render and match snapshot with given profile.", () => {
        const profileMock = {
            name: "TestName",
            email: "test@test.com",
            picture: "test.png",
        } as Profile;

        const wrapper = shallow(<UserProfile profile={profileMock} />);

        expect(wrapper.find("div").at(1)).toIncludeText("TestName");
        expect(wrapper.find("img").prop("src")).toEqual("test.png");
        expect(wrapper.find("img").prop("alt")).toEqual("test@test.com");
        expect(wrapper).toMatchSnapshot();
    });
});
