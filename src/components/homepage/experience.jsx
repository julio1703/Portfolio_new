import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faLock } from "@fortawesome/free-solid-svg-icons";

import "./styles/experience.css";

const Experience = (props) => {
        const { title, description, date, link, locked, unlockMessage } = props;

	return (
		<React.Fragment>
                        <div className="homepage-experience-wrapper">
                                <div className={`homepage-experience${locked ? " locked" : ""}`}>
                                        <div className="homepage-experience-content">
					<div className="homepage-experience-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-experience-title">{title}</div>
					<div className="homepage-experience-description">
						{description}
					</div>
					<div className="homepage-experience-link">
                                                <Link to={link} className="homepage-experience-link-anchor">
                                                        Read experience{" "}
                                                        <FontAwesomeIcon
                                                                style={{ fontSize: "10px" }}
                                                                icon={faChevronRight}
                                                        />
                                                </Link>
                                        </div>
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
                        </div>
                </React.Fragment>
        );
};

export default Experience;
