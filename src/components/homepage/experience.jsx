import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/experience.css";

const Experience = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<div className="homepage-experience">
				<div className="homepage-experience-content">
					<div className="homepage-experience-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-experience-title">{title}</div>
					<div className="homepage-experience-description">
						{description}
					</div>
					<div className="homepage-experience-link">
						<Link to={link}>
							Read experience{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experience;
