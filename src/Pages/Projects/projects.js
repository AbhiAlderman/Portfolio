import React from 'react';
import './projects.css';

/* benchmark visuals */
import robot2 from './Visuals/robot2.gif';
import robot3 from './Visuals/robot3.gif';
import toolpick from './Visuals/toolpick.gif';

/* cruuz visuals */
import cruuz from './Visuals/cruuz.png';
import cruuz_website from './Visuals/cruuz_website.JPG';
import cruuzApp from './Visuals/cruuzApp.png';

/* animatronic eyes visual */
import eyes from './Visuals/eyes.gif';
import eyesWebpage from './Visuals/webpage.jpg';
import pcbAssembled from './Visuals/PCB_Assembled.jpg';

/* imports for format */
import ProjectChunk from './projectchunk.js';
import BottomBar from './../Bottombar/bottombar.js';




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
      <BottomBar></BottomBar>
    </div>
  );
};

/* 
    prop variables
        name = title of project
        position = position at company if it exists
        technologies = technologies used in project
        leftvisual = picture at left (or top on mobile)
        leftType: the size/shape of visual
        leftvisualsubtitle = subheading under leftvisual
        same for middle and right
        description = description of project
    */
const industryProjects = [
  {
    name: 'Cruuz Inc.',
    position: 'Software Engineering Intern',
    technologies: 'Swift, React, Javascript, CSS, HTML, Git',

    leftVisual: cruuzApp,
    leftType: 'vertical',
    leftVisualSubtitle: 'App Demo',
    middleVisual: cruuz,
    middleType: 'squareSmall',
    middleVisualSubtitle: 'Logo',
    rightVisual: cruuz_website,
    rightType: 'vertical',
    rightVisualSubtitle: 'App Demo',


    description:'Cruuz Inc. is a startup focused on providing \n' + 
              'haircut and beauty appointment booking through an all-encompassing app. Users are able \n' + 
              'to use the app to book an appointment from multiple salons in the area, much like \n' + 
              'DoorDash or UberEats. I am currently working as a Software Engineering Intern \n' + 
              'here. My task is focused on updating the main website , and developing a pintrest-like \n' + 
              'gallery for the app.',
    links: [['Company Website', 'https://www.cruuzinc.com/']],
    id: 'cruuz'
  },
  {
    name: 'Benchmark Electronics',
    position: 'Automation Engineering Intern',
    technologies: 'KUKA Programming, TinkerCAD, Data Structures, Algorithms',

    leftVisual: robot2,
    leftType: 'vertical',
    leftVisualSubtitle: 'Polishing Surface',
    middleVisual: toolpick,
    middleType: 'horizontal',
    middleVisualSubtitle: 'Picking Tool',
    rightVisual: robot3,
    rightType: 'vertical',
    rightVisualSubtitle: 'Deburring Holes',

    description: 'At Benchmark Electronics I programmed and operated a KUKA Robotic Arm. \n' + 
                  'I programmed the Robot arm to autonomously pick up tools, pick up and flip products, deburr holes, polish surfaces \n' +
                  'and brush edges. The potters wheel was equiped with an encoder and used to autonomously spin the different parts around. \n' + 
                  'I used this to align holes to be deburred and to sping the product in the opposite direction as the arm, \n' +
                  'allowing for a smoother finish when polishing. This was all done in the KUKA programming language, where I utilized \n' +
                  'basic data structures and different loops to complete repetitive routines. Further visuals and description available upon request.',
    links: [],
    id: 'benchmark'
  }
];

const personalProjects = [
  {
    name: 'Personal Website',
    position: '',
    technologies: 'React, Javascript, CSS, HTML, Git',

    leftVisual: '',
    leftType: '',
    leftVisualSubtitle: '',
    middleVisual: '',
    middleType: '',
    middleVisualSubtitle: '',
    rightVisual: '',
    rightType: '',
    rightVisualSubtitle: '',

    description: 'I created this website in Summer 2022 to showcase my skills in Software. \n' +
                  'This was my first relatively large front-end project. I learned everything I needed to know from youtube, \n' +
                  'stack overflow, documentation, and friends. It took approximately a week for me to finish the rough draft \n' +
                  'of this site, and I have been continously updating it as I see fit from there.',
    links: [['Github Repo', 'https://github.com/AbhiAlderman/Portfolio']],
    id: 'portfolio'
  },
  {
    name: 'Animatronic Eyes',
    position: '',
    technologies: 'Arduino, C, C++, C#, TinkerCAD, KiCAD',

    leftVisual: eyesWebpage,
    leftType: 'vertical',
    leftVisualSubtitle: 'Webserver from Microcontroller',
    middleVisual: pcbAssembled,
    middleType: 'horizontal',
    middleVisualSubtitle: 'Custom-Made PCB',
    rightVisual: eyes,
    rightType: 'vertical',
    rightVisualSubtitle: 'Eyes Tracking a Face',

    description: 'Created a pair of Animatronic Eyes with two other students. \n' +
                  'Eyes were modeled using TinkerCAD, the PCB was fully designed by us in KiCAD and manufactured in China, \n' +
                  'and the servos were controlled by an ESP32-CAM microcontroller. \n' +
                  'I programmed the microcontroller in C using the Arduino program, and was able to succesfully get a Webserver running \n' +
                  'by using the microcontroller as an access point. The webserver allowed me to see what the camera saw and fine-tune the \n' +
                  'facial recognition and tracking. The camera was able to locate the position of a face, and I used this position to \n' +
                  'control the position of the servos accordingly. This made it seem like the eyes would "follow" a face as they moved around.',
    links: [['Github Repo', 'https://github.com/AbhiAlderman/Animatronic-Eyes']],
    id: 'animatronic'
  }
];
export default Projects;


