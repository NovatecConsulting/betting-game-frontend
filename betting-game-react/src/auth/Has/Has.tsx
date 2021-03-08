import React from "react";
import jwt_decode from "jwt-decode";
import { AuthorizationManager } from "../AuthContext";

interface Props {
    permissions: string[];
    Yes?: React.ComponentType;
    No?: React.ComponentType;
}

const Has: React.FC<Props> = ({ permissions, Yes, No }) => {
    const AccessGranted: React.ComponentType =
        Yes !== undefined ? Yes : () => null;
    const AccessDenied: React.ComponentType =
        No !== undefined ? No : () => null;
    const user = AuthorizationManager.getUser();
    let tokenPermissions: string[];
    if (user?.access_token !== undefined) {
        const jwt: any = jwt_decode(user.access_token);
        tokenPermissions = jwt.permissions;
    } else {
        tokenPermissions = [];
    }
    return permissions.every(
        (perm) => tokenPermissions.find((tPerm) => tPerm === perm) !== undefined
    ) ? (
        <AccessGranted />
    ) : (
        <AccessDenied />
    );
};

export default Has;
