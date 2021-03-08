import React from "react";
import { shallow } from "enzyme";
import { RouteSwitch, ExtendedRouteProps } from ".";
import { useRoutes } from "./RoutesContext";
import { Route, Switch, useHistory } from "react-router-dom";

jest.mock("./RoutesContext");
jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as {}),
    useHistory: jest.fn(),
}));

describe(`${RouteSwitch.name} component`, () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render and match snapshot, given no routes.", () => {
        const history = { listen: jest.fn() };
        (useRoutes as jest.Mock).mockReturnValueOnce([]);
        (useHistory as jest.Mock).mockReturnValueOnce(history);

        const wrapper = shallow(<RouteSwitch />);

        expect(history.listen).toHaveBeenCalled();
        expect(wrapper.find(Switch)).toHaveLength(1);
        expect(wrapper.find(Switch).find(Route)).toHaveLength(0);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot, given one route.", () => {
        const routes: ExtendedRouteProps[] = [
            {
                isNavItem: false,
                path: "/test",
                title: "Test",
                component: () => <></>,
                exact: true,
            },
        ];
        const history = { listen: jest.fn() };
        (useHistory as jest.Mock).mockReturnValueOnce(history);
        (useRoutes as jest.Mock).mockReturnValueOnce(routes);

        const wrapper = shallow(<RouteSwitch />);

        expect(history.listen).toHaveBeenCalled();
        expect(wrapper.find(Switch)).toHaveLength(1);
        expect(wrapper.find(Switch).find(Route)).toHaveLength(1);
        expect(wrapper.find(Switch).find(Route).at(0).prop("path")).toEqual(
            "/test"
        );
        expect(wrapper).toMatchSnapshot();
    });

    it("should render and match snapshot, given two routes.", () => {
        const routes: ExtendedRouteProps[] = [
            {
                isNavItem: false,
                path: "/test",
                title: "Test",
                component: () => <></>,
                exact: true,
            },
            {
                isNavItem: true,
                path: "/test2",
                title: "Test2",
                component: () => <></>,
                exact: true,
                permissions: ["testPermission"],
            },
        ];
        const history = { listen: jest.fn() };
        (useHistory as jest.Mock).mockReturnValueOnce(history);
        (useRoutes as jest.Mock).mockReturnValueOnce(routes);

        const wrapper = shallow(<RouteSwitch />);

        expect(history.listen).toHaveBeenCalled();
        expect(wrapper.find(Switch)).toHaveLength(1);
        expect(wrapper.find(Switch).find(Route)).toHaveLength(2);
        expect(wrapper.find(Switch).find(Route).at(0).prop("path")).toEqual(
            "/test"
        );
        expect(wrapper.find(Switch).find(Route).at(1).prop("path")).toEqual(
            "/test2"
        );
        expect(wrapper).toMatchSnapshot();
    });
});
