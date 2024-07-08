import React, {FC, useMemo} from 'react';
import PageTemplate from "./PageTemplate";
import "../styles/component_styles/Projects.css";
import ProjectBox from "../components/ProjectBox";

interface IProject{
    projectTitle: string;
    projectExcerpt: string;
    projectImage: any;
    projectLink: string;
    projectGithubLink: string;
}

const PROJECTS : IProject[] = [
    {
        projectTitle: "DineEase",
        projectExcerpt: "Design implementation of a WorldSkills competition practise task. Made with React and TypeScript",
        projectImage: "https://i.ibb.co/pxww2Rj/DineEase.png",
        projectLink: "https://dineease-9bnx.onrender.com/",
        projectGithubLink: "https://github.com/InterMaus1154/dineease"
    },
    {
        projectTitle: "Multiplayer Snake Game",
        projectExcerpt: "(Local) Multiplayer snake game made in React and TypeScript. To be controlled with WASD and arrow keys",
        projectImage: "https://i.ibb.co/k2DPXLZ/snake.png",
        projectLink: "https://react-snake-multiplayer.onrender.com/",
        projectGithubLink: "https://github.com/InterMaus1154/react-snake-multiplayer/"
    },
    {
        projectTitle: "Verina To-do App",
        projectExcerpt: "To-do web application, with React on the frontend, Express on the backend, all connected via websockets.",
        projectImage: "https://i.ibb.co/sFmspFs/todo-logo.png",
        projectLink: "https://verinatodoappbeta.onrender.com/",
        projectGithubLink: "https://github.com/InterMaus1154/react-ts-todo"
    },
    {
        projectTitle: "HotBeans Web Development",
        projectExcerpt: "HotBeansWeb is a fictional company, made for school assignment in React. Designed and implemented by me.",
        projectImage: "https://i.ibb.co/crxT0HT/hotbeans.png",
        projectLink: "https://hotbeans.onrender.com/",
        projectGithubLink: "https://github.com/InterMaus1154/hotbeans"
    },
    {
        projectTitle: "KimCorp Power",
        projectExcerpt: "Design implementation of a WorldSkills competition practise task. Made with HTML, CSS and minimal JavaScript",
        projectImage: "https://i.ibb.co/n7R7c2R/kimcorp-logo.png",
        projectLink: "https://kimcorp-power.onrender.com/",
        projectGithubLink: "https://github.com/InterMaus1154/kimcorp-worldskills"
    },
];

const Projects: FC = () => {

    const projects = useMemo(()=> PROJECTS, [PROJECTS]);

    return (
        <PageTemplate className={"Projects--section"}>
            <h1 className={"Section--title"}>&#60;projects&#62;</h1>
            <div className="Projects-container">
                {
                    projects.map((project, idx) => {
                        return <ProjectBox
                            projectTitle={project.projectTitle}
                            projectExcerpt={project.projectExcerpt}
                            projectImage={project.projectImage}
                            projectLink={project.projectLink}
                            projectGithubLink={project.projectGithubLink}
                            key={project.projectTitle}
                        />
                    })
                }

            </div>
        </PageTemplate>
    );
};

export default Projects;