import React from "react";
import project1 from "../assets/project1.JPG";
import project2 from "../assets/project2.JPG";
import project3 from "../assets/project3.JPG";
import project4 from "../assets/project4.JPG";
import project5 from "../assets/project5.JPG";
import project6 from "../assets/project6.JPG";
import project7 from "../assets/project7.JPG";
import project8 from "../assets/project8.JPG";
import project9 from "../assets/project9.JPG";
import project10 from "../assets/project10.JPG";
import project11 from "../assets/project11.JPG";
import project12 from "../assets/project12.JPG";

const Projects = () => {
  return (
    <section id="project" className="project">
      <div className="project--content">
        <div className="project--content__images">
          <div className="image--overlay"></div>
          <img
            src={project1}
            width="300px"
            className="project--image"
            alt="Ethereal Balance"
          />
          <div className="project--image__content">
            <p>Ethereal Balance</p>
          </div>
        </div>
        <div className="project--content__images">
          <div className="image--overlay"></div>
          <img
            src={project2}
            width="300px"
            className="project--image"
            alt="Reflections of Eternity"
          />
          <div className="project--image__content">
            <p>Reflections of Eternity</p>
          </div>
        </div>
        <div className="project--content__images">
          <div className="image--overlay"></div>
          <img
            src={project3}
            width="300px"
            className="project--image"
            alt="Shades of the Subconscious"
          />
          <div className="project--image__content">
            <p>Shades of the Subconscious</p>
          </div>
        </div>
        <div className="project--content__images">
          <div className="image--overlay"></div>
          <img
            src={project4}
            width="300px"
            className="project--image"
            alt="Aetheric Wonders"
          />
          <div className="project--image__content">
            <p>Aetheric Wonders</p>
          </div>
        </div>
        <div className="project--content__images">
          <div className="image--overlay"></div>
          <img
            src={project5}
            width="300px"
            className="project--image"
            alt="The Art of Chaos"
          />
          <div className="project--image__content">
            <p>The Art of Chaos</p>
          </div>
        </div>
        <div className="project--content__images">
          <div className="image--overlay"></div>
          <img
            src={project6}
            width="300px"
            className="project--image"
            alt="Ethereal Embrace"
          />
          <div className="project--image__content">
            <p>Ethereal Embrace</p>
          </div>
        </div>
        <div className="project--content__images">
          <div className="image--overlay"></div>
          <img
            src={project7}
            width="300px"
            className="project--image"
            alt="Infinite Horizons"
          />
          <div className="project--image__content">
            <p>Infinite Horizons</p>
          </div>
        </div>
        <div className="project--content__images">
          <div className="image--overlay"></div>
          <img
            src={project8}
            width="300px"
            className="project--image"
            alt="Vibrant Echoes"
          />
          <div className="project--image__content">
            <p>Vibrant Echoes</p>
          </div>
        </div>
        <div className="project--content__images">
          <div className="image--overlay"></div>
          <img
            src={project9}
            width="300px"
            className="project--image"
            alt="Chromatic Serenade"
          />
          <div className="project--image__content">
            <p>Chromatic Serenade</p>
          </div>
        </div>
        <div className="project--content__images">
          <div className="image--overlay"></div>
          <img
            src={project10}
            width="300px"
            className="project--image"
            alt="The Warrior's Journey"
          />
          <div className="project--image__content">
            <p>The Warrior's Journey</p>
          </div>
        </div>
        <div className="project--content__images">
          <div className="image--overlay"></div>
          <img
            src={project11}
            width="300px"
            className="project--image"
            alt="Celestial Symphony"
          />
          <div className="project--image__content">
            <p>Celestial Symphony</p>
          </div>
        </div>
        <div className="project--content__images">
          <div className="image--overlay"></div>
          <img
            src={project12}
            width="300px"
            className="project--image"
            alt="Abstract Infatuation"
          />
          <div className="project--image__content">
            <p>Abstract Infatuation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
