import React, {FC} from 'react';
import "../styles/component_styles/Hero.css";
import {NavLink} from "react-router-dom";
import {ReactTyped} from "react-typed";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiagramProject} from "@fortawesome/free-solid-svg-icons";

const WORDS: string[] = ['React', 'JavaScript', 'TypeScript', 'PHP', 'MySQL', 'HTML', 'CSS', 'SocketIO', 'Git', 'GitHub'];
const Hero: FC = () => {

    return (
        <section className={"Hero--section"}>
            <h1>Hello, my name is Mark Kiss</h1>
            <h2>I like working with <br></br> <ReactTyped strings={WORDS} typeSpeed={200} loop backSpeed={75} cursorChar={"|"} showCursor/> </h2>
            <div className="Hero-bottom">
                <p>
                    <span>Lover of web development and gold winner of the WorldSkills UK 2023
                        Web Development competition.</span>
                </p>
                <div className="Buttons">
                    <NavLink className={"Action-button"} to={"/about"}>More about me
                        <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                    <NavLink className={"Action-button"} to={"/projects"}>Explore my projects
                        <FontAwesomeIcon icon={faDiagramProject} />
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Hero;