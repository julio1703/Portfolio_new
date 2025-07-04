import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import CV from "../components/homepage/cv";
import SkillGrid from "../components/about/skillGrid";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
                                                <div className="about-right-side">
                                                        <div className="title about-title">
                                                                {INFO.about.title}
                                                        </div>

                                                       <div className="subtitle about-subtitle">
                                                               {INFO.about.description}
                                                       </div>

                                                       <div className="title skill-grid-title">Stack Skills (Memory Game)</div>

                                                       <SkillGrid />
                                                </div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

                                                                <div className="about-socials">
                                                                        <CV />
                                                                </div>
							</div>
						</div>
                                                <div className="about-socials-mobile">
                                                        <CV />
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

export default About;
