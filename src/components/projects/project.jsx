import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faLock } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
       const { logo, title, description, stack, linkText, link, locked, unlockMessage } = props;

        return (
                <React.Fragment>
                        <div className="project-wrapper">
                                <div className={`project${locked ? " locked" : ""}`}>
                                        <Link to={link} className="project-link-anchor">
                                                <div className="project-container">
                                                <div className="project-logo">
                                                        <img src={logo} alt="logo" />
                                                </div>
                                                <div className="project-title">{title}</div>
                                               <div className="project-description">{description}</div>
                                               {stack && (
                                                       <div className="project-stack">{stack}</div>
                                               )}
                                               <div className="project-link">
                                                        <div className="project-link-icon">
                                                                <FontAwesomeIcon icon={faLink} />
                                                        </div>

                                                        <div className="project-link-text">{linkText}</div>
                                                </div>
                                                </div>
                                        </Link>
                                </div>
                                {locked && (
                                        <div className="locked-overlay">
                                                <FontAwesomeIcon icon={faLock} className="lock-icon" />
                                                {unlockMessage && (
                                                        <div className="locked-text">{unlockMessage}</div>
                                                )}
                                        </div>
                                )}
                        </div>
                </React.Fragment>
        );
};

export default Project;
