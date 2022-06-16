import React from 'react';
import './projects.css';
import robot2 from './Visuals/robot2.gif';
import robot3 from './Visuals/robot3.gif';
/*
import pcbEmpty from './Visuals/PCB_Empty.jpg';
import pcbAssembled from './Visuals/PCB_Assembled.jpg';
import jeffrey from './Visuals/jeffrey.jpg';
import flip from './Visuals/manual_flip.gif';
import cutter from './Visuals/cutter.png';
import crusader from './Visuals/bayarea_crusader.jpg';
*/
import cruuz from './Visuals/cruuz.png';
import cruuz_website from './Visuals/cruuz_website.JPG';
import eyes from './Visuals/eyes.gif';
import eyesWebpage from './Visuals/webpage.jpg';
/*
<img src={robot1} className="visuals" alt="Benchmark Robot 1"/>
        <img src={robot2} className="visuals" alt="Benchmark Robot 2"/>
        <img src={flip} className="visuals" alt="Me manually flipping part"/>
        <img src={robot3} className="visuals" alt="Benchmark Robot 3"/>
        <img src={pcbEmpty} className="visuals" alt="Empty PCB"/>
        <img src={pcbAssembled} className="visuals" alt="Assembled PCB"/>
        <img src={jeffrey} className="visuals" alt="jeffrey"/>
        <img src={cutter} className="visuals" alt="Ribbon cutting robot"/>
        <img src={crusader} className="visuals" alt="Crusader at Bay Area Science Festival"/>
      
*/
const Projects = () => {
  return (
    <div className="projects">
      <h1 className="title">Projects</h1>
      <p> Display of my industry work and personal projects</p>
      <br></br>
      <br></br>
      
      <h2 className="type"> Industry Experience</h2>
        <br></br>
        <h2 className="label">Cruuz Inc</h2>
          <h3 className="position">Software Engineering Intern</h3>
          <h3 className="position">Technologies: Swift, React, Javascript, CSS, HTML, Git</h3>
            <div className="project-grid">
              <div>
                <img src={cruuz} className="cruuzLogo" alt="Cruuz inc Logo"/>
                <p className="description">Cruuz Logo</p>
              </div>
              <p className="description"> Cruuz Inc. is a startup focused on providing
              haircut and beauty appointment booking through an all-encompassing app. Users are able 
              to use the app to book an appointment from multiple salons in the area, much like 
              DoorDash or UberEats. <br></br><br></br> I am currently working as a Software Engineering Intern
              here. My task is focused on updating the main website <a href="https://www.cruuzinc.com/">here</a>, 
              and developing a pintrest-like gallery for the app.</p>
              <div>
              <img src={cruuz_website} className="cruuzWeb" alt="Cruuz inc website screencap"/>
                <p className="description">In-app demo</p>
              </div>
            </div>
        <br></br>
        <h2 className="label">Benchmark Electronics</h2>
          <h3 className="position">Automation Engineering Intern</h3>
          <h3 className="position">Technologies: KUKA Programming, TinkerCAD, Data Structures, Algorithms</h3>
          <br></br>
            <div className="project-grid">
              <div>
                <img src={robot2} className="visuals" alt="Benchmark Robot 2"/>
                <p className="description">Polishing surface</p>
              </div>
              <p className="description"> At Benchmark Electronics I programmed and operated a KUKA Robotic Arm. 
              I programmed the Robot arm to autonomously pick up tools, pick up and flip products, deburr holes, polish surfaces,
              and brush edges. <br></br><br></br> Further visuals and description available upon request </p>
              <div>
              <img src={robot3} className="visuals" alt="Benchmark Robot 3"/>
              <p className="description">Deburring holes</p>
              </div>
              
            </div>
      <h2 className="type">Relevant Personal Projects</h2>
        <br></br>
        <h2 className="label">Personal website</h2>
          <h3 className="position">Technologies: React, Javascript, CSS, HTML, Git</h3>
            <div className="portfolio">
              <p></p>
              <p className="description">I created this website in Summer 2022 to showcase my skills in Software.
                This was my first relatively large front-end project. I learned everything I needed to know from youtube,
                stack overflow, documentation, and friends. It took approximately 2 weeks for me to finish the rough draft
                of this site, and I have been continously updating it as I see fit from there.
                <br></br> The code for this website is posted on my Github, which can be found <a href="https://github.com/AbhiAlderman">here</a>,
                or at the bottom of this page. </p>
              <p></p>
            </div>
        <br></br>
        <h2 className="label">Animatronic Eyes</h2>
          <h3 className="position">Technologies:Arduino, C, C++, C#, TinkerCAD, KiCAD</h3>
            <div className="project-grid">
              <div>
                <img src={eyesWebpage} className="visuals" alt="Animatronic Webpage"/>
                <p className="description">Webserver from Microcontroller</p>
              </div>
              <p className="description">Created a pair of Animatronic Eyes with two other students.
              Eyes were modeled using TinkerCAD, the PCB was fully designed by us in KiCAD and manufactured in China,
              and the servos were controlled by an ESP32-CAM microcontroller.<br></br>
              </p>
              <div>
                <img src={eyes} className="animatronicWebpage" alt="Animatronic Eyes"/>
                <p className="description">Animatronic Eyes tracking face</p>
              </div>
              
            </div>
    </div>
  );
};
  
export default Projects;