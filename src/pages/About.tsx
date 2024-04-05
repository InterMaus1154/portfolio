import {FC} from 'react';
import PageTemplate from "./PageTemplate";
import "../styles/component_styles/About.css";

const About: FC = () => {
    return (
        <PageTemplate className={"About--section"}>
            <h1 className="Section--title">What makes me <i>"me"</i></h1>
            <div className="Introduction-box">
                <h2>Motivation</h2>
                <div className="Introduction-box-body">
                    <div className="Introduction-text">

                    </div>
                    <figure>
                        <img src="https://i.ibb.co/QYP2y0w/me.jpg" alt="Mark Kiss"/>
                        <figcaption>WorldSkills UK 2023: Web Development</figcaption>
                    </figure>
                </div>
            </div>
            <div className="Introduction-box">
                <h2>Skills</h2>
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