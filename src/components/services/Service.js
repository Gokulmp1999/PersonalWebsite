import React from "react";
import "./service.css";
import {BiCheck} from 'react-icons/bi'
function Service() {
  return (
    <section id="service">
      <h5>What I offer</h5>
      <h2>Service</h2>
      <div className="container serivce__container">
        <article className="service">
          <div className="service__head">
              <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className="service__list-icon"/>
            <p> simply dummy text of the printing and </p></li>
            <li><BiCheck className="service__list-icon"/>
            <p> simply dummy text of the printing and </p></li>
            <li><BiCheck className="service__list-icon"/>
            <p> simply dummy text of the printing and </p></li>
            <li><BiCheck className="service__list-icon"/>
            <p> simply dummy text of the printing and </p></li>
            <li><BiCheck className="service__list-icon"/>
            <p> simply dummy text of the printing and </p></li>
          </ul>
        </article>
        {/* END OF UI/UX Design */}
        <article className="service">
          <div className="service__head">
              <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className="service__list-icon"/>
            <p> simply dummy text of the printing and </p></li>
            <li><BiCheck className="service__list-icon"/>
            <p> simply dummy text of the printing and </p></li>
            <li><BiCheck className="service__list-icon"/>
            <p> simply dummy text of the printing and </p></li>
            <li><BiCheck className="service__list-icon"/>
            <p> simply dummy text of the printing and </p></li>
            <li><BiCheck className="service__list-icon"/>
            <p> simply dummy text of the printing and </p></li>
            <li><BiCheck className="service__list-icon"/>
            <p> simply dummy text of the printing and </p></li>
          </ul>
        </article>
        {/* END OF Web Development */}
        <article className="service">
          <div className="service__head">
              <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className="service__list-icon"/>
            <p> simply dummy text of the printing and </p></li>
            <li><BiCheck className="service__list-icon"/>
            <p> simply dummy text of the printing and </p></li>
            <li><BiCheck className="service__list-icon"/>
            <p> simply dummy text of the printing and </p></li>
            <li><BiCheck className="service__list-icon"/>
            <p> simply dummy text of the printing and </p></li>
            <li><BiCheck className="service__list-icon"/>
            <p> simply dummy text of the printing and </p></li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
}

export default Service;
