import React from "react";

interface Props {
    label: string;
    onClick: () => void;
    className?: string;
}

const Button: React.FC<Props> = ({ label, onClick, className = "" }) => {
    const style =
        "cursor-pointer inline-block text-sm px-5 py-2 leading-none border rounded-full text-white border-white hover:text-blue-400 hover:bg-white active:bg-blue-700 " +
        className;
    return (
        <div onClick={onClick} className={style}>
            {label}
        </div>
    );
};

export default Button;
