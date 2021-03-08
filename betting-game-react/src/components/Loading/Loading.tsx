import React from "react";
import "./Loading.scss";

interface Props {
    size?: number;
}

const Loading: React.FC<Props> = ({ size = 16 }) => {
    const style = `loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-${size} w-${size}`;
    return (
        <div className="flex justify-center mt-8">
            <div className={style}></div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default Loading;
