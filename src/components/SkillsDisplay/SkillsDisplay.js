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
			height: "150px",
		},
		{
			img: cssImg,
			alt: "css",
			height: "150px",
			marginLeft: "45px",
		},
		{
			img: jsImg,
			alt: "js",
			height: "138px",
			marginLeft: "60px",
		},
		{
			img: bootstrapImg,
			alt: "bootstrap",
			height: "172px",
			marginLeft: "40px",
		},
		{
			img: reactjsImg,
			alt: "reactjs",
			height: "102px",
			marginLeft: "45px",
		},
		{
			img: materialUIImg,
			alt: "materialUI",
			height: "172px",
			marginLeft: "40px",
		},
	];

	return (
		<div className="SkillsContainer">
			{SkillsData.map((preImg) => {
				return (
					<span>
						<img
							src={preImg.img}
							alt={preImg.alt}
							style={{ height: preImg.height, marginLeft: preImg.marginLeft }}
						/>
					</span>
				);
			})}
			{/* <span>
				<img src={htmlImg} alt="lol" style={{ height: "150px" }} />
			</span>
			<span>
				<img
					src={cssImg}
					alt="lol"
					style={{ height: "150px", marginLeft: "45px" }}
				/>
			</span>
			<span>
				<img
					src={jsImg}
					alt="lol"
					style={{ height: "138px", marginLeft: "60px" }}
				/>
			</span>
			<span>
				<img
					src={bootstrapImg}
					alt="lol"
					style={{ height: "172px", marginLeft: "40px" }}
				/>
			</span>
			<span>
				<img
					src={reactjsImg}
					alt="lol"
					style={{ height: "102px", marginLeft: "45px" }}
				/>
			</span>
			<span>
				<img
					src={materialUIImg}
					alt="lol"
					style={{ height: "172px", marginLeft: "40px" }}
				/>
			</span> */}
		</div>
	);
};

export default SkillsDisplay;
