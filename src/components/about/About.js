import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import aboutData from "../data/About-json.json";
function About() {
  return (
    <section id="about">
      <h5>{aboutData.headline}</h5>
      <h2>{aboutData.title}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="aboutMe" />
          </div>
        </div>
        <div className="about__content">
          <div className="about___cards">
            <article className="about___card">
              <FaAward className="about__icon" />
              <h5>{aboutData.ExperienceTitile}</h5>
              <small>{aboutData.ExperienceDescription}</small>
            </article>
            {/* <article className="about___card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2 Worldwide</small>
            </article>
            <article className="about___card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>2</small>
            </article> */}
          </div>
          <p>
          {aboutData.description}
          </p>
          <a href="#contact" className="btn btn-primary"> {aboutData.ctaText} </a>
        </div>
      </div>
    </section>
  );
}

export default About;
