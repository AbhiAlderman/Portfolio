import React from 'react';
import './style.css';
import BottomBar from './Bottombar/bottombar.js';

import Me from './Projects/Visuals/AbhiAldermanCropped.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="home-grid">
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
        <img src={Me} className="profile" alt="Me"></img>
      </div>   
      <BottomBar>
      </BottomBar>
    </div>
  );
};


export default Home;