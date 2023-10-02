import {FC, useEffect, useRef} from 'react';
import "../styles/Page.css";
import { motion } from 'framer-motion';

interface IPage{
    children: React.ReactNode;
    title: string;
}

const BASE_TITLE = "Mark Kiss Portfolio";

const animation = {
    initial:{
        scale: 0
    },
    animate:{
        scale: 1
    },
    exit:{
        scale: 2,
        opacity: 0
    },
    transition:{
        duration: 0.6
    }
};

const changeTitle = (title : string) : void => {
    document.title = `${BASE_TITLE} - ${title}`;
}

const PageComponent : FC<IPage> = ({children, title}) =>{
    
    useEffect(()=>{
        changeTitle(title);
    },[title]);

    

    return(
        <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            transition={animation.transition}
            style={{transformOrigin: "0 0"}}
        >
            {children}
        </motion.div>
    );
};

export default PageComponent;