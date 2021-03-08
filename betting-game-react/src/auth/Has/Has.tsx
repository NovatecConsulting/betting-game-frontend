import React from "react";
import jwt_decode from "jwt-decode";
import { AuthorizationManager } from "../../auth";

interface Props {
    permissions: string[];
    Yes?: React.ComponentType;
    No?: React.ComponentType;
}

const Has: React.FC<Props> = ({ permissions, Yes, No }) => {
    const [hasAccess, setHasAccess] = React.useState(false);
    const AccessGranted: React.ComponentType =
        Yes !== undefined ? Yes : () => null;
    const AccessDenied: React.ComponentType =
        No !== undefined ? No : () => null;
    AuthorizationManager.getUser()
        .then((user) => {
            let tokenPermissions: string[] = [];
            if (user?.access_token !== undefined) {
                const jwt: any = jwt_decode(user.access_token);
                tokenPermissions = jwt.permissions;
            }
            let hasAccess = permissions.every((permission: string) =>
                tokenPermissions.includes(permission)
            );
            setHasAccess(hasAccess);
        })
        .catch((error) => {
            console.log("Error while fetching user.", error);
            setHasAccess(false);
        });
    return hasAccess ? <AccessGranted /> : <AccessDenied />;
};

export default Has;
