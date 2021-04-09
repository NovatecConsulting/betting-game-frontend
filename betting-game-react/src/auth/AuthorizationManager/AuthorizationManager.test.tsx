import { AuthorizationCodeFlowPKCEManager } from ".";
import { UserManager, User } from "oidc-client";

jest.mock("oidc-client");

const mockUserManager = {
    clearStaleState: jest.fn(),
    signinRedirect: jest.fn(),
    signinRedirectCallback: jest.fn(),
    getUser: jest.fn(),
    revokeAccessToken: jest.fn(),
    signoutRedirect: jest.fn(),
    signinSilent: jest.fn(),
};

// Mock oicd UserManager object
(UserManager as any).mockImplementation(() => mockUserManager);

// Mock oicd User object
(User as any).mockImplementation((parameters: any) => {
    return { ...parameters };
});

describe(AuthorizationCodeFlowPKCEManager.name + " component", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("Login", () => {
        it("should call clearStaleState and signinRedirect, if login is called.", async () => {
            const settings = {} as any;
            const cut = new AuthorizationCodeFlowPKCEManager(settings);

            await cut.login();

            expect(mockUserManager.clearStaleState).toHaveBeenCalledTimes(1);
            expect(mockUserManager.signinRedirect).toHaveBeenCalledTimes(1);
        });

        it("should throw original exception, if clearStaleState throws an error.", async () => {
            const settings = {} as any;
            const cut = new AuthorizationCodeFlowPKCEManager(settings);

            (mockUserManager.clearStaleState as jest.Mock).mockImplementation(
                () => {
                    throw new Error("TestError");
                }
            );

            await expect(cut.login()).rejects.toThrow("TestError");
        });

        it("should throw original exception, if signinRedirect throws an error.", async () => {
            const settings = {} as any;
            const cut = new AuthorizationCodeFlowPKCEManager(settings);

            (mockUserManager.signinRedirect as jest.Mock).mockImplementation(
                () => {
                    throw new Error("TestError");
                }
            );

            await expect(cut.login()).rejects.toThrow("TestError");
        });
    });

    describe("LoginCallback", () => {
        it("should call signinRedirectCallback and set user, if loginCallback is called.", async () => {
            const settings = {} as any;
            const cut = new AuthorizationCodeFlowPKCEManager(settings);
            const oidcUser = { id_token: "testToken" } as any;

            (mockUserManager.getUser as jest.Mock).mockReturnValueOnce(
                oidcUser
            );

            await cut.loginCallback();

            const user = await cut.getUser();

            expect(user).not.toBeNull();
            expect(user?.id_token).toEqual("testToken");
            expect(
                mockUserManager.signinRedirectCallback
            ).toHaveBeenCalledTimes(1);
            expect(mockUserManager.getUser).toHaveBeenCalledTimes(1);
        });

        it("should throw original exception, if signinRedirectCallback throws an error.", async () => {
            const settings = {} as any;
            const cut = new AuthorizationCodeFlowPKCEManager(settings);

            (mockUserManager.signinRedirectCallback as jest.Mock).mockImplementation(
                () => {
                    throw new Error("TestError");
                }
            );

            await expect(cut.loginCallback()).rejects.toThrow("TestError");
        });
    });

    describe("Logout", () => {
        it("should call signinRedirectCallback and set user, if logout is called.", async () => {
            const settings = {} as any;
            const cut = new AuthorizationCodeFlowPKCEManager(settings);

            await cut.logout();

            expect(mockUserManager.revokeAccessToken).toHaveBeenCalledTimes(1);
            expect(mockUserManager.signoutRedirect).toHaveBeenCalledTimes(1);
        });

        it("should throw original exception, if signoutRedirect throws an error.", async () => {
            const settings = {} as any;
            const cut = new AuthorizationCodeFlowPKCEManager(settings);

            (mockUserManager.signoutRedirect as jest.Mock).mockImplementation(
                () => {
                    throw new Error("TestError");
                }
            );

            await expect(cut.logout()).rejects.toThrow("TestError");
        });
    });

    describe("UpdateToken", () => {
        it("do nothing, if user is not set.", async () => {
            const settings = {} as any;
            const cut = new AuthorizationCodeFlowPKCEManager(settings);

            await cut.updateToken();

            expect(mockUserManager.signinSilent).toHaveBeenCalledTimes(0);
            expect(mockUserManager.getUser).toHaveBeenCalledTimes(0);
        });

        it("do nothing, if refresh_token is not set.", async () => {
            const settings = {} as any;
            const cut = new AuthorizationCodeFlowPKCEManager(settings);
            const oidcUser = { id_token: "testToken" } as any;

            (mockUserManager.getUser as jest.Mock).mockReturnValueOnce(
                oidcUser
            );

            await cut.getUser(); // called to set user internally

            await cut.updateToken();

            expect(mockUserManager.signinSilent).toHaveBeenCalledTimes(0);
            expect(mockUserManager.getUser).toHaveBeenCalledTimes(1); // called only to set user internally
        });

        it("do nothing, if expired is false and expires_in is not equal to set minValidity.", async () => {
            const settings = {} as any;
            const cut = new AuthorizationCodeFlowPKCEManager(settings);
            const oidcUser = {
                id_token: "testToken",
                refresh_token: "testRefreshToken",
            } as any;
            (mockUserManager.getUser as jest.Mock).mockReturnValueOnce(
                oidcUser
            );

            // Mock oicd User object with different values
            (User as any).mockImplementation((parameters: any) => {
                return {
                    ...parameters,
                    expired: false,
                    expires_in: 6,
                };
            });

            await cut.getUser(); // called to set user internally

            await cut.updateToken(5);

            expect(mockUserManager.signinSilent).toHaveBeenCalledTimes(0);
            expect(mockUserManager.getUser).toHaveBeenCalledTimes(1); // called only to set user internally
        });

        it("call signinSilent and set user again, if refresh_token is set and expired is true.", async () => {
            const settings = {} as any;
            const cut = new AuthorizationCodeFlowPKCEManager(settings);
            const oidcUser = {
                id_token: "testToken",
                refresh_token: "testRefreshToken",
            } as any;
            (mockUserManager.getUser as jest.Mock).mockReturnValueOnce(
                oidcUser
            );

            // Mock oicd User object with different values
            (User as any).mockImplementation((parameters: any) => {
                return {
                    ...parameters,
                    expired: true,
                    expires_in: 100,
                };
            });

            await cut.getUser(); // called to set user internally

            await cut.updateToken(25);

            expect(mockUserManager.signinSilent).toHaveBeenCalledTimes(1);
            expect(mockUserManager.getUser).toHaveBeenCalledTimes(2); // called also to set user internally
        });

        it("call signinSilent and set user again, if refresh_token is set and expires_in is equal to set minValidity.", async () => {
            const settings = {} as any;
            const cut = new AuthorizationCodeFlowPKCEManager(settings);
            const oidcUser = {
                id_token: "testToken",
                refresh_token: "testRefreshToken",
            } as any;
            (mockUserManager.getUser as jest.Mock).mockReturnValueOnce(
                oidcUser
            );

            // Mock oicd User object with different values
            (User as any).mockImplementation((parameters: any) => {
                return {
                    ...parameters,
                    expired: true,
                    expires_in: 20,
                };
            });

            await cut.getUser(); // called to set user internally

            await cut.updateToken(20);

            expect(mockUserManager.signinSilent).toHaveBeenCalledTimes(1);
            expect(mockUserManager.getUser).toHaveBeenCalledTimes(2); // called also to set user internally
        });

        it("call logout, if signinSilent throws an error.", async () => {
            const settings = {} as any;
            const cut = new AuthorizationCodeFlowPKCEManager(settings);
            const oidcUser = {
                id_token: "testToken",
                refresh_token: "testRefreshToken",
            } as any;
            (mockUserManager.getUser as jest.Mock).mockReturnValueOnce(
                oidcUser
            );
            const mockPromiseError = Promise.reject({ message: "TestError2" });
            // Mock oicd User object with different values
            (User as any).mockImplementation((parameters: any) => {
                return {
                    ...parameters,
                    expired: true,
                    expires_in: 5,
                };
            });
            (mockUserManager.signinSilent as jest.Mock).mockReturnValueOnce(
                mockPromiseError
            );
            (mockUserManager.signoutRedirect as jest.Mock).mockImplementation(
                () => {}
            );

            await cut.getUser(); // called to set user internally

            await cut.updateToken(5);

            await mockPromiseError.catch(() => {}); // Wait for promise

            expect(mockUserManager.signinSilent).toHaveBeenCalledTimes(1);
            expect(mockUserManager.getUser).toHaveBeenCalledTimes(1); // called only to set user internally
            expect(mockUserManager.signoutRedirect).toHaveBeenCalledTimes(1); // called when logging out
        });
    });

    describe("GetUser", () => {
        it("should create a new user object, if user is null.", async () => {
            const settings = {} as any;
            const cut = new AuthorizationCodeFlowPKCEManager(settings);
            const oidcUser = { id_token: "testToken" } as any;

            (mockUserManager.getUser as jest.Mock).mockReturnValueOnce(
                oidcUser
            );

            const user = await cut.getUser();

            expect(user).not.toBeNull();
            expect(user?.id_token).toEqual("testToken");
            expect(mockUserManager.getUser).toHaveBeenCalledTimes(1);
        });

        it("should return existing user, if user is not null.", async () => {
            const settings = {} as any;
            const cut = new AuthorizationCodeFlowPKCEManager(settings);
            const oidcUser = { id_token: "testToken" } as any;

            (mockUserManager.getUser as jest.Mock).mockReturnValueOnce(
                oidcUser
            );

            await cut.getUser(); // called to predefine user

            const user = await cut.getUser();

            expect(user).not.toBeNull();
            expect(user?.id_token).toEqual("testToken");
            expect(mockUserManager.getUser).toHaveBeenCalledTimes(1); // called only if user is predefined
        });

        it("should throw original exception, if user manager throws an error.", async () => {
            const settings = {} as any;
            const cut = new AuthorizationCodeFlowPKCEManager(settings);

            (mockUserManager.getUser as jest.Mock).mockImplementation(() => {
                throw new Error("TestError");
            });

            await expect(cut.getUser()).rejects.toThrow("TestError");
        });
    });
});
