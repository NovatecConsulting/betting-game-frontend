import React from "react";
import { shallow } from "enzyme";
import LoginCallback from "./LoginCallback";
import { AuthorizationManager } from "../auth";
import { Redirect } from "react-router";
import { Loading } from "../components/Loading";

jest.mock("../auth", () => ({
    AuthorizationManager: {
        loginCallback: jest.fn(),
    },
}));

describe(LoginCallback.name + " component", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it("should render and match snapshot with loading component before anything happens.", async () => {
        const setLoggedInMock = jest.fn();
        const useStateMock: any = () => [false, setLoggedInMock];
        const errorMock = jest.fn();
        const useStateMock2: any = () => [undefined, errorMock];

        jest.spyOn(React, "useState")
            .mockImplementationOnce(useStateMock)
            .mockImplementationOnce(useStateMock2);

        const wrapper = await shallow(<LoginCallback />);

        expect(AuthorizationManager.loginCallback).toBeCalledTimes(0);
        expect(setLoggedInMock).toHaveBeenCalledTimes(0);
        expect(errorMock).toHaveBeenCalledTimes(0);
        expect(wrapper.find(Loading)).toExist();
        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot with successful redirect.", async () => {
        const setLoggedInMock = jest.fn();
        const useStateMock: any = () => [true, setLoggedInMock];
        const errorMock = jest.fn();
        const useStateMock2: any = () => [undefined, errorMock];

        jest.spyOn(React, "useState")
            .mockImplementationOnce(useStateMock)
            .mockImplementationOnce(useStateMock2);
        jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
        (AuthorizationManager.loginCallback as jest.Mock).mockImplementationOnce(
            () => Promise.resolve()
        );

        const wrapper = await shallow(<LoginCallback />);

        expect(AuthorizationManager.loginCallback).toBeCalledTimes(1);
        expect(setLoggedInMock).toHaveBeenCalledTimes(1);
        expect(setLoggedInMock).toHaveBeenCalledWith(true);
        expect(errorMock).toHaveBeenCalledTimes(0);
        expect(wrapper.find(Redirect)).toExist();
        expect(wrapper.find(Redirect).prop("to")).toEqual("/");
        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot, if AuthorizationManager throws an error.", async () => {
        const setLoggedInMock = jest.fn();
        const useStateMock: any = () => [false, setLoggedInMock];
        const errorMock = jest.fn();
        const useStateMock2: any = () => ["TestError", errorMock];
        const mockPromise = Promise.reject({ message: "TestError" });

        jest.spyOn(React, "useState")
            .mockImplementationOnce(useStateMock)
            .mockImplementationOnce(useStateMock2);
        jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
        jest.spyOn(React, "useState").mockImplementationOnce(useStateMock);
        (AuthorizationManager.loginCallback as jest.Mock).mockReturnValueOnce(
            mockPromise
        );

        const wrapper = await shallow(<LoginCallback />);

        await mockPromise.catch(() => {}); // Wait for promise

        expect(AuthorizationManager.loginCallback).toBeCalledTimes(1);
        expect(setLoggedInMock).toHaveBeenCalledTimes(0);
        expect(errorMock).toHaveBeenCalledTimes(1);
        expect(errorMock).toHaveBeenCalledWith("TestError");
        expect(wrapper).toIncludeText("TestError");
        expect(wrapper).toMatchSnapshot();
    });
});
