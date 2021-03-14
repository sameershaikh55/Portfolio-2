import React from "react";

import htmlImg from "./SkillsImages/html.png";
import cssImg from "./SkillsImages/css.png";
import jsImg from "./SkillsImages/js.png";
import bootstrapImg from "./SkillsImages/bootstrap.png";
import reactjsImg from "./SkillsImages/reactjs.png";
import materialUIImg from "./SkillsImages/materialUI.png";

import Slide from "react-reveal/Slide";

const SkillsDisplay = () => {
	const SkillsData = [
		{
			img: htmlImg,
			alt: "html",
			height: "11rem",
		},
		{
			img: cssImg,
			alt: "css",
			height: "11rem",
			// marginLeft: "45px",
		},
		{
			img: jsImg,
			alt: "js",
			height: "10rem",
			// marginLeft: "60px",
		},
		{
			img: bootstrapImg,
			alt: "bootstrap",
			height: "13.2rem",
			// marginLeft: "40px",
		},
		{
			img: reactjsImg,
			alt: "reactjs",
			height: "8rem",
			// marginLeft: "45px",
		},
		{
			img: materialUIImg,
			alt: "materialUI",
			height: "13.2rem",
			// marginLeft: "40px",
		},
	];

	return (
		<>
			<div className="SkillsContainer bg-white">
				<div className="SC-Slider">
					{/* <Slide bottom cascade> */}
					<div className="SC-Slide">
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
					<div className="SC-Slide">
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
					<div className="SC-Slide">
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
					<div className="SC-Slide">
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
					{/* </Slide> */}
				</div>
			</div>
		</>
	);
};

export default SkillsDisplay;
