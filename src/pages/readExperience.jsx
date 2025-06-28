import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myExperiences from "../data/experiences";

import "./styles/readExperience.css";

let ExperienceStyle = styled.div``;

const ReadExperience = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const experience = myExperiences[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [experience]);

	ExperienceStyle = styled.div`
		${experience().style}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${experience().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={experience().description} />
				<meta name="keywords" content={experience().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-experience-logo-container">
						<div className="read-experience-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-experience-container">
						<div className="read-experience-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-experience-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-experience-wrapper">
							<div className="read-experience-date-container">
								<div className="read-experience-date">
									{experience().date}
								</div>
							</div>

							<div className="title read-experience-title">
								{experience().title}
							</div>

							<div className="read-experience-body">
								<ExperienceStyle>{experience().body}</ExperienceStyle>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadExperience;
