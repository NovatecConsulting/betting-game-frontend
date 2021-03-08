import React, { lazy, Suspense } from "react";
import { RouteProps } from "react-router-dom";
import { Has } from "../auth/Has";
import { LoginCallback, READ_MATCHDAYS } from "../auth";
import { MainLayout } from "../layouts";
import { ErrorBoundary } from "react-error-boundary";

const Home = lazy(
    () => import(/* webpackPrefetch: true */ "../components/Home")
);
const Matches = lazy(
    () => import(/* webpackPrefetch: true */ "../components/Matches")
);
const Standings = lazy(
    () => import(/* webpackPrefetch: true */ "../components/Standings")
);

// TODO: implement an Error, NoMatch and Loading component
const Error = () => <div>Error</div>;
const Loading = () => <div>Loading...</div>;
const NoMatch = () => <div>404</div>;

export const ROUTE_INDEX = "/";
export const ROUTE_STANDINGS = "/standings";
export const ROUTE_MATCHES = "/matches";
export const ROUTE_LOGIN_CALLBACK = "/login-callback";
export const ROUTE_404_NO_MATCH = "*";

export interface NavItemRoute extends RouteProps {
    path: string;
    title: string;
    isNavItem: true;
    permissions: string[];
}

export interface NoNavItemRoute extends RouteProps {
    path: string;
    title: string;
    isNavItem: false;
}

export type ExtendedRouteProps = NavItemRoute | NoNavItemRoute;

export const routes: ExtendedRouteProps[] = [
    {
        path: ROUTE_INDEX,
        exact: true,
        component: () => (
            <MainLayout>
                <ErrorBoundary FallbackComponent={Error}>
                    <Suspense fallback={<Loading />}>
                        <Home />
                    </Suspense>
                </ErrorBoundary>
            </MainLayout>
        ),
        title: "Home",
        isNavItem: false,
    },
    {
        path: ROUTE_LOGIN_CALLBACK,
        exact: true,
        component: () => (
            <MainLayout>
                <ErrorBoundary FallbackComponent={Error}>
                    <LoginCallback />
                </ErrorBoundary>
            </MainLayout>
        ),
        title: "Logged in",
        isNavItem: false,
    },
    {
        path: ROUTE_STANDINGS,
        exact: true,
        component: () => (
            <MainLayout>
                <ErrorBoundary FallbackComponent={Error}>
                    <Has
                        permissions={[]}
                        Yes={() => (
                            <Suspense fallback={<Loading />}>
                                <Standings />
                            </Suspense>
                        )}
                        No={NoMatch}
                    />
                </ErrorBoundary>
            </MainLayout>
        ),
        title: "Standings",
        isNavItem: true,
        permissions: [],
    },
    {
        path: ROUTE_MATCHES,
        exact: true,
        component: () => (
            <MainLayout>
                <ErrorBoundary FallbackComponent={Error}>
                    <Has
                        permissions={[READ_MATCHDAYS]}
                        Yes={() => (
                            <Suspense fallback={<Loading />}>
                                <Matches />
                            </Suspense>
                        )}
                        No={NoMatch}
                    />
                </ErrorBoundary>
            </MainLayout>
        ),
        title: "Matches",
        isNavItem: true,
        permissions: [READ_MATCHDAYS],
    },
    {
        path: ROUTE_404_NO_MATCH,
        exact: false,
        component: () => (
            <MainLayout>
                <ErrorBoundary FallbackComponent={Error}>
                    <NoMatch />
                </ErrorBoundary>
            </MainLayout>
        ),
        title: "404 Not found",
        isNavItem: false,
    },
];
