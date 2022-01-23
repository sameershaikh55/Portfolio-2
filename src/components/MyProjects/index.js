import React from "react";

import { useEffect } from "react";
import { useState } from "react";

// import { states } from "../../Context/Context";
import { gettingData } from "../../service";

import SingleProject from "./SingleProject";

const MyProjects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		gettingData().then((res) => setProjects(res));
	}, []);

	return (
		<>
			<div id="Projects" className="myProjectsContainer">
				<div className="container">
					<div className="section-title">
						<h2 style={{ fontSize: "6rem" }}>
							<b>My Projects</b>
						</h2>
					</div>
					<div className="row sibling-fade">
						{projects.map((prev) => {
							return <SingleProject detail={prev} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default MyProjects;
