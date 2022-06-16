import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  return (
    <div className="home">
      <h1>Use this to test a home button</h1>      
      <a href="https://github.com/abhialderman" className="icon"><FontAwesomeIcon icon={faGithub} transform="left-20" /></a>
      <a href="https://www.linkedin.com/in/abhialderman/" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="https://www.instagram.com/abhi_alderman/" className="icon"><FontAwesomeIcon icon={faInstagram} transform="right-20"/></a>
    </div>
  );
};

export default Home;