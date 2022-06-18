import React from 'react';
import './projects.css';




export default function projectLayout(props) {

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

    let technologies;
    technologies = (
        <div>
            <span className="skills-projects">Technologies: </span>
                <span className="position">{props.project.technologies}</span>
        </div>
    )
    let leftVisual;
    if (props.project.leftVisual === ''){
        leftVisual = (
            <div>

            </div>
        )
    } else {
        leftVisual = (
            <div>
                <img src={props.project.leftVisual} className="visuals" alt=''/>
                <p className="description">{props.project.leftVisualSubtitle}</p>
            </div>
        )
    }

    let rightVisual;
    if (props.project.rightVisual === ''){
        rightVisual = (
            <div>

            </div>
        )
    } else {
        rightVisual = (
            <div>
                <img src={props.project.rightVisual} className="visuals" alt=''/>
                <p className="description">{props.project.rightVisualSubtitle}</p>
            </div>
        )
    }

    let links;
    if (props.project.links.length !== 0) {
        links = props.project.links.map(linkInfo => {
            let [name, url] = linkInfo;
            let link = name;
            if (url) {
                link = (
                    <a href={url} key={name}>
                        {name}
                    </a>
                );
            }
            return link
        });
        links = links.reduce((acc, curr) => [acc, ', ', curr]);
        
    }


    return (
        <div>
            <h2 className="label">{props.project.name}</h2>
            <h3 className="position">{props.project.position}</h3>
            {technologies}
            <br></br>
                <div className="project-grid">
                    <div>
                        <p className="description">{props.project.description}</p>
                        {links}
                    </div>
                    {leftVisual}
                    {rightVisual}
                </div>
        </div>
    )
}


