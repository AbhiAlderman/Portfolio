import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

import Me from './Projects/Visuals/AbhiAldermanCropped.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="home-grid">
        <img src={Me} className="profile" alt="Me"></img>
        <div>
          <h1 className="title">Abhi Alderman</h1>
          <h2 className="position">UC Berkeley '24 Electrical Engineering and Computer Science</h2>
          <p>I'm Robert "Abhi" Alderman, a Junior at UC Berkeley majoring in Electrical Engineering and Computer Science.
            My interests include Software Engineering, Robotics, Mechatronics, Electrical Engineering, and Computer Vision.
          </p>
          <p>
            I'm currently a Software Engineering Intern at Cruuz Inc, a Berkeley-founded startup, and an ASE for EECS 16A.
          </p>
          <p>Check out my <a href="/projects">Projects</a> and <a href="/courseworks">Coursework!</a></p>
        </div>  
      </div>   
      <a href="https://github.com/abhialderman" className="icon"><FontAwesomeIcon icon={faGithub} transform="left-20" /></a>
      <a href="https://www.linkedin.com/in/abhialderman/" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="https://docs.google.com/document/d/16n36aSWUKWM3UWrvz11ZpwlWm_tD-P_76SxFAZI5hcA/edit?usp=sharing" className="icon" ><FontAwesomeIcon icon={faFileAlt} transform="right-20"/></a>
    </div>
  );
};


export default Home;