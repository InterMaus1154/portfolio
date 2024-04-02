import {FC, ComponentProps} from 'react';
import {NavLink} from "react-router-dom";

type IMenuLink = {
    children: React.ReactNode;
    to: string;
} & ComponentProps<"a">;
const MenuLink : FC<IMenuLink> = ({children, to}) => {
    return (
        <NavLink className={(navData) => (navData.isActive ? "Link-item--active" : "")} to={to}>
            {children}
        </NavLink>
    );
};

export default MenuLink;