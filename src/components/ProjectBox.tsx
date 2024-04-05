import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

interface IProjectBox {
    projectTitle: string;
    projectExcerpt: string;
    projectImage: any;
    projectLink: string;
    projectGithubLink: string;
}

const ProjectBox: FC<IProjectBox> = ({projectTitle, projectExcerpt, projectImage, projectGithubLink, projectLink}) => {
    return (
        <div className={"Project-box"}>
            <div className="Project-header">
                <div className="Project-image">
                    <img src={projectImage} alt={"The project banner image of project " + projectTitle}/>
                </div>
            </div>
            <div className="Project-body">
                <h1 className="Project-title">{projectTitle}</h1>
                <p className="Project-excerpt">{projectExcerpt}</p>
                <div className="Project-links">
                    <a href={projectLink} target={"_blank"} className={"Action-button"} rel="noreferrer">Page</a>
                    <a href={projectGithubLink} target={"_blank"} className={"Action-button"} rel="noreferrer">GitHub</a>
                </div>
            </div>


        </div>
    );
};

export default ProjectBox;