import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import experienceData from "../data/Experience-json.json";

function Experience() {
  return (
    <section id="experience">
      <h5>{experienceData.headline}</h5>
      <h2>{experienceData.title}</h2>
      <div className="container experience__container">
        {experienceData.positions.map((position, posIndex) => (
          <div key={posIndex} className="experience__position">
            <div className="position__header">
              <h3>{position.title}</h3>
              <p className="company__name">{position.company}</p>
              <p className="position__duration">{position.duration}</p>
            </div>
            <div className="position__description">
              <p>{position.description}</p>
            </div>
            <div className="technologies__header">
              <h4>Technologies Used</h4>
            </div>
            <div className="experience__content">
              {position.technologies.map((tech, techIndex) => (
                <article key={techIndex} className="experience__detils">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{tech.name}</h4>
                    <small className="text-light">{tech.proficiency}</small>
                  </div>
                </article>
              ))}
            </div>
            {/* {position.achievements && position.achievements.length > 0 && (
              <>
                <div className="achievements__header">
                  <h4>Key Achievements</h4>
                </div>
                <ul className="achievements__list">
                  {position.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;