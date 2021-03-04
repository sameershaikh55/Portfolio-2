import React from "react";

import video from "./video/video.mp4";

const Home = () => {
	return (
		<>
			<div id="About" className="HomeContainer">
				<video autoPlay loop muted src={video} />
			</div>
			<div className="AboutUS">
				<div className="text-center">
					<h1>
						Hello! My name is
						<span style={{ fontWeight: 600 }}> SAMEER SHAIKH </span>
					</h1>
					<h3>
						Hey! Are you looking For a Web developer or React developer? I have
						two years of experience and working to make your development faster,
						easier and efficient. Available 24/7 get in touch to discuss
						details.
					</h3>
					{/* <!--===================== BLOB BUTTON START  =====================--> */}
					<a href="mailto:sameermubeen4@gmail.com">
						<div class="buttons">
							<button class="blob-btn">
								Contact me
								<span class="blob-btn__inner">
									<span class="blob-btn__blobs">
										<span class="blob-btn__blob"></span>
										<span class="blob-btn__blob"></span>
										<span class="blob-btn__blob"></span>
										<span class="blob-btn__blob"></span>
									</span>
								</span>
							</button>
							<br />
						</div>
					</a>
					{/* <!--===================== BLOB BUTTON END  =====================--> */}
				</div>
			</div>
		</>
	);
};

export default Home;
