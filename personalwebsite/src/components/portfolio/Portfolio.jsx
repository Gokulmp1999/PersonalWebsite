import React from "react";
import "./portfolio.css";
import data from "../constants/Constants";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((project) => (
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={project.image} alt="" />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio__item-cta">
              <a href={project.github} className="btn" target="_blank">
                Github
              </a>
              <a
                href={project.demo}
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
