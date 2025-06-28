import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/experience.css";

const Experience = (props) => {
	const { date, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="experience">
				<div className="experience-left-side">
					<div className="experience-date">{date}</div>
				</div>

				<Link to={link}>
					<div className="experience-right-side">
						<div className="experience-title">{title}</div>
						<div className="experience-description">{description}</div>
						<div className="experience-link">
							Read Experience{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Experience;
