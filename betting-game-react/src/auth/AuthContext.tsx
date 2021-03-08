import React from "react";
import { AuthorizationCodeFlowPKCEManager } from "./AuthorizationManager";

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
