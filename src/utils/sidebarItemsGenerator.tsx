import { NavLink } from "react-router-dom";
import { TRole, TUserPath } from "../types";

export const sidebarItemsGenerator = (items: TUserPath[], role: TRole) => {
    const sidebarItems = items.map((item) => {
        if (item.children) {
            const newItemChildren = item.children.map(child => ({
                key: child.name,
                label: <NavLink to={`/${role}/${child.path}`}> {child.name} </NavLink>
            }));

            return {
                key: item.name,
                label: item.name,
                children: newItemChildren
            };
        }

        if (item.name && item.path) {
            return {
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`}> {item.name} </NavLink>
            };;
        }
        return null;
    }).filter(Boolean)
    return sidebarItems
};