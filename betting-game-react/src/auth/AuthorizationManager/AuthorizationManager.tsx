import {
    User as OidcUser,
    UserManager,
    UserManagerSettings,
} from "oidc-client";

// For immutability
class User extends OidcUser {
    constructor(user: OidcUser) {
        super({
            id_token: user.id_token,
            access_token: user.access_token,
            expires_at: user.expires_at,
            profile: user.profile,
            refresh_token: user.refresh_token!,
            scope: user.scope,
            session_state: user.session_state!,
            state: user.state,
            token_type: user.token_type,
        });
    }
}

/**
 * Manages the Authorization Code Flow with PKCE. Added such that underlying oidc library can be exchanged very easy
 * without being forced to change other parts of the app.
 */
class AuthorizationCodeFlowPKCEManager {
    private userManager: UserManager;
    private user: User | null;

    constructor(settings: UserManagerSettings) {
        this.userManager = new UserManager(settings);
        this.user = null;
    }

    public login = async () => {
        await this.userManager.clearStaleState();
        await this.userManager.signinRedirect();
    };

    public loginCallback = async () => {
        await this.userManager.signinRedirectCallback();
        const oidcUser = await this.userManager.getUser();
        this.user = oidcUser ? new User(oidcUser) : null;
    };

    public logout = async () => {
        await this.userManager.signoutRedirect();
    };

    public updateToken = async (minValidity: number = 5) => {
        if (
            this.user &&
            this.user.refresh_token &&
            (this.user.expired || this.user.expires_in === minValidity)
        ) {
            try {
                await this.userManager.signinSilent();
                const oidcUser = await this.userManager.getUser();
                this.user = oidcUser ? new User(oidcUser) : null;
            } catch (e) {
                console.log(
                    "User context could not be refreshed. Logging out.",
                    e
                );
                await this.logout();
            }
        }
    };

    public getUser = async () => {
        if (this.user !== null) return this.user;
        const oidcUser = await this.userManager.getUser();
        this.user = oidcUser ? new User(oidcUser) : null;
        return this.user;
    };
}

export default AuthorizationCodeFlowPKCEManager;
