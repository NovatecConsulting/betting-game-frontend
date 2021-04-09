import React from "react";
import { mount } from "enzyme";
import { Has } from ".";
import { AuthorizationManager } from "../../auth";
import jwt_decode from "jwt-decode";

jest.mock("../../auth", () => ({
    AuthorizationManager: {
        getUser: jest.fn(),
    },
}));

jest.mock("jwt-decode");

describe(Has.name + " component", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render and match snapshot, if user has all the needed permission.", async () => {
        const userMock = { access_token: "testtoken" } as any;
        const hasAccessMock = jest.fn();
        const useStateMock: any = () => [true, hasAccessMock];

        jest.spyOn(React, "useState").mockImplementationOnce(useStateMock);
        (AuthorizationManager.getUser as jest.Mock).mockReturnValueOnce(
            Promise.resolve(userMock)
        );
        (jwt_decode as jest.Mock).mockReturnValueOnce({
            permissions: ["TestPermission1", "TestPermission2"],
        });

        const wrapper = await mount(
            <Has
                permissions={["TestPermission1", "TestPermission2"]}
                Yes={() => <div>AccessGranted</div>}
                No={() => <div>AccessDenied</div>}
            />
        );

        expect(hasAccessMock).toHaveBeenCalledWith(true);
        expect(wrapper).toIncludeText("AccessGranted");
        expect(wrapper).not.toIncludeText("AccessDenied");
        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot, if user has more than the needed permissions.", async () => {
        const userMock = { access_token: "testtoken" } as any;
        const hasAccessMock = jest.fn();
        const useStateMock: any = () => [true, hasAccessMock];

        jest.spyOn(React, "useState").mockImplementationOnce(useStateMock);
        (AuthorizationManager.getUser as jest.Mock).mockReturnValueOnce(
            Promise.resolve(userMock)
        );
        (jwt_decode as jest.Mock).mockReturnValueOnce({
            permissions: ["TestPermission1", "TestPermission2"],
        });

        const wrapper = await mount(
            <Has
                permissions={["TestPermission1"]}
                Yes={() => <div>AccessGranted</div>}
                No={() => <div>AccessDenied</div>}
            />
        );

        expect(hasAccessMock).toHaveBeenCalledWith(true);
        expect(wrapper).toIncludeText("AccessGranted");
        expect(wrapper).not.toIncludeText("AccessDenied");
        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot, if user has just one of the needed permissions.", async () => {
        const userMock = { access_token: "testtoken" } as any;
        const hasAccessMock = jest.fn();
        const useStateMock: any = () => [false, hasAccessMock];

        jest.spyOn(React, "useState").mockImplementationOnce(useStateMock);
        (AuthorizationManager.getUser as jest.Mock).mockReturnValueOnce(
            Promise.resolve(userMock)
        );
        (jwt_decode as jest.Mock).mockReturnValueOnce({
            permissions: ["TestPermission1"],
        });

        const wrapper = await mount(
            <Has
                permissions={["TestPermission1", "TestPermission2"]}
                Yes={() => <div>AccessGranted</div>}
                No={() => <div>AccessDenied</div>}
            />
        );

        expect(hasAccessMock).toHaveBeenCalledWith(false);
        expect(wrapper).not.toIncludeText("AccessGranted");
        expect(wrapper).toIncludeText("AccessDenied");
        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot, if user has no permissions.", async () => {
        const userMock = { access_token: "testtoken" } as any;
        const hasAccessMock = jest.fn();
        const useStateMock: any = () => [false, hasAccessMock];

        jest.spyOn(React, "useState").mockImplementationOnce(useStateMock);
        (AuthorizationManager.getUser as jest.Mock).mockReturnValueOnce(
            Promise.resolve(userMock)
        );
        (jwt_decode as jest.Mock).mockReturnValueOnce({
            permissions: [],
        });

        const wrapper = await mount(
            <Has
                permissions={["TestPermission1", "TestPermission2"]}
                Yes={() => <div>AccessGranted</div>}
                No={() => <div>AccessDenied</div>}
            />
        );

        expect(hasAccessMock).toHaveBeenCalledWith(false);
        expect(wrapper).not.toIncludeText("AccessGranted");
        expect(wrapper).toIncludeText("AccessDenied");
        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot, if user has no access token.", async () => {
        const hasAccessMock = jest.fn();
        const useStateMock: any = () => [false, hasAccessMock];
        const userMock = {} as any;
        const mockPromise = Promise.resolve(userMock);

        jest.spyOn(React, "useState").mockImplementationOnce(useStateMock);
        (AuthorizationManager.getUser as jest.Mock).mockReturnValueOnce(
            mockPromise
        );

        (jwt_decode as jest.Mock).mockReturnValueOnce({
            permissions: ["TestPermission1"],
        });

        const wrapper = await mount(
            <Has
                permissions={["TestPermission1", "TestPermission2"]}
                Yes={() => <div>AccessGranted</div>}
                No={() => <div>AccessDenied</div>}
            />
        );

        await mockPromise; // Wait for promise

        expect(hasAccessMock).toHaveBeenCalledWith(false);
        expect(wrapper).not.toIncludeText("AccessGranted");
        expect(wrapper).toIncludeText("AccessDenied");
        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot, if jwt_decode throws an error.", async () => {
        const hasAccessMock = jest.fn();
        const useStateMock: any = () => [false, hasAccessMock];
        const userMock = { access_token: "testtoken" } as any;
        const mockPromise = Promise.resolve(userMock);

        jest.spyOn(React, "useState").mockImplementationOnce(useStateMock);
        (AuthorizationManager.getUser as jest.Mock).mockReturnValueOnce(
            mockPromise
        );

        (jwt_decode as jest.Mock).mockImplementation(() => {
            throw new Error();
        });

        const wrapper = await mount(
            <Has
                permissions={["TestPermission1", "TestPermission2"]}
                Yes={() => <div>AccessGranted</div>}
                No={() => <div>AccessDenied</div>}
            />
        );

        await mockPromise; // Wait for promise

        expect(hasAccessMock).toHaveBeenCalledWith(false);
        expect(wrapper).not.toIncludeText("AccessGranted");
        expect(wrapper).toIncludeText("AccessDenied");
        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot, if AuthorizationManager throws an error.", async () => {
        const hasAccessMock = jest.fn();
        const useStateMock: any = () => [false, hasAccessMock];
        const mockPromise = Promise.reject("TestError");

        jest.spyOn(React, "useState").mockImplementationOnce(useStateMock);
        (AuthorizationManager.getUser as jest.Mock).mockReturnValueOnce(
            mockPromise
        );
        (jwt_decode as jest.Mock).mockReturnValueOnce({
            permissions: ["TestPermission1"],
        });

        const wrapper = await mount(
            <Has
                permissions={["TestPermission1", "TestPermission2"]}
                Yes={() => <div>AccessGranted</div>}
                No={() => <div>AccessDenied</div>}
            />
        );

        await mockPromise.catch(() => {}); // Wait for promise

        expect(hasAccessMock).toHaveBeenCalledWith(false);
        expect(wrapper).not.toIncludeText("AccessGranted");
        expect(wrapper).toIncludeText("AccessDenied");
        expect(wrapper).toMatchSnapshot();
    });
});
