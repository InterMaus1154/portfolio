import {FC, useRef, useContext} from 'react';
import { motion, TargetAndTransition } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSelector : FC = () =>{

    const {setTheme} = useContext(ThemeContext);

    const hoverStyle : TargetAndTransition = {
        backgroundColor: "var(--theme-hover-clr)"
    };

    const optionsRef = useRef<HTMLDivElement>(document.createElement("div"));

    const toggleThemeMenu = () : void =>{
        optionsRef.current.classList.toggle("Theme-selector-not-visible");
    };

    return(
        <span className="Theme-selector">
            <a className="Theme-selector-button" onClick={toggleThemeMenu}>Theme
                <svg width="15" height="15" viewBox="-2.5 -5 75 60" preserveAspectRatio="none">
                    <path d="M0,0 l35,50 l35,-50" fill="none" stroke="var(--primary-txt-clr)" stroke-linecap="round" stroke-width="5" />
                </svg>
            </a>
            <div className={"Theme-selector-not-visible Theme-selector-options"} ref={optionsRef}>
                <motion.div 
                whileHover={hoverStyle}
                className="Theme-option"
                onClick={()=>{setTheme("light")}}
                >
                    <span className="Theme-sample" style={{backgroundColor: "#FFFFFF"}}></span>
                    <span className="Theme-name">Light</span>
                </motion.div>

                <motion.div 
                whileHover={hoverStyle}
                className="Theme-option"
                onClick={()=>{setTheme("dark")}}
                >
                    <span className="Theme-sample" style={{backgroundColor: "#000000", border: "1px solid white"}}></span>
                    <span className="Theme-name">Dark</span>
                </motion.div>

            </div>
        </span>
    );
        
};  

export default ThemeSelector;