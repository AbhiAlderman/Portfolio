import React from 'react';
import './projects.css';
import robot1 from './Visuals/robot1.gif';
import robot2 from './Visuals/robot2.gif';
import robot3 from './Visuals/robot3.gif';
import pcbEmpty from './Visuals/PCB_Empty.jpg';
import pcbAssembled from './Visuals/PCB_Assembled.jpg';
import jeffrey from './Visuals/jeffrey.jpg';
import flip from './Visuals/manual_flip.gif';
import cutter from './Visuals/cutter.png';
import crusader from './Visuals/bayarea_crusader.jpg';
import cruuz from './Visuals/cruuz.png';
import cruuz_website from './Visuals/cruuz_website.JPG';
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
      <h1 className="title">PROJECTS</h1>
      <p> Display of my industry work and personal projects</p>
      <br></br>
      <br></br>
      <h2 className="type"> Industry Experience</h2>
      <br></br>
      <h2 className="label">Benchmark Electronics Robot</h2>
      <div className="benchmark">
        <img src={robot2} className="visuals" alt="Benchmark Robot 2"/>
        <p className="description"> At Benchmark Electronics I programmed and operated a KUKA Robotic Arm. 
        I programmed the Robot arm to autonomously pick up tools, pick up and flip products, deburr holes, polish surfaces,
        and brush edges. <br></br><br></br> Further visuals and description available upon request </p>
        <img src={robot3} className="visuals" alt="Benchmark Robot 3"/>
      </div>
      <br></br>
      <div className="cruuz">
        <img src={cruuz} alt="Cruuz inc Logo"/>
        <p className="description"> I worked at cruuz blah blah</p>
        <img src={cruuz_website} className="cruuzWeb" alt="Cruuz inc website screencap"/>
      </div>
    </div>
  );
};
  
export default Projects;