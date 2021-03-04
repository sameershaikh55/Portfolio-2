import React from "react";

import htmlImg from "./SkillsImages/html.png";
import cssImg from "./SkillsImages/css.png";
import jsImg from "./SkillsImages/js.png";
import bootstrapImg from "./SkillsImages/bootstrap.png";
import reactjsImg from "./SkillsImages/reactjs.png";
import materialUIImg from "./SkillsImages/materialUI.png";

const SkillsDisplay = () => {
	const SkillsData = [
		{
			img: htmlImg,
			alt: "html",
			height: "15rem",
		},
		{
			img: cssImg,
			alt: "css",
			height: "15rem",
			// marginLeft: "45px",
		},
		{
			img: jsImg,
			alt: "js",
			height: "13.8rem",
			// marginLeft: "60px",
		},
		{
			img: bootstrapImg,
			alt: "bootstrap",
			height: "17.2rem",
			// marginLeft: "40px",
		},
		{
			img: reactjsImg,
			alt: "reactjs",
			height: "10.2rem",
			// marginLeft: "45px",
		},
		{
			img: materialUIImg,
			alt: "materialUI",
			height: "17.2rem",
			// marginLeft: "40px",
		},
	];

	return (
		<>
			<div className="SkillsContainer bg-white">
				{SkillsData.map((preImg, index) => {
					return (
						<span key={index}>
							<img
								src={preImg.img}
								alt={preImg.alt}
								style={{ height: preImg.height }}
							/>
						</span>
					);
				})}
			</div>
		</>
	);
};

export default SkillsDisplay;
