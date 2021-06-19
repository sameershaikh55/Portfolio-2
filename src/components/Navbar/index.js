import React, { useEffect } from "react";

// IMPORTED SIDEBAR
import Sidebar from "./Sidebar";

// MATERIAL CHIP UNDER BRAND NAME IN NAVBAR
import Chip from "@material-ui/core/Chip";

// IMPORTING REACT SCROLL
import { Link } from "react-scroll";

const Navbar = () => {
	useEffect(() => {
		// FOR NAVBAR SCROLLING EFFECT START
		window.addEventListener("scroll", function () {
			var header = document.querySelector(".NavbarContainer");
			if (header !== null) {
				header.classList.toggle("sticky", window.scrollY > 100);
			}
		});
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="NavbarContainer">
					<Link
						to="About"
						smooth={true}
						duration={1200}
						offset={5}
						delay={300}
						spy={true}
					>
						<div className="BrandName">
							<h1>SAMEER SHAIKH</h1>
							<Chip
								className="UnderNameNChip"
								style={{
									fontSize: "1.2rem",
									height: "2rem",
									marginTop: "-0.4rem",
									letterSpacing: "0.4rem",
								}}
								label="FRONT-END DEVELOPER"
							/>
						</div>
					</Link>
					<div>
						<Sidebar />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
