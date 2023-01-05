import React from "react";

import htmlIMG from "../../assets/SkillsImages/html.png";
// import cssIMG from "../../assets/SkillsImages/css.png";
import jsIMG from "../../assets/SkillsImages/js.png";
// import bootstrapIMG from "../../assets/SkillsImages/bootstrap2.png";
import reactjsIMG from "../../assets/SkillsImages/reactjs.png";
// import materialUI from "../../assets/SkillsImages/materialUI.png";
import firebase2 from "../../assets/SkillsImages/firebase2.png";
import typescriptlogo from "../../assets/SkillsImages/typescriptlogo.png";
import nodejs from "../../assets/SkillsImages/nodelogo.png";
import mongodb from "../../assets/SkillsImages/mongodblogo.png";

// IMPORTING SINGLE-EXP COMPONENT
import SingleExperience from "./SingleExperience";

const experienceData = [
  {
    title: "HTML",
    img: htmlIMG,
    percentage: 90,
    GC_1: "#ff4100",
    GC_2: "#ff9a78",
    textColor: "#ff6935",
  },
  //   {
  //     title: "CSS",
  //     img: cssIMG,
  //     percentage: 90,
  //     GC_1: "#008cfc",
  //     GC_2: "#9bd2fe",
  //     textColor: "#008cfc",
  //   },
  {
    title: "TypeScript",
    img: typescriptlogo,
    percentage: 80,
    GC_1: "#1e5083",
    GC_2: "#7eb5ed",
    textColor: "#7eb5ed",
  },
  {
    title: "JavaScript",
    img: jsIMG,
    percentage: 80,
    GC_1: "#fddb22",
    GC_2: "#ffef96",
    textColor: "#fee03e",
  },
  //   {
  //     title: "Bootstrap",
  //     img: bootstrapIMG,
  //     percentage: 95,
  //     GC_1: "#5d329d",
  //     GC_2: "#c0a7e6",
  //     textColor: "#8a67be",
  //   },
  {
    title: "React JS",
    img: reactjsIMG,
    percentage: 90,
    GC_1: "#4da5bd",
    GC_2: "#dbf7ff",
    textColor: "#c4e6f0",
  },
  //   {
  //     title: "Material UI",
  //     img: materialUI,
  //     percentage: 85,
  //     GC_1: "#005387",
  //     GC_2: "#addfff",
  //     textColor: "#84bee3",
  //   },

  {
    title: "Node js",
    img: nodejs,
    percentage: 75,
    GC_1: "#5c8200",
    GC_2: "#b2d65a",
    textColor: "#b2d65a",
  },
  {
    title: "Firebase",
    img: firebase2,
    percentage: 85,
    GC_1: "#FFCA28",
    GC_2: "#F88E0C",
    textColor: "#FFCA28",
  },
  {
    title: "MongoDB",
    img: mongodb,
    percentage: 75,
    GC_1: "#4d7740",
    GC_2: "#537f40",
    textColor: "#537f40",
  },
];

function Experience() {
  return (
    <div id="Experience" className="ExpContainer bg-white">
      <div className="container">
        <div class="section-title">
          <h2>
            <b>Experience</b>
          </h2>
        </div>
        <div className="row justify-content-center">
          {experienceData.map((content) => {
            const { title, img, percentage, GC_1, GC_2, textColor } = content;

            return (
              <SingleExperience
                Title={title}
                Img={img}
                Percentage={percentage}
                GradientC_1={GC_1}
                GradientC_2={GC_2}
                TextColor={textColor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
