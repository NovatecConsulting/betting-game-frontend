import React from "react";
import { Navbar } from "../components/Navbar";

const MainLayout: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default MainLayout;
