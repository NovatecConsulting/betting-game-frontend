import React from "react";
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

// TODO: error handling
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
        this.user = oidcUser ? new User(oidcUser) : oidcUser;
    };

    public logout = async () => {
        // this causes an error at the moment, because there is a CORS bug at auth0
        // if a user is logged out the corresponding session and all refresh_tokens etc are revoked. on localhost this
        // has the effect, that users have to consent the access to their email on each login.
        // This is not happening on a real domain.
        // FIXME: add again
        // await this.userManager.revokeAccessToken();
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
                this.user = oidcUser ? new User(oidcUser) : oidcUser;
            } catch (e) {
                console.error(
                    "User context could not be refreshed. Logging out.",
                    e
                );
                await this.logout();
            }
        }
    };

    public getUser = () => this.user;
}

export let AuthorizationManager: AuthorizationCodeFlowPKCEManager;

const AuthContext: React.FC = ({ children }) => {
    // TODO: use config
    AuthorizationManager = new AuthorizationCodeFlowPKCEManager({
        authority: "https://betting-game.eu.auth0.com",
        client_id: "rqlyAphr2es3RUjYlPAEkf2VCldAR5wL",
        redirect_uri: "http://localhost:3000/login-callback",
        response_type: "code",
        response_mode: "query", // TODO: in the future hopefully "fragment" is supported
        scope: "openid profile email offline_access",
        post_logout_redirect_uri: "http://localhost:3000/",
        revokeAccessTokenOnSignout: true,
        metadata: {
            issuer: "https://betting-game.eu.auth0.com/",
            authorization_endpoint:
                "https://betting-game.eu.auth0.com/authorize",
            userinfo_endpoint: "https://betting-game.eu.auth0.com/userinfo",
            token_endpoint: "https://betting-game.eu.auth0.com/oauth/token",
            registration_endpoint:
                "https://betting-game.eu.auth0.com/oidc/register",
            revocation_endpoint:
                "https://betting-game.eu.auth0.com/oauth/revoke",
            end_session_endpoint:
                "https://betting-game.eu.auth0.com/v2/logout?client_id=rqlyAphr2es3RUjYlPAEkf2VCldAR5wL&returnTo=http://localhost:3000/",
            jwks_uri: "https://betting-game.eu.auth0.com/",
        },
    });
    return <>{children}</>;
};

export default AuthContext;
