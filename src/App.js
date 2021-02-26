import React from "react";
import "./App.css";

// IMPORTING COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import SkillsDisplay from "./components/SkillsDisplay/SkillsDisplay";
import Features from "./components/Features/Features";
import Experience from "./components/Experience/Experience";

function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<SkillsDisplay />
			<Features />
			<Experience />
		</div>
	);
}

export default App;
