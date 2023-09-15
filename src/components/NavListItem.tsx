import {FC} from 'react';
import {Link} from 'react-router-dom';
import { motion, TargetAndTransition } from 'framer-motion';


interface INavListItem{
    children: React.ReactNode;
    to: string;
}

const NavListItem : FC<INavListItem> = ({children, to}) =>{

    const initialStyle : any ={
        scale: 1,
        textDecoration: "underline",
        color: "var(--primary-txt-clr)"
    };

    const hoverStyle : TargetAndTransition ={
        textDecoration: "none",
        backgroundColor: "var(--link-hover-clr)",
        paddingLeft: "2rem",
        transition: {duration: .25}
    };

    const tapStyle : TargetAndTransition = {
        scale: 0.95,
        color: "#352F44"
    };

    return(
        <motion.span
            initial={initialStyle}
            whileHover={hoverStyle}
            whileTap={tapStyle}
        >
            <Link title={children as string} to={to}>{children}</Link>
        </motion.span>
    );
};

export default NavListItem;

//rgb(250, 240, 230, .3)