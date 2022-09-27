import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
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
              <h5>Experience</h5>
              <small>1.6+ years working</small>
            </article>
            <article className="about___card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2 Worldwide</small>
            </article>
            <article className="about___card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>2</small>
            </article>
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk </a>
        </div>
      </div>
    </section>
  );
}

export default About;
