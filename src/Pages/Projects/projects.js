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
import discordCode from './Visuals/discordCode.JPG';
import discordDash from './Visuals/discordDash.JPG';
import discordDemo from './Visuals/discordDemo.JPG';
/* portfolio visuals */
import homePage from './Visuals/homePage.JPG';
import portfolioCode from './Visuals/portfolioCode.JPG';
import portfolioNetlify from './Visuals/portfolioNetlify.JPG';

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
    name: 'Discord Music Bot',
    position: '',
    technologies: 'Python, Amazon Web Services (AWS), Discord API, Git, Linux',

    leftVisual: discordCode,
    leftType: 'vertical',
    leftVisualSubtitle: 'Example code snippet',
    middleVisual: discordDemo,
    middleType: 'horizontal',
    middleVisualSubtitle: 'Demo of the bot joining and running in a voicecall',
    rightVisual: discordDash,
    rightType: 'vertical',
    rightVisualSubtitle: 'Discord Bot Dashboard',

    description: 'I created a Discord Bot capable of searching and playing music from Youtube in voice channels. \n' +
                  'Supports joining and leaving voice channels, playing youtube videos from search requests or urls, \n' +
                  'adding and removing songs in a queue, skipping songs, pausing and removing songs, leaving after inactivity, and more.\n' +
                  'Using Amazon Web Services (AWS) to remain online and functioning 24/7.',
    links: [['Github Repo', 'https://github.com/AbhiAlderman/Discord-Music-Bot'], ['Invite the Bot to your Discord Server!', 'https://discord.com/api/oauth2/authorize?client_id=994480812244357130&permissions=8693812224&scope=bot']],
    id: 'musicBot'
  },
  {
    name: 'Personal Website',
    position: '',
    technologies: 'React, Javascript, CSS, HTML, Git',

    leftVisual: portfolioCode,
    leftType: 'vertical',
    leftVisualSubtitle: 'Example Code',
    middleVisual: homePage,
    middleType: 'horizontal',
    middleVisualSubtitle: 'The homepage',
    rightVisual: portfolioNetlify,
    rightType: 'vertical',
    rightVisualSubtitle: 'Using Netlify to Host Site',

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

const oldProjects = [
  {
    name: 'Ribbon-Cutting Robot',
    position: '',
    technologies: 'Arduino, C, C++, VEX Robotics',

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
                  'I came up with the design and created the program for controlling the robot, and had some help from Artur Neri and other \n' +
                  'It used a simple 4-wheel drive \n' +
                  'to traverse and a "double reverse 4 bar" to lift up a spinning, custom-made saw blade. \n' + 
                  'I completed this project with the help of Artur Neri and some help from other robotics students. Overall a very fun project.',
    links: [['Bay Area Science Festival Instagram Post', 'https://www.instagram.com/p/B4X4bLPhOIs/?utm_source=ig_web_copy_link']],
    id: 'ribbonCutter'
  }
];
export default Projects;


