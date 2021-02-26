import React from "react";

import { CircleProgress } from "react-gradient-progress";
import VisibilitySensor from "react-visibility-sensor";

// COUNT UP PACKAGE
import Tilt from "react-vanilla-tilt";

const SingleExperience = ({
	Title,
	Img,
	Percentage,
	GradientC_1,
	GradientC_2,
	TextColor,
}) => {
	return (
		<div class="col-lg-3 col-md-4 col-sm-6">
			<div
				style={{
					background: `linear-gradient(to right, ${GradientC_1}, ${GradientC_2})`,
				}}
				className="singleExperience text-center"
			>
				<div className="innerSingleExp">
					<h1>
						{Title}&nbsp;
						<img src={Img} alt="" />
					</h1>
					<VisibilitySensor>
						{({ isVisible }) => {
							const Vhtml = isVisible
								? Percentage
								: // <CountUp end={Percentage} duration={4} />
								  0;

							return (
								<CircleProgress
									percentage={Vhtml}
									strokeWidth={12}
									secondaryColor="#000"
									primaryColor={[GradientC_1, GradientC_2]}
									width={175}
									fontColor={TextColor}
									fontSize="2.7rem"
									fill="#1c1c1c"
								/>
							);
						}}
					</VisibilitySensor>
				</div>
			</div>
		</div>
	);
};

export default SingleExperience;
