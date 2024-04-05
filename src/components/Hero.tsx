import React, {FC} from 'react';
import "../styles/component_styles/Hero.css";
import {NavLink} from "react-router-dom";
import {ReactTyped} from "react-typed";

const WORDS: string[] = ['React', 'JavaScript', 'TypeScript', 'PHP', 'MySQL', 'HTML', 'CSS', 'WebSockets'];
const Hero: FC = () => {

    return (
        <section className={"Hero--section"}>
            <h1>Hello, my name is Mark</h1>
            <h2>I like coding with <ReactTyped strings={WORDS} typeSpeed={300} loop backSpeed={100} cursorChar={"|"} showCursor={true}/> </h2>
            <div className="Hero-bottom">
                <p>Lover of web development and gold winner of the WorldSkills UK 2023
                    Web Development competition.
                </p>
                <div className="Buttons">
                    <NavLink className={"Action-button"} to={"/about"}>Explore me</NavLink>
                    <NavLink className={"Action-button"} to={"/projects"}>Explore my projects</NavLink>
                </div>
            </div>
        </section>
    );
};

export default Hero;