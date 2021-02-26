import React from "react";

import htmlIMG from "../SkillsDisplay/SkillsImages/html.png";
import cssIMG from "../SkillsDisplay/SkillsImages/css.png";
import jsIMG from "../SkillsDisplay/SkillsImages/js.png";
import bootstrapIMG from "../SkillsDisplay/SkillsImages/bootstrap2.png";
import reactjsIMG from "../SkillsDisplay/SkillsImages/reactjs.png";
import materialUI from "../SkillsDisplay/SkillsImages/materialUI.png";

// IMPORTING SINGLE-EXP COMPONENT
import SingleExperience from "./SingleExperience";

function Experience() {
	let percentage = [90, 85, 50, 90, 50, 75];
	let [html, css, js, bootstrap, reactjs, materialui] = percentage;

	return (
		<div className="ExpContainer">
			<div className="container">
				<div class="section-title">
					<h2>
						<b>Experience</b>
					</h2>
				</div>
				<div className="row justify-content-center">
					<SingleExperience
						Title="HTML"
						Img={htmlIMG}
						Percentage={html}
						GradientC_1="#ff4100"
						GradientC_2="#ff9a78"
						TextColor="#ff6935"
					/>
					<SingleExperience
						Title="CSS"
						Img={cssIMG}
						Percentage={css}
						GradientC_1="#008cfc"
						GradientC_2="#9bd2fe"
						TextColor="#008cfc"
					/>
					<SingleExperience
						Title="JavaScript"
						Img={jsIMG}
						Percentage={js}
						GradientC_1="#fddb22"
						GradientC_2="#ffef96"
						TextColor="#fee03e"
					/>
					<SingleExperience
						Title="Bootstrap"
						Img={bootstrapIMG}
						Percentage={bootstrap}
						GradientC_1="#5d329d"
						GradientC_2="#c0a7e6"
						TextColor="#8a67be"
					/>
					<SingleExperience
						Title="React JS"
						Img={reactjsIMG}
						Percentage={reactjs}
						GradientC_1="#4da5bd"
						GradientC_2="#dbf7ff"
						TextColor="#c4e6f0"
					/>
					<SingleExperience
						Title="Material UI"
						Img={materialUI}
						Percentage={materialui}
						GradientC_1="#005387"
						GradientC_2="#addfff"
						TextColor="#84bee3"
					/>
					{/* <div class="col-lg-3 col-md-4 col-sm-6">
						<div className="singleExperience text-center">
							<div>
								<h1>
									HTML <img src={htmlIMG} alt="" />
								</h1>
								<VisibilitySensor>
									{({ isVisible }) => {
										const Vhtml = isVisible ? html : 0;

										return (
											<CircularProgressbar
												value={Vhtml}
												text={`${Vhtml}%`}
												className="SProgressBar html"
												styles={{
													path: {
														stroke: `rgba(277, 76, 37, ${html / 100})`,
													},
													text: {
														fill: `rgba(277, 76, 37, ${html / 100})`,
														fontSize: "2rem",
													},
												}}
											/>
										);
									}}
								</VisibilitySensor>
							</div>
						</div>
					</div> */}
					{/* <div class="col-lg-3 col-md-4 col-sm-6">
						<div className="singleExperience text-center">
							<div>
								<h1>
									CSS <img src={cssIMG} alt="" />
								</h1>
								<CircularProgressbar
									value={css}
									text={`${css}%`}
									className="SProgressBar css"
								/>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-4 col-sm-6">
						<div className="singleExperience text-center">
							<div>
								<h1>
									JavaScript <img src={jsIMG} alt="" />
								</h1>
								<CircularProgressbar
									value={js}
									text={`${js}%`}
									className="SProgressBar javascript"
								/>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-4 col-sm-6">
						<div className="singleExperience text-center">
							<div>
								<h1>
									Bootstrap <img src={bootstrapIMG} alt="" />
								</h1>
								<CircularProgressbar
									value={bootstrap}
									text={`${bootstrap}%`}
									className="SProgressBar bootstrap"
								/>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default Experience;
