import React from 'react';
import './coursework.css';
import CourseCard from './coursecard.js';

const Coursework = () => {
  return (
    <div className="coursework">
      <h1 className="title">Coursework</h1>
      <p> Relevant Courses I've taken at UC Berkeley</p>
      
      <div className="card-grid">
      {courseCards.map(card => <CourseCard key={card.title} card={card} />)}
      </div>
    </div>
  );
};

const courseCards = [
  {
    title: 'HOPE Decal',
    name: 'Hands-On PCB Engineering',
    skills: 'C, C++, KiCAD, TinkerCAD, Mechatronics Design',
    projects: [
      ['Animatronic Eyes', '/projects']
    ],
    date: 'Spring 2022',
    url: 'https://ieee.berkeley.edu/hope/'
  },

  {
    title: 'CS 170',
    name: 'Efficient Algorithms and Intractable Problems',
    skills: 'Python, Dynamic Programming, Algorithm Design, Runtimes, Proofs',
    projects: [
      ['Algorithm Design', 'https://github.com/AbhiAlderman/170-Project']
    ],
    date: 'Spring 2022',
    url: 'https://cs170.org/'
  },
  {
    title: 'CS 61C',
    name: 'Great Ideas in Computer Architecture (Machine Structures)',
    skills: 'C, RISC-V, Linux, Logisim, Computer Architecture',
    projects: [
      ['snek', 'https://cs61c.org/sp22/projects/proj1/#conceptual-overview'],
      ['CS61Classify', 'https://cs61c.org/sp22/projects/proj2/'],
      ['CS61CPU', 'https://cs61c.org/sp22/projects/proj3/'],
      ['NumC', 'https://cs61c.org/sp22/projects/proj4/']
    ],
    date: 'Spring 2022',
    url: 'https://cs61c.org/sp22/'
  },
  {
    title: 'CS 70',
    name: 'Discrete Mathematics and Probability Theory',
    skills: 'Algorithms, Runtimes, Proofs',
    projects: [],
    date: 'Fall 2021',
    url: 'https://www.eecs70.org/'
  },
  {
    title: 'CS 61B',
    name: 'Data Structures',
    skills: 'Java, JUnit, Git, Data Structures, Algorithms',
    projects: [
      ['Gitlet', 'https://github.com/AbhiAlderman/Gitlet'],
      ['Build Your Own World', 'https://github.com/AbhiAlderman/CS61B-BYOW']],
    date: 'Spring 2021',
    url: 'https://sp21.datastructur.es/'
  },
  {
    title: 'CS 61A',
    name: 'Structure and Interpretation of Computer Programs',
    skills: 'Python, Scheme, SQL, Git, Data Structures',
    projects: [
      ['Scheme Interpreter', 'https://inst.eecs.berkeley.edu/~cs61a/fa20/proj/scheme/'],
      ['Ants', 'https://inst.eecs.berkeley.edu/~cs61a/fa20/proj/ants/']
    ],
    date: 'Fall 2020',
    url: 'https://inst.eecs.berkeley.edu/~cs61a/fa20/'
  }, 
  {
    title: 'EECS 16B',
    name: 'Designing Information Devices and Systems II',
    skills: 'Python, Numpy, Arduino, Differential Equations, Circuit Design',
    projects: [
      ['S1XT33N Car', 'https://inst.eecs.berkeley.edu/~ee16b/sp16/proj/']
    ],
    date: 'Fall 2021',
    url: 'https://www.eecs16b.org/'
  },
  {
    title: 'EECS 16A',
    name: 'Designing Information Devices and Systems I',
    skills: 'Python, NumPy, Differential Equations, Circuit Design, Soldering',
    projects: [],
    date: 'Spring 2021',
    url: 'https://inst.eecs.berkeley.edu/~ee16a/sp21/'
  },
  {
    title: 'CS 195',
    name: 'Social Implications of Computer Technology',
    skills: 'Ethics, Education',
    projects: [],
    date: 'Spring 2022',
    url: 'https://inst.eecs.berkeley.edu/~cs195/sp22/'
  }
]
export default Coursework;