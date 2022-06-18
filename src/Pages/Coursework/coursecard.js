import React from 'react';
import './coursework.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function coursecard(props) {
    let skills;
    skills = "Skills: " + props.card.skills;
    skills = (
        <div>
            <span className="skills-projects">Skills: </span> {props.card.skills}
        </div>
    );

    let projects;
    if (props.card.projects.length !== 0) {
        projects = props.card.projects.map(projectInfo => {
            let [name, url] = projectInfo;
            let project = name;
            if (url) {
                project = (
                    <a href={url} key={name}>
                        {name}
                    </a>
                );
            }
            return project
        });
        projects = projects.reduce((acc, curr) => [acc, ', ', curr]);
        projects = (
            <div>
                <span className="skills-projects">Noteworthy Projects:</span> {projects}
            </div>
        );
    }

    return (
    <div className="courseCard">
        <Card className="card" style={{ height: '20rem', width: '18rem', textAlign: "center"}} >
          <Card.Body>
            <Card.Title className="type">{props.card.title}</Card.Title>
              <Card.Subtitle className="course-name">
                {props.card.name}
              </Card.Subtitle>
              <Card.Text className="class-description">
                  {skills}
                  {projects}
              </Card.Text>
          </Card.Body>
          <Card.Footer className="class-date">
                {props.card.date}
              </Card.Footer>
            <Button href={props.card.url} className="class-link">Course Site</Button>
        </Card>
        </div>
    )

}