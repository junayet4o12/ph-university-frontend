import { ReactNode } from "react";

export type TUserPath = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPath[];
}

export type TRoute = {
    path: string;
    element: ReactNode;
}