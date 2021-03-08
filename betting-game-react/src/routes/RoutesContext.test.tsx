import React from "react";
import { mount } from "enzyme";
import { useRoutes, ExtendedRouteProps } from ".";
import { RoutesContext } from "./RoutesContext";

describe(`${useRoutes.name} hook`, () => {
    it("should return the default value.", () => {
        let result: ExtendedRouteProps[] | undefined;

        const TestComponent = () => {
            result = useRoutes();
            return <></>;
        };

        mount(<TestComponent />);

        expect(result).toEqual([]);
    });

    it("should return the given value.", () => {
        let result: ExtendedRouteProps[] | undefined;
        const expected = [{ path: "/foo" }] as ExtendedRouteProps[];

        const TestComponent = () => {
            result = useRoutes();
            return <></>;
        };

        mount(
            <RoutesContext.Provider value={expected}>
                <TestComponent />
            </RoutesContext.Provider>
        );

        expect(result).toEqual(expected);
    });
});
