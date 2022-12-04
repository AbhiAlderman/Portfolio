import React from 'react';
import './projects.css';

/* benchmark visuals */
import robot2 from './Visuals/robot2.gif';
import robot3 from './Visuals/robot3.gif';
import toolpick from './Visuals/toolpick.gif';



/* animatronic eyes visuals */
import eyes from './Visuals/eyes.gif';
import eyesWebpage from './Visuals/webpage.jpg';
import pcbAssembled from './Visuals/PCB_Assembled.jpg';

/* ribbon cutting robot visuals */
import ribbonDemo from './Visuals/Ribbon-Robot.gif';
import ribbonLift from './Visuals/dr4b.gif';
import ribbonSausage from './Visuals/sausage.gif';

/* discord visuals */
import discordDemo from './Visuals/discordDemo.JPG';

/* door opener visuals */
import doorCircuit from './Visuals/doorCircuit.jpg';
import doorOpener from './Visuals/doorOpener.jpg';
import doorVid from './Visuals/doorVid.gif';


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
      <h3 className="position">Relevant Projects I've done in Industry</h3>
        <br></br>
        {industryProjects.map(project => <ProjectChunk key={project.name} project={project} />)}
        <br></br>
      <h2 className="type">Relevant Personal Projects</h2>
      <h3 className="position">Projects that showcase my current experience and skill</h3>
        <br></br>
        {personalProjects.map(project => <ProjectChunk key={project.name} project={project}/>)}
        <br></br>
      <h2 className="type">Old Projects</h2>
      <h3 className="position">Projects that got me where I am today</h3>
        <br></br>
        {oldProjects.map(project => <ProjectChunk key={project.name} project={project}/>)}
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
    name: 'Front Door Automation',
    position: '',
    technologies: 'Arduino, C++, Raspberry Pi, Linux, Git',

    leftVisual: doorCircuit,
    leftType: 'vertical',
    leftVisualSubtitle: 'Prototype Circuit to Handle Control Logic',
    middleVisual: doorVid,
    middleType: 'horizontal',
    middleVisualSubtitle: 'Demonstration',
    rightVisual: doorOpener,
    rightType: 'vertical',
    rightVisualSubtitle: 'Mechanism for Opening the Door',

    description: 'In Fall 2021, the front-door of my co-op featured a door scanner that opened the door automatically when scanned. \n' +
                  'However, anyone with a UC Berkeley student ID was able to enter the house, so the project was cancelled. \n' +
                  ' In Fall 2022, as the house-appointed "Network/Hardware Manager", I decided to revisit this project. \n' +
                  'My co-manager, Benedict Taguinod, and I re-implemented this project and were able to successfully enable filtering. \n' +
                  'Residents who decide to opt-in are able to send us the 6-digit code found on the back of the card to give them access. \n' +
                  'Currently, codes are saved locally on the arduino. In the future, we plan on using a raspberry pi to remotely edit the \n' +
                  'students who have access without having to re-upload code on the arduino.',
    links: [['Github Repo', 'https://github.com/AbhiAlderman/RFID_Access_Controller']],
    id: 'door'
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

    description: 'In Spring 2022 I created a pair of Animatronic Eyes with Andrew Wang and Cindy Lin. \n' +
                  'The eyes were modeled using TinkerCAD, the PCB was fully designed by us in KiCAD and manufactured in China, \n' +
                  'and the servos were controlled by an ESP32-CAM microcontroller. \n' +
                  'I programmed the microcontroller in C++ using the Arduino program, and was able to succesfully get a Webserver running \n' +
                  'by using the microcontroller as an access point. The webserver allowed me to see what the camera saw and fine-tune the \n' +
                  'facial recognition and tracking. The camera was able to locate the position of a face, and I used this position to \n' +
                  'control the position of the servos accordingly. This allowed the eyes to follow a face as they moved around.',
    links: [['Github Repo', 'https://github.com/AbhiAlderman/Animatronic-Eyes']],
    id: 'animatronic'
  },
  {
    name: 'Discord Music Bot',
    position: '',
    technologies: 'Python, Amazon Web Services (AWS), Discord API, Git, Linux',

    middleVisual: discordDemo,
    middleType: 'horizontal',
    middleVisualSubtitle: 'Demo of the bot joining and running in a voicecall',

    description: 'I created a Discord Bot capable of searching and playing music from Youtube in voice channels. \n' +
                  'Supports joining and leaving voice channels, playing Youtube videos from search requests or urls, \n' +
                  'adding and removing songs in a queue, skipping songs, pausing and removing songs, leaving after inactivity, and more.\n' +
                  'Uses Amazon Web Services (AWS) to remain online and functioning 24/7.',
    links: [['Github Repo', 'https://github.com/AbhiAlderman/Discord-Music-Bot']],
    id: 'musicBot'
  },
  {
    name: 'Personal Website',
    position: '',
    technologies: 'React, Javascript, CSS, HTML, Git',

    description: 'I created this website in Summer 2022 to showcase my projects and experience. \n' +
                  'This was my first relatively large front-end project. I learned everything I needed to know from documentation, \n' +
                  'stack overflow, youtube, and friends. I continue to update this site as I complete new projects, \n' +
                  'and hope to revamp it with a new, polished look as soon as I get the chance.',
    links: [['Github Repo', 'https://github.com/AbhiAlderman/Portfolio']],
    id: 'portfolio'
  },
];

const oldProjects = [
  {
    name: 'Ribbon-Cutting Robot',
    position: '',
    technologies: 'VEX Robotics, ROBOTC for VEX Robotics',

    leftVisual: ribbonDemo,
    leftType: 'vertical',
    leftVisualSubtitle: 'Showcase at Bay Area Science Festival',
    middleVisual: ribbonSausage,
    middleType: 'horizontal',
    middleVisualSubtitle: 'Cutting Through a Sausage',
    rightVisual: ribbonLift,
    rightType: 'vertical',
    rightVisualSubtitle: 'Prototyping a Blade',

    description: 'In high school I was tasked with creating a robot that \n' +
                  'was able to cut through the ribbon during an "opening ceremony" for the Bay Area Science Festival. \n' +
                  'I came up with the structural design and created the program for controlling the robot. \n' +
                  'It used a simple 4-wheel drive \n' +
                  'to traverse and a "double reverse 4 bar" to lift up a spinning, custom manufactured saw blade. \n' + 
                  'I completed this project with Artur Neri and some help from other robotics students. Overall a very fun project.',
    links: [['Bay Area Science Festival Instagram Post', 'https://www.instagram.com/p/B4X4bLPhOIs/?utm_source=ig_web_copy_link']],
    id: 'ribbonCutter'
  }
];
export default Projects;


