import React from 'react';
import './coursework.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Coursework = () => {
  return (
    <div className="coursework">
      <h1 className="title">Coursework</h1>
      <p> Courses I've taken at UC Berkeley</p>
      <br></br>
      <br></br>
      <div className="card-grid">
      <Card className="card" style={{ width: '18rem' }} >
          <Card.Body>
            <Card.Title className="type">CS61A</Card.Title>
              <Card.Subtitle className="course-name">
                Structure and Interpretation of Computer Programs
              </Card.Subtitle>
              <Card.Text className="class-description">
                  Skills: Python, Scheme, SQL, Data Structures 
              </Card.Text>
              <Card.Footer className="class-date">
                Fall 2020
              </Card.Footer>
            <Button href="https://cs61a.org/" className="class-link">Course Site</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Coursework;