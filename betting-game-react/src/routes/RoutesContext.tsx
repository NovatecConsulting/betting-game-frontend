import React, { useContext } from "react";
import { ExtendedRouteProps } from ".";

export const RoutesContext = React.createContext<ExtendedRouteProps[]>([]);
export const useRoutes = () => useContext(RoutesContext);
