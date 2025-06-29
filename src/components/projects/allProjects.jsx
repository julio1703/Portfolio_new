import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = ({ locked }) => {
        const message = "Visit the Projects page to unlock";
        return (
                <div className="all-projects-container">
                        {INFO.projects.map((project, index) => (
                                <div className="all-projects-project" key={index}>
                                       <Project
                                               logo={project.logo}
                                               title={project.title}
                                               description={project.description}
                                               stack={project.stack}
                                               linkText={project.linkText}
                                               link={project.link}
                                               locked={locked}
                                               unlockMessage={locked ? message : null}
                                       />
                                </div>
                        ))}
                </div>
        );
};

export default AllProjects;
