import {FC, ComponentProps, useContext} from 'react';
import {NavLink} from "react-router-dom";
import {HeaderStatusContext} from "../context/HeaderStatusContext";

type IMenuLink = {
    children: React.ReactNode;
    to: string;
} & ComponentProps<"a">;
const MenuLink : FC<IMenuLink> = ({children, to, ...props}) => {

    const {setHeaderOpen} = useContext(HeaderStatusContext);

    return (
        <NavLink onClick={() => setHeaderOpen(false)}  {...props} className={(navData) => (navData.isActive ? "Link-item--active" : "")} to={to}>
            {children}
        </NavLink>
    );
};

export default MenuLink;