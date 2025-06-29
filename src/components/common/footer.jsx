import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">About</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Projects</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/experiences">Experiences</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
				<div className="footer-credits">
					<div className="footer-socials">
						<a
							href={INFO.socials.linkedin}
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								className="footer-social-icon"
							/>
						</a>
						<a
							href={INFO.socials.github}
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								icon={faGithub}
								className="footer-social-icon"
							/>
						</a>
						<a
							href={`mailto:${INFO.main.email}`}
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								icon={faEnvelope}
								className="footer-social-icon"
							/>
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
