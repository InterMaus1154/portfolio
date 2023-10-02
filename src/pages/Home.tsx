import {FC, useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Home-page.css";
import {easeIn, motion, useAnimate} from 'framer-motion';
import TiltedCard from '../components/TiltedCard';




const Home : FC = () =>{

    return(
        <section 
        className="Page-component Home-section">
            <div className="Home-element">
                <div className="Section-title">
                    
                </div>
                <div className="Text-box">
                    <span><p>Lorem Ipsum</p></span>
                    <span><p>Lorem Ipsum</p></span>
                    <span><p>Lorem Ipsum</p></span>
                </div>
            </div>
            
        </section>
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