import {FC, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Home-page.css";
import {motion, useAnimate} from 'framer-motion';

const Home : FC = () =>{

    const navigate = useNavigate();

    const [scope, animate] = useAnimate();

    async function myAnimation(){
        await animate(scope.current, {y: "25%"}, {duration: 1});
        await animate(scope.current, {y: 0}, {duration: .25});
    }

    useEffect(()=>{
        myAnimation();
    }, []);

    return(
        <motion.section
        ref={scope}
        initial={{y: "-100%"}}
        className="Page-component Home-section">
            <div className="Hero Hero-top" onClick={()=>{navigate("/about")}}>
                <motion.span>
                    <h2 className="Hero-title">Mark Kiss</h2>
                    <h3 className="Hero-subtitle">Enthusiast, young web developer from Hungary</h3>
                </motion.span>
                
                <div className="Hero-border"></div>
            </div>
            <div className="Hero Hero-middle" onClick={()=>{navigate("/projects")}}>

                <h2 className="Hero-title">My work</h2>
                <h3 className="Hero-subtitle">The only way to learn is to practise</h3>
                <div className="Hero-border"></div>
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