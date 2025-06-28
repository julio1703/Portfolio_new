import React from "react";

function experience_1() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
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
					<div className="paragraph">Content of experience 1</div>
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
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Julio",
			"Julio E",
			"Julio Elias",
		],
		body: (
			<React.Fragment>
				<h1>Content of experience 2</h1>
			</React.Fragment>
		),
	};
}

const myExperiences = [experience_1, experience_2];

export default myExperiences;
