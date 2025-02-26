import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__devops">
          <h3>Devops Engineering</h3>
          <div className="experience__content">
          <article className="experience__detils">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Atlassian Bamboo</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detils">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Java</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detils">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Groovy</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detils">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Shell Script</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detils">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>confluence</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detils">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Git</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF DEVOPS */}

        <div className="experience__website">
          <h3>Web Development</h3>
          <div className="experience__content">
          <article className="experience__detils">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>React js</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detils">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Html</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detils">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Css</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detils">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detils">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Firebase</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detils">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Spring Boot</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
