import React from "react";

import htmlImg from "../../assets/SkillsImages/html.png";
import cssImg from "../../assets/SkillsImages/css.png";
import jsImg from "../../assets/SkillsImages/js.png";
import bootstrapImg from "../../assets/SkillsImages/bootstrap.png";
import reactjsImg from "../../assets/SkillsImages/reactjs.png";
import materialUIImg from "../../assets/SkillsImages/materialUI.png";
import reduxImg from "../../assets/SkillsImages/redux.png";
import firebase from "../../assets/SkillsImages/firebase.png";
import nodejs from "../../assets/SkillsImages/nodejs.png";
import nextjs from "../../assets/SkillsImages/next js.png";
import expressjs from "../../assets/SkillsImages/expressjs.png";
import mongodb from "../../assets/SkillsImages/mongodb.jpg";
import typescript from "../../assets/SkillsImages/typescript.png";
import Slide from "react-reveal/Slide";

const SkillsDisplay = () => {
  const SkillsData = [
    {
      img: htmlImg,
      alt: "html",
      height: "11rem",
    },
    {
      img: cssImg,
      alt: "css",
      height: "11rem",
      // marginLeft: "45px",
    },
    {
      img: jsImg,
      alt: "js",
      height: "10rem",
      // marginLeft: "60px",
    },
    {
      img: bootstrapImg,
      alt: "bootstrap",
      height: "13.2rem",
      // marginLeft: "40px",
    },
    {
      img: reactjsImg,
      alt: "reactjs",
      height: "8rem",
      // marginLeft: "45px",
    },
    {
      img: materialUIImg,
      alt: "materialUI",
      height: "13.2rem",
      // marginLeft: "40px",
    },
    {
      img: reduxImg,
      alt: "redux",
      height: "10rem",
      // marginLeft: "40px",
    },
    {
      img: firebase,
      alt: "Firebase",
      height: "6rem",
    },
    {
      img: nodejs,
      alt: "Nodejs",
      height: "10rem",
    },
    {
      img: nextjs,
      alt: "Next js",
      height: "8rem",
    },
    {
      img: expressjs,
      alt: "Express js",
      height: "7rem",
    },
    {
      img: mongodb,
      alt: "Mongo DB",
      height: "12rem",
    },
    {
      img: typescript,
      alt: "Typescript JS",
      height: "7rem",
    },
  ];

  return (
    <>
      <div className="SkillsContainer bg-white">
        <div className="SC-Slider">
          <Slide bottom cascade>
            <div className="SC-Slide">
              {SkillsData.map((preImg, index) => {
                return (
                  <span key={index}>
                    <img
                      src={preImg.img}
                      alt={preImg.alt}
                      style={{ height: preImg.height }}
                    />
                  </span>
                );
              })}
            </div>
            <div className="SC-Slide">
              {SkillsData.map((preImg, index) => {
                return (
                  <span key={index}>
                    <img
                      src={preImg.img}
                      alt={preImg.alt}
                      style={{ height: preImg.height }}
                    />
                  </span>
                );
              })}
            </div>
            <div className="SC-Slide">
              {SkillsData.map((preImg, index) => {
                return (
                  <span key={index}>
                    <img
                      src={preImg.img}
                      alt={preImg.alt}
                      style={{ height: preImg.height }}
                    />
                  </span>
                );
              })}
            </div>
            <div className="SC-Slide">
              {SkillsData.map((preImg, index) => {
                return (
                  <span key={index}>
                    <img
                      src={preImg.img}
                      alt={preImg.alt}
                      style={{ height: preImg.height }}
                    />
                  </span>
                );
              })}
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default SkillsDisplay;
