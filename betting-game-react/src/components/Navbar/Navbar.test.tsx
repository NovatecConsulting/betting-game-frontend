import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import { Navbar } from ".";
import { NavbarLogo } from "./NavbarLogo";
import { useRoutes } from "../../routes";
import { Has } from "../../auth/Has";
import { Button } from "../Button";
import { UserProfile } from "./UserProfile";
import { Profile } from "oidc-client";
import { AuthorizationManager } from "../../auth";

jest.mock("../../routes");
jest.mock("../../auth", () => ({
    AuthorizationManager: {
        getUser: jest.fn(),
    },
}));

describe(Navbar.name + " component", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render and match snapshot with logo and login button, if no user exists", () => {
        const routes = [
            {
                path: "/test",
                title: "Test",
                isNavItem: true,
                hasPermission: [],
            },
        ];
        const useStateMock: any = () => [null, jest.fn()];
        const useErrorMock: any = () => [undefined, jest.fn()];

        jest.spyOn(React, "useState")
            .mockImplementationOnce(useStateMock)
            .mockImplementationOnce(useErrorMock);
        (useRoutes as jest.Mock).mockReturnValueOnce(routes);

        const wrapper = shallow(<Navbar />);

        expect(wrapper.find(Link).prop("to")).toEqual("/");
        expect(wrapper.find(NavbarLogo)).toExist();
        expect(wrapper.find(Button)).toHaveLength(1);
        expect(wrapper.find(Button).prop("label")).toEqual("Login");
        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot with logo, logout button and user profile, if a user exists.", () => {
        const routes = [
            {
                path: "/test",
                title: "Test",
                isNavItem: true,
                hasPermission: [],
            },
        ];
        const profileMock = {
            name: "TestName",
            email: "test@test.com",
            picture: "test.png",
        } as Profile;
        const userMock = { profile: profileMock } as any;

        const useStateMock: any = () => [userMock, jest.fn()];
        const useErrorMock: any = () => [undefined, jest.fn()];

        jest.spyOn(React, "useState")
            .mockImplementationOnce(useStateMock)
            .mockImplementationOnce(useErrorMock);
        (useRoutes as jest.Mock).mockReturnValueOnce(routes);

        const wrapper = shallow(<Navbar />);

        expect(wrapper.find(Link).prop("to")).toEqual("/");
        expect(wrapper.find(NavbarLogo)).toExist();
        expect(wrapper.find(Has)).toHaveLength(1);
        expect(wrapper).not.toIncludeText("Error:");
        expect(wrapper.find(Button)).toHaveLength(1);
        expect(wrapper.find(Button).prop("label")).toEqual("Logout");
        expect(wrapper.find(UserProfile)).toExist();
        expect(wrapper.find(UserProfile).prop("profile")).toEqual(profileMock);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot in case of an error.", () => {
        const routes = [
            {
                path: "/test",
                title: "Test",
                isNavItem: true,
                hasPermission: [],
            },
        ];
        const profileMock = {
            name: "TestName",
            email: "test@test.com",
            picture: "test.png",
        } as Profile;
        const userMock = { profile: profileMock } as any;

        const useStateMock: any = () => [userMock, jest.fn()];
        const useErrorMock: any = () => ["TestError", jest.fn()];

        jest.spyOn(React, "useState")
            .mockImplementationOnce(useStateMock)
            .mockImplementationOnce(useErrorMock);

        (useRoutes as jest.Mock).mockReturnValueOnce(routes);

        const wrapper = shallow(<Navbar />);

        expect(wrapper.find(Link).prop("to")).toEqual("/");
        expect(wrapper.find(NavbarLogo)).toExist();
        expect(wrapper.find(Has)).toHaveLength(1);
        expect(wrapper).toIncludeText("Error: TestError");
        expect(wrapper.find(Button)).toHaveLength(0);
        expect(wrapper.find(UserProfile)).not.toExist();
        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot with multiple navbar items.", () => {
        const routes = [
            {
                path: "/test",
                title: "Test",
                isNavItem: true,
                hasPermission: [],
            },
            {
                path: "/test2",
                title: "Test2",
                isNavItem: true,
                hasPermission: [],
            },
            {
                path: "/test3",
                title: "Test3",
                isNavItem: true,
                hasPermission: [],
            },
        ];

        (useRoutes as jest.Mock).mockReturnValueOnce(routes);
        const useStateMock: any = () => [null, jest.fn()];
        const useErrorMock: any = () => [undefined, jest.fn()];

        jest.spyOn(React, "useState")
            .mockImplementationOnce(useStateMock)
            .mockImplementationOnce(useErrorMock);

        const wrapper = shallow(<Navbar />);

        expect(wrapper.find(Has)).toHaveLength(3);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot without navbar items, if isNavItem=false.", () => {
        const routes = [
            {
                path: "/test",
                title: "Test",
                isNavItem: false,
                hasPermission: [],
            },
            {
                path: "/test2",
                title: "Test2",
                isNavItem: false,
                hasPermission: [],
            },
        ];

        (useRoutes as jest.Mock).mockReturnValueOnce(routes);
        const useStateMock: any = () => [null, jest.fn()];
        const useErrorMock: any = () => [undefined, jest.fn()];

        jest.spyOn(React, "useState")
            .mockImplementationOnce(useStateMock)
            .mockImplementationOnce(useErrorMock);

        const wrapper = shallow(<Navbar />);

        expect(wrapper.find(Has)).toHaveLength(0);
        expect(wrapper).toMatchSnapshot();
    });

    it("should fetch user and set result to local state.", async () => {
        const routes = [] as any;
        const profileMock = {
            name: "TestName",
            email: "test@test.com",
            picture: "test.png",
        } as Profile;
        const userMock = { profile: profileMock } as any;
        const useStateMock: any = (initState: any) => [initState, setUserMock];
        const setUserMock = jest.fn();

        (useRoutes as jest.Mock).mockReturnValueOnce(routes);
        jest.spyOn(React, "useState").mockImplementationOnce(useStateMock);
        jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
        (AuthorizationManager.getUser as jest.Mock).mockReturnValue(
            Promise.resolve(userMock)
        );

        await shallow(<Navbar />);

        expect(AuthorizationManager.getUser).toBeCalledTimes(1);
        expect(setUserMock).toHaveBeenCalledTimes(1);
        expect(setUserMock).toHaveBeenCalledWith(userMock);
    });

    it("should fetch user and set result not to local state in case of error.", async () => {
        const routes = [] as any;
        const setUserMock = jest.fn();
        const useStateMock: any = (initState: any) => [initState, setUserMock];
        const setErrorMock = jest.fn();
        const useStateMock2: any = (initState: any) => [
            initState,
            setErrorMock,
        ];
        const mockPromise = Promise.reject({ message: "TestError" });

        (useRoutes as jest.Mock).mockReturnValueOnce(routes);
        jest.spyOn(React, "useState")
            .mockImplementationOnce(useStateMock)
            .mockImplementationOnce(useStateMock2);
        jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
        (AuthorizationManager.getUser as jest.Mock).mockReturnValueOnce(
            mockPromise
        );

        await shallow(<Navbar />);

        await mockPromise.catch(() => {}); // Wait for promise to be rejected

        expect(AuthorizationManager.getUser).toBeCalledTimes(1);
        expect(setUserMock).toHaveBeenCalledTimes(0);
        expect(setErrorMock).toHaveBeenCalledTimes(1);
        expect(setErrorMock).toHaveBeenCalledWith("TestError");
    });
});
