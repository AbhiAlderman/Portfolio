<<<<<<< HEAD
import React from 'react';
import './style.css';
import BottomBar from './Bottombar/bottombar.js';
import meSquare from './Projects/Visuals/meSquare.jpg';

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
          <p>Check out my <a href="/projects">Projects</a> and <a href="/courseworks">Coursework!</a></p>
        </div>  
        <div className="image">
          <img src={meSquare} className="profile" alt="Me"></img>
        </div>
      </div>   
      <BottomBar>
      </BottomBar>
    </div>
  );
};


=======
import React from 'react';
import './style.css';
import BottomBar from './Bottombar/bottombar.js';
import meSquare from './Projects/Visuals/meSquare.jpg';

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
          <p>Check out my <a href="/projects">Projects</a> and <a href="/courseworks">Coursework!</a></p>
        </div>  
        <div className="image">
          <img src={meSquare} className="profile" alt="Me"></img>
        </div>
      </div>   
      <BottomBar>
      </BottomBar>
    </div>
  );
};


>>>>>>> 2ed08e14bf0b6bbfe05f62db5677c426111657f8
export default Home;