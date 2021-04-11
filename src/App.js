import React, { useState, useEffect } from "react";
import "./App.css";

// IMPORTING COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import SkillsDisplay from "./components/SkillsDisplay/SkillsDisplay";
import Features from "./components/Features/Features";
import Experience from "./components/Experience/Experience";
import MyProjects from "./components/MyProjects/MyProjects";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader";

function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading((prev) => !prev);
		setTimeout(() => {
			setLoading((prev) => !prev);
		}, 2500);
	}, []);

	if (loading) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflowY = "auto";
	}

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div>
					<Navbar />
					<Home />
					<SkillsDisplay />
					<Features />
					<Experience />
					<MyProjects />
					<Footer />
				</div>
			)}
		</>
	);
}

export default App;
