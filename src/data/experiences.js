import React from "react";

function experience_1() {
	return {
		date: "2021 - 2022",
		title: "Kav Mashve - Webahead",
		description: "Intensive JavaScript Full Stack Coding Bootcamp ",
		keywords: [
			"The Benefits of Cloud Computing",
			"Julio",
			"Julio E",
			"Julio Elias",
		],
		style: `
				.experience-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="experience-content">
					<div className="paragraph">
						Topics covered: HTML, CSS, JavaScript, Node.js,
						PostgreSQL, Express.js
					</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function experience_2() {
	return {
		date: "2023 - PRESENT",
		title: "Shenkar College",
		description: "Bachelor of Software Engineer & Game Design Student",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Julio",
			"Julio E",
			"Julio Elias",
		],
		body: (
			<React.Fragment>
				<h1>
					Courses: Full Stack Development, Software Architecture,
					Algorithms
				</h1>
			</React.Fragment>
		),
	};
}

function experience_3() {
	return {
		date: "2022 - 2023",
		title: "GrayMatters Health",
		description: "Front End Developer",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Julio",
			"Julio E",
			"Julio Elias",
		],
		body: (
			<React.Fragment>
				<h1>
					GrayMatters Health develops non-invasive therapeutics for
					mental disorders through the regulation of brain processes.
					Tech Stack: HTML, CSS, JavaScript, Express, and React.
				</h1>
			</React.Fragment>
		),
	};
}

const myExperiences = [experience_1, experience_2, experience_3];

export default myExperiences;
