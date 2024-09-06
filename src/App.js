import React from "react";
import "./index.css";
import questionImage from "./assets/question.svg";
import scrollImage from "./assets/Scroll.svg";
import { useState } from "react";
import vector from "./assets/vector.png";
import LeftArrow from "./assets/Left.svg";
import RightArrow from "./assets/Right.svg";
import Image from "./assets/image.png";

const App = () => {
  const [activeTab, setActiveTab] = useState("about");

  const activeabout = () => {
    setActiveTab("about");
  };

  const activeexperience = () => {
    setActiveTab("experiences");
  };

  const activerecommended = () => {
    setActiveTab("recommended");
  };

  const [isAbout, setIsAbout] = useState(true);
  const [isExperiences, setIsExperiences] = useState(false);
  const [isRecommended, setIsRecommended] = useState(false);

  const about = () => {
    setIsAbout(true);
    setIsExperiences(false);
    setIsRecommended(false);
  };

  const experience = () => {
    setIsAbout(false);
    setIsExperiences(true);
    setIsRecommended(false);
  };

  const Recommended = () => {
    setIsAbout(false);
    setIsExperiences(false);
    setIsRecommended(true);
  };

  const handleAboutClick = () => {
    activeabout();
    about();
  };

  const handleExperinceClick = () => {
    activeexperience();
    experience();
  };

  const handleRecommendedClick = () => {
    activerecommended();
    Recommended();
  };

  const [images, setImages] = useState([Image]); // Initial images array

  // Function to handle adding a new image
  const handleAddMore = () => {
    const newImage = Image; // This can be the source of the new image
    setImages([...images, newImage]); // Add the new image to the state
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="left-side">
            <img className="questionImage" src={questionImage} alt="" />
            <img className="scrollImage" src={scrollImage} alt="" />
          </div>
          <div className="right-side">
            <div className="tabs-container">
              <div className="tabs">
                <button
                  className={`tab ${activeTab === "about" ? "active" : ""}`}
                  onClick={handleAboutClick}
                  data-target="about"
                >
                  About Me
                </button>
                <button
                  className={`tab ${
                    activeTab === "experiences" ? "active" : ""
                  }`}
                  onClick={handleExperinceClick}
                  data-target="experiences"
                >
                  Experiences
                </button>
                <button
                  className={`tab ${
                    activeTab === "recommended" ? "active" : ""
                  }`}
                  onClick={handleRecommendedClick} // Corrected onClick
                  data-target="recommended"
                >
                  Recommended
                </button>
              </div>
            </div>
            <div className="content-container">
              {isAbout && (
                <div className="content" id="about">
                  <>
                    <p>
                      Hello! I'm Dave, your sales rep here from Salesforce. I've
                      been working at this awesome company for 3 years now.
                    </p>
                    <p>
                      I was born and raised in Albany, NY& have been living in
                      Santa Carla for the past 10 years with my wife Tiffany and
                      my 4-year-old twin daughters- Emma and Ella. Both of them
                      are just starting school, so my calendar is usually
                      blocked between 9–10 AM. This is a...
                    </p>
                  </>
                </div>
              )}
              {isExperiences && (
                <div className="content" id="experiences">
                  <p>This is Experience</p>
                </div>
              )}
              {isRecommended && (
                <div className="content" id="recommended">
                  <p>This is Recommended content</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="dash">
          <div className="dash-sub"></div>
        </div>

        <div className="container-gallary">
          <div className="left-side">
            <img className="questionImage" src={questionImage} alt="" />
            <img className="scrollImage" src={scrollImage} alt="" />
          </div>
          <div className="right-side">
            <div className="gallary-container">
              <button
                className={`gallary-tab ${
                  activeTab === "about" ? "active" : ""
                }`}
                onClick={handleAboutClick}
                data-target="about"
              >
                <p className="tab-text">Gallary</p>
              </button>
              <button className="gallary-addmore" onClick={handleAddMore}>
                <img className="vector" src={vector} alt="" />
                <p className="addmore-text">ADD IMAGE</p>
              </button>
              <button className="Left">
                <img src={LeftArrow} alt="" />
              </button>
              <button className="right">
                <img src={RightArrow} alt="" />
              </button>
            </div>
            <div className="image-container">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery item ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="dash">
          <div className="dash-sub"></div>
        </div> */}
      </div>
    </>
  );
};

export default App;
