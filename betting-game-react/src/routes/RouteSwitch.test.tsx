import React from "react";
import { shallow } from "enzyme";
import { RouteSwitch, ExtendedRouteProps } from ".";
import { useRoutes } from "./RoutesContext";
import { useHistory } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import { Permission } from "../auth";

jest.mock("./RoutesContext");
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: jest.fn()
}));
jest.mock("@react-keycloak/web");

class TEST_PERMISSION extends Permission {
    public static ACTION = new TEST_PERMISSION("ACTION");
}

describe(`${RouteSwitch.name} component`, () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render and match snapshot, given no routes.", () => {
        const history = { listen: jest.fn() };
        const keycloak = { updateToken: jest.fn() };
        (useRoutes as jest.Mock).mockReturnValueOnce([]);
        (useHistory as jest.Mock).mockReturnValueOnce(history);
        (useKeycloak as jest.Mock).mockReturnValueOnce({ keycloak });

        const wrapper = shallow(<RouteSwitch />);

        expect(history.listen).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot, given one route.", () => {
        const routes: ExtendedRouteProps[] = [
            {
                isNavItem: false,
                path: "/test",
                title: "Test",
                component: () => <></>,
                exact: true
            }
        ];
        const history = { listen: jest.fn() };
        const keycloak = { updateToken: jest.fn() };
        (useHistory as jest.Mock).mockReturnValueOnce(history);
        (useKeycloak as jest.Mock).mockReturnValueOnce({ keycloak });
        (useRoutes as jest.Mock).mockReturnValueOnce(routes);

        const wrapper = shallow(<RouteSwitch />);

        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot, given two routes.", () => {
        const routes: ExtendedRouteProps[] = [
            {
                isNavItem: false,
                path: "/test",
                title: "Test",
                component: () => <></>,
                exact: true
            },
            {
                isNavItem: true,
                path: "/foo",
                title: "Foo",
                component: () => <></>,
                exact: true,
                hasPermission: TEST_PERMISSION.ACTION
            }
        ];
        const history = { listen: jest.fn() };
        const keycloak = { updateToken: jest.fn() };
        (useHistory as jest.Mock).mockReturnValueOnce(history);
        (useKeycloak as jest.Mock).mockReturnValueOnce({ keycloak });
        (useRoutes as jest.Mock).mockReturnValueOnce(routes);

        const wrapper = shallow(<RouteSwitch />);

        expect(wrapper).toMatchSnapshot();
    });
});
