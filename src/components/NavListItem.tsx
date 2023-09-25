import {FC} from 'react';
import {Link} from 'react-router-dom';
import { motion, TargetAndTransition } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


interface INavListItem{
    children: React.ReactNode;
    to: string;
}

const NavListItem : FC<INavListItem> = ({children, to}) =>{

    const navigate = useNavigate();

    const initialStyle : any ={
        scale: 1
    };

    const hoverStyle : TargetAndTransition ={
        textDecoration: "none",
        backgroundColor: "#d1ccc040",
        paddingRight: "2rem",
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
            title={children as string}
            onClick={()=>{navigate(to)}}
            onTap={()=>{navigate(to)}}
        >
            <Link tabIndex={-1} to={to}>{children}</Link>
        </motion.span>
    );
};

export default NavListItem;

//rgb(250, 240, 230, .3)