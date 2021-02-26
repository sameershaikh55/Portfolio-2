import React from "react";

const SingleFeature = ({ Title, Icon, Desc, Active }) => {
	return (
		<div className="col-lg-4 col-md-6">
			<div className={`single-features ${Active}`}>
				<div className="icon">
					<Icon />
				</div>
				<h3>{Title}</h3>
				<p>{Desc}</p>
			</div>
		</div>
	);
};

export default SingleFeature;
