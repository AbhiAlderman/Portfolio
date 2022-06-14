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
const Projects = () => {
  return (
    <div>
      <h1>This will be for projects</h1>
      <p> Temporarily storing some visuals here</p>
      <main class="grid-layout">
        <img src={robot1} className="visuals" alt="Benchmark Robot 1"/>
        <img src={robot2} className="visuals" alt="Benchmark Robot 2"/>
        <img src={flip} className="visuals" alt="Me manually flipping part"/>
        <img src={robot3} className="visuals" alt="Benchmark Robot 3"/>
        <img src={pcbEmpty} className="visuals" alt="Empty PCB"/>
        <img src={pcbAssembled} className="visuals" alt="Assembled PCB"/>
        <img src={jeffrey} className="visuals" alt="jeffrey"/>
        <img src={cutter} className="visuals" alt="Ribbon cutting robot"/>
        <img src={crusader} className="visuals" alt="Crusader at Bay Area Science Festival"/>
      </main>
    </div>
  );
};
  
export default Projects;