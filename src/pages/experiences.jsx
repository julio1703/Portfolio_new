import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Experience from "../components/experiences/experience";

import INFO from "../data/user";
import SEO from "../data/seo";
import myExperiences from "../data/experiences";

import "./styles/experiences.css";

const Experiences = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "experiences");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`experiences | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="experiences" />
				<div className="content-wrapper">
					<div className="experiences-logo-container">
						<div className="experiences-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="experiences-main-container">
						<div className="title experiences-title">
							{INFO.experiences.title}
						</div>

						<div className="subtitle experiences-subtitle">
							{INFO.experiences.description}
						</div>

						<div className="experiences-container">
							<div className="experiences-wrapper">
                                                               {myExperiences.map((experience, index) => (
                                                                        <div
                                                                               className="experiences-experience"
                                                                               key={(index + 1).toString()}
                                                                        >
                                                                               <Experience
                                                                                       key={(index + 1).toString()}
                                                                                       date={experience().date}
                                                                                       title={experience().title}
                                                                                       description={experience().description}
                                                                                       link={"/experience/" + (index + 1)}
                                                                                       type={experience().type}
                                                                               />
                                                                        </div>
                                                               ))}
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

export default Experiences;
