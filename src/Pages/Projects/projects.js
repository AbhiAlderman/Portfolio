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
import ProjectChunk from './projectchunk.js';
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
      <h3 className="position">Projects I've done in Industry</h3>
        <br></br>
        {industryProjects.map(project => <ProjectChunk key={project.name} project={project} />)}
        <br></br>
      <h2 className="type">Relevant Personal Projects</h2>
        <br></br>
        {personalProjects.map(project => <ProjectChunk key={project.name} project={project}/>)}
        <br></br>
    </div>
  );
};

/* 
    prop variables
        name = title of project
        position = position at company if it exists
        technologies = technologies used in project
        leftvisual = picture at left (or top on mobile)
        rightvisual = ^ but for right
        leftvisualsubtitle = subheading under leftvisual
        rightvisualsubtitle = ^ but for right
        description = description of project*/
const industryProjects = [
  {
    name: 'Cruuz Inc.',
    position: 'Software Engineering Intern',
    technologies: 'Swift, React, Javascript, CSS, HTML, Git',
    leftVisual: cruuz,
    leftVisualSubtitle: 'Cruuz Logo',
    rightVisual: cruuz_website,
    rightVisualSubtitle: 'In-App Demo',
    description:'Cruuz Inc. is a startup focused on providing \
              haircut and beauty appointment booking through an all-encompassing app. Users are able \
              to use the app to book an appointment from multiple salons in the area, much like \
              DoorDash or UberEats. I am currently working as a Software Engineering Intern\
              here. My task is focused on updating the main website , and developing a pintrest-like \
              gallery for the app.',
    links: [['Company Website', 'https://www.cruuzinc.com/']]
  },
  {
    name: 'Benchmark Electronics',
    position: 'Automation Engineering Intern',
    technologies: 'KUKA Programming, TinkerCAD, Data Structures, Algorithms',
    leftVisual: robot2,
    leftVisualSubtitle: 'Polishing Surface',
    rightVisual: robot3,
    rightVisualSubtitle: 'Deburring Holes',
    description: "At Benchmark Electronics I programmed and operated a KUKA Robotic Arm. \
    I programmed the Robot arm to autonomously pick up tools, pick up and flip products, deburr holes, polish surfaces\
    and brush edges. The potters wheel was equiped with an encoder and used to autonomously spin the different parts around. \
    I used this to align holes to be deburred and to sping the product in the opposite direction as the arm, \
    allowing for a smoother finish when polishing. This was all done in the KUKA programming language, where I utilized \
    basic data structures and different loops to complete repetitive routines. Further visuals and description available upon request. ",
    links: []
  }
];

const personalProjects = [
  {
    name: 'Personal Website',
    position: '',
    technologies: 'React, Javascript, CSS, HTML, Git',
    leftVisual: '',
    leftVisualSubtitle: '',
    rightVisual: '',
    rightVisualSubtitle: '',
    description: 'I created this website in Summer 2022 to showcase my skills in Software.\
        This was my first relatively large front-end project. I learned everything I needed to know from youtube,\
        stack overflow, documentation, and friends. It took approximately a week for me to finish the rough draft\
        of this site, and I have been continously updating it as I see fit from there.',
    links: [['Github Repo', 'https://github.com/AbhiAlderman/Portfolio']]
  },
  {
    name: 'Animatronic Eyes',
    position: '',
    technologies: 'Arduino, C, C++, C#, TinkerCAD, KiCAD',
    leftVisual: eyesWebpage,
    leftVisualSubtitle: 'Webserver from Microcontroller',
    rightVisual: eyes,
    rightVisualSubtitle: 'Animatronic Eyes Tracking a Face',
    description: 'Created a pair of Animatronic Eyes with two other students.\
      Eyes were modeled using TinkerCAD, the PCB was fully designed by us in KiCAD and manufactured in China,\
      and the servos were controlled by an ESP32-CAM microcontroller. \
      I programmed the microcontroller in C using the Arduino program, and was able to succesfully get a Webserver running\
      by using the microcontroller as an access point. The webserver allowed me to see what the camera saw and fine-tune the\
      facial recognition and tracking. The camera was able to locate the position of a face, and I used this position to \
      control the position of the servos accordingly. This made it seem like the eyes would "follow" a face as they moved around.',
    links: [['Github Repo', 'https://github.com/AbhiAlderman/Animatronic-Eyes']]
  }
];
export default Projects;

/* 

*/

/* 

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
            */
