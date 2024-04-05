import {FC} from 'react';
import PageTemplate from "./PageTemplate";
import "../styles/component_styles/About.css";
import {faHtml5, faCss3, faJs, faReact, faPhp, faGithub, faGit} from "@fortawesome/free-brands-svg-icons";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const About: FC = () => {
    return (
        <PageTemplate className={"About--section"}>
            <h1 className="Section--title">What makes me <i>"me"</i></h1>
            <div className="Introduction-box">
                <h2>Technical Skills</h2>
                <div className="Introduction-box-body">
                    <div className="Introduction-text">
                        {/*<p>I am the most competent in the following languages and frameworks/libraries:</p>*/}
                        <ul className={"Skill-list"}>
                            <li title={"HTML5"} aria-label={"HTML5"}>
                                <FontAwesomeIcon icon={faHtml5}/>
                            </li>
                            <li title={"CSS"} aria-label={"CSS"}>
                                <FontAwesomeIcon icon={faCss3}/>
                            </li>
                            <li title={"JavaScript"} aria-label={"JavaScript"}>
                                <FontAwesomeIcon icon={faJs}/>
                            </li>
                            <li title={"TypeScript"} aria-label={"TypeScript"}>
                                <i className="fi fi-brands-typescript"></i>
                            </li>
                            <li title={"ReactJs"} aria-label={"ReactJs"}>
                                <FontAwesomeIcon icon={faReact}/>
                            </li>
                            <li title={"PHP"} aria-label={"PHP"}>
                                <FontAwesomeIcon icon={faPhp}/>
                            </li>
                            <li title={"MySQL"} aria-label={"MySQL"}>
                                <FontAwesomeIcon icon={faDatabase}/>
                            </li>
                            <li className={"Has-svg"} title={"Socket IO"} aria-label={"Socket IO"}>
                                <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg"
                                     preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 256" id="socket">
                                    <path fill="#010101"
                                          d="M96.447 7.382c32.267-8.275 67.929-3.453 96.386 14.11 35.84 21.433 59.238 61.976 59.833 103.71 1.31 42.15-20.659 83.944-55.963 106.865-39.293 26.433-93.648 27.446-133.775 2.322-40.9-24.41-64.774-73.645-58.641-120.916 4.94-49.95 43.52-94.005 92.16-106.09z"></path>
                                    <path
                                          d="M91.505 27.803c60.964-24.41 135.74 20.658 142.05 86.028 9.824 58.82-38.995 118.593-98.59 120.32-56.677 5.656-111.449-42.39-113.056-99.304-4.227-46.08 26.136-91.803 69.596-107.044z"></path>
                                    <path fill="#010101"
                                          d="M97.637 121.69c27.327-22.326 54.058-45.426 81.98-67.097-14.646 22.505-29.708 44.711-44.354 67.215-12.562.06-25.123.06-37.626-.119zM120.737 134.132c12.621 0 25.183 0 37.745.179-27.505 22.206-54.117 45.484-82.099 67.096 14.646-22.505 29.708-44.77 44.354-67.275z"></path>
                                </svg>
                            </li>
                            <li title={"Git"} aria-label={"Git"}>
                                <FontAwesomeIcon icon={faGit}/>
                            </li>
                            <li title={"Github"} aria-label={"Github"}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="Introduction-box">
                <h2>Achievements</h2>
                <div className="Introduction-box-body">
                    <div className="Introduction-text">
                        <p>In 2023, encouraged by my teacher, I applied for the WorldSkills Web Development competition.</p>
                    </div>
                    <figure>
                        <img src="https://i.ibb.co/QYP2y0w/me.jpg" alt="Mark Kiss"/>
                        <figcaption>WorldSkills UK 2023: Web Development</figcaption>
                    </figure>
                </div>
            </div>

            <div className="Introduction-box">
                <h2>Interests</h2>
            </div>
            <div className="Introduction-box">
                <h2>Social</h2>
            </div>
        </PageTemplate>
    );
};

export default About;