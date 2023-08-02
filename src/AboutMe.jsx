import React from "react";
import profilePhoto from "./images/hong_profile.jpg";
import experiencePhoto from "./images/experience.png";
import skillPhoto from "./images/skill.png";
import passionPhoto from "./images/pass.webp";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="my-name">Hong Tran</div>

      <div className="my-role">Business Data Analyst</div>

      <div className="my-motto">
        <div className="my-motto-container">
          <div className="icon">
            <img
              src={experiencePhoto}
              alt="experience"
              width={125}
              height={125}
            />
          </div>
          <div className="text">
            <div className="title">Experience</div>
            <div className="description">
              Drawing upon my banking and finance background, I have developed a
              keen understanding of financial services. My practical experience
              revolves around data analysis, and reporting, utilizing Excel and
              SQL proficiently.
            </div>
          </div>
        </div>
        <div className="my-motto-container">
          <div className="icon">
            <img src={skillPhoto} alt="skill" width={125} height={125} />
          </div>
          <div className="text">
            <div className="title">Skills</div>
            <div className="description">
              Through a two-year data analytics program, I had the opportunity
              to navigate data from basic to advanced levels. I gained insights
              into the complete data lifecycle and developed a solid foundation
              in data science fundamentals.
            </div>
          </div>
        </div>
        <div className="my-motto-container">
          <div className="icon">
            <img src={passionPhoto} alt="passion" width={125} height={125} />
          </div>
          <div className="text">
            <div className="title">Preference</div>
            <div className="description">
              Throughout my journey, I've had the privilege to explore a diverse
              array of powerful BI tools such as Tableau, IBM Cognos, Power BI, and
              SAS. Among them, Power BI is my favorite for its intuitive
              interface and dynamic visualization capabilities.
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="photo-container">
          <img src={profilePhoto} alt="profile" className="profile-photo" />
        </div>
        <div className="main-text">
          <div className="main-wrapper">
            <div className="title">About me</div>
            <div className="description">
              I am Hong, a passionate business data analyst with expertise in
              the entire data lifecycle. From data capture, data preparation,
              data analysis, and management to impactful presentations, I can
              support evidence-driven decisions and deliver insights
              effectively. My can-do attitude and continuous learning mindset
              drive me to excel in new challenges.
              <p>Let's unlock the full potential of data together.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
