import React, { useState } from "react";

// IMPORTING TILT
import Tilt from "react-tilt";

// IMPORTING PROJECT MODAL
import AlertDialogSlide from "./ProjectModal";

import Fade from "react-reveal/Fade";

const SingleProject = ({ detail }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const {
		description,
		link,
		name,
		picture: {
			fields: {
				file: { url },
			},
		},
	} = detail.fields;

	return (
		<>
			<div className="col-lg-4 col-md-6 col-sm-6 mb-5 SingleProjectQ">
				<Fade left>
					<Tilt className="Tilt" options={{ max: 25, scale: 1.02 }}>
						<div className="singlePContainer">
							<img src={url} alt={name} />
							<div className="singlePContainerBody">
								<h1> {name} </h1>
								<div class="wrapper">
									<button onClick={handleClickOpen}>
										<span>View More</span>
									</button>
								</div>
							</div>
						</div>
					</Tilt>
					<AlertDialogSlide
						PopUpImage={url}
						PopUpTitle={name}
						PopUpDesc={description}
						OpenBtn={open}
						SetOpenBtn={setOpen}
						Url={link}
					/>
				</Fade>
			</div>
		</>
	);
};

export default SingleProject;
