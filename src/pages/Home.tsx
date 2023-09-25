import {FC, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Home-page.css";
import {motion, useAnimate} from 'framer-motion';

const Home : FC = () =>{

    const navigate = useNavigate();

    

    return(
        <motion.section
        className="Page-component Home-section">
            <div className="Moving-box">
                <div className="Box-content">
                    <h2>Mark Kiss</h2>
                    
                </div>
            </div>
            
        </motion.section>
    );
};

export default Home;


/**
 * <div className="Hero Hero-bottom" onClick={()=>{navigate("/cv")}}>
                <h2 className="Hero-title">Lorem Ipsum</h2>
                <h3 className="Hero-subtitle">Dolor sit amet, consectetur adipiscing elit</h3>
                <div className="Hero-border "></div>
            </div>
 * 
 */

/***
 * <motion.div 
                    whileTap={{scale: .90}}
                    transition={{duration: .25}}
                    onClick={()=>{navigate("/about")}}
                    className="Triangle">
                    </motion.div>
 * 
 * 
 */