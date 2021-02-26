import React from "react";

// REACT ICONS
import { CgNotes } from "react-icons/cg";
import { BsBarChartFill } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import SingleFeature from "./SingleFeature";

const Features = () => {
	return (
		<section className="features-area ptb-100 bg-image">
			<div className="container">
				<div className="section-title">
					<span>Our Features</span>
					<h2>
						I am Always Try To <b>Understand</b> Users Expectation
					</h2>
				</div>
				<div className="row">
					<SingleFeature
						Title="Creative Design"
						Icon={CgNotes}
						Desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore."
					/>
					<SingleFeature
						Title="Business Growth"
						Icon={BsBarChartFill}
						Desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore."
						Active="active"
					/>
					<SingleFeature
						Title="Responsive Design"
						Icon={FaMobileAlt}
						Desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore."
					/>
				</div>
			</div>
		</section>
	);
};

export default Features;
