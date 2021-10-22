import React from "react";

import htmlImg from "../../assets/SkillsImages/html.png";
import cssImg from "../../assets/SkillsImages/css.png";
import jsImg from "../../assets/SkillsImages/js.png";
import bootstrapImg from "../../assets/SkillsImages/bootstrap.png";
import reactjsImg from "../../assets/SkillsImages/reactjs.png";
import materialUIImg from "../../assets/SkillsImages/materialUI.png";
import reduxImg from "../../assets/SkillsImages/redux.png";
import firebase from "../../assets/SkillsImages/firebase.png";
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
		{
			img: reduxImg,
			alt: "redux",
			height: "10rem",
			// marginLeft: "40px",
		},
		{
			img: firebase,
			alt: "Firebase",
			height: "6rem",
		},
	];

	return (
		<>
			<div className="SkillsContainer bg-white">
				<div className="SC-Slider">
					<Slide bottom cascade>
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
					</Slide>
				</div>
			</div>
		</>
	);
};

export default SkillsDisplay;
