import React, {FC} from 'react';
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
        projectTitle: "Verina To-do App",
        projectExcerpt: "To-do web application made using React on the frontend, and NodeJS on the backend, communicating through WebSockets",
        projectImage: "https://placehold.co/600x400",
        projectLink: "https://verinatodoappbeta.onrender.com/",
        projectGithubLink: "https://github.com/InterMaus1154/react-ts-todo"
    },
    {
        projectTitle: "DineEase",
        projectExcerpt: "Design implementation of a WorldSkills competition practise task. Made with React and TypeScript",
        projectImage: "https://i.ibb.co/pxww2Rj/DineEase.png",
        projectLink: "https://dineease-9bnx.onrender.com/",
        projectGithubLink: "https://github.com/InterMaus1154/dineease"
    },
    {
        projectTitle: "KimCorp Power",
        projectExcerpt: "Design implementation of a WorldSkills competition practise task. Made with HTML, CSS and minimal JavaScript",
        projectImage: "https://placehold.co/600x400",
        projectLink: "https://kimcorp-power.onrender.com/",
        projectGithubLink: "https://github.com/InterMaus1154/kimcorp-worldskills"
    },
    {
        projectTitle: "HotBeans Web Development",
        projectExcerpt: "HotBeansWeb is a fictional company, made for school assignment in React. Designed and implemented by me.",
        projectImage: "https://i.ibb.co/crxT0HT/hotbeans.png",
        projectLink: "https://hotbeans.onrender.com/",
        projectGithubLink: "https://github.com/InterMaus1154/hotbeans"
    },
];

const Projects: FC = () => {
    return (
        <PageTemplate className={"Projects--section"}>
            <h1 className={"Section--title"}>Projects</h1>
            <div className="Projects-container">
                {
                    PROJECTS.map((project, idx) => {
                        return <ProjectBox
                            projectTitle={project.projectTitle}
                            projectExcerpt={project.projectExcerpt}
                            projectImage={project.projectImage}
                            projectLink={project.projectLink}
                            projectGithubLink={project.projectGithubLink}
                        />
                    })
                }

            </div>
        </PageTemplate>
    );
};

export default Projects;