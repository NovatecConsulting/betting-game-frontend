import { Profile } from "oidc-client";
import React from "react";

interface Props {
    profile: Profile;
    className?: string;
}

const UserProfile: React.FC<Props> = ({ profile, className = "" }) => {
    const style = "flex items-center justify-between flex-wrap " + className;
    return (
        <div className={style}>
            {profile.picture && (
                <img
                    src={profile.picture}
                    alt={profile.email}
                    width={40}
                    height={40}
                />
            )}
            <div className="text-white text-sm ml-2">{profile.name}</div>
        </div>
    );
};

export default UserProfile;
