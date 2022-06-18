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
    
    switch (props.project.leftType) {
        case ('vertical'):
            leftVisual = (
                <div>
                    <img src={props.project.leftVisual} className="visuals-vertical" alt=''/>
                    <p className="description">{props.project.leftVisualSubtitle}</p>
                </div>
            )
            break;
        case ('horizontal'):
            leftVisual = (
                <div>
                    <img src={props.project.leftVisual} className="visuals-horizontal" alt=''/>
                    <p className="description">{props.project.leftVisualSubtitle}</p>
                </div>
            )
            break;
        case ('squareBig'):
            leftVisual = (
                <div>
                    <img src={props.project.leftVisual} className="visuals-squareBig" alt=''/>
                    <p className="description">{props.project.leftVisualSubtitle}</p>
                </div>
            )
            break;
        case ('squareSmall'):
            leftVisual = (
                <div>
                    <img src={props.project.leftVisual} className="visuals-squareSmall" alt=''/>
                    <p className="description">{props.project.leftVisualSubtitle}</p>
                </div>
            )
            break;
        default:
            leftVisual = (
                <div>
    
                </div>
            )
    }

    let rightVisual;
    
    switch (props.project.rightType) {
        case ('vertical'):
            rightVisual = (
                <div>
                    <img src={props.project.rightVisual} className="visuals-vertical" alt=''/>
                    <p className="description">{props.project.rightVisualSubtitle}</p>
                </div>
            )
            break;
        case ('horizontal'):
            rightVisual = (
                <div>
                    <img src={props.project.rightVisual} className="visuals-horizontal" alt=''/>
                    <p className="description">{props.project.rightVisualSubtitle}</p>
                </div>
            )
            break;
        case ('squareBig'):
            rightVisual = (
                <div>
                    <img src={props.project.rightVisual} className="visuals-squareBig" alt=''/>
                    <p className="description">{props.project.rightVisualSubtitle}</p>
                </div>
            )
            break;
        case ('squareSmall'):
            rightVisual = (
                <div>
                    <img src={props.project.rightVisual} className="visuals-squareSmall" alt=''/>
                    <p className="description">{props.project.rightVisualSubtitle}</p>
                </div>
            )
            break;
        default:
            rightVisual = (
                <div>
    
                </div>
            )
    }

    let middleVisual;
    
    switch (props.project.middleType) {
        case ('vertical'):
            middleVisual = (
                <div>
                    <img src={props.project.middleVisual} className="visuals-vertical" alt=''/>
                    <p className="description">{props.project.middleVisualSubtitle}</p>
                </div>
            )
            break;

        case ('horizontal'):
            middleVisual = (
                <div>
                    <img src={props.project.middleVisual} className="visuals-horizontal" alt=''/>
                    <p className="description">{props.project.middleVisualSubtitle}</p>
                </div>
            )
            break;
        case ('squareBig'):
            middleVisual = (
                <div>
                    <img src={props.project.middleVisual} className="visuals-squareBig" alt=''/>
                    <p className="description">{props.project.middleVisualSubtitle}</p>
                </div>
            )
            break;
        case ('squareSmall'):
            middleVisual = (
                <div>
                    <img src={props.project.middleVisual} className="visuals-squareSmall" alt=''/>
                    <p className="description">{props.project.middleVisualSubtitle}</p>
                </div>
            )
            break;
            
        default:
            middleVisual = (
                <div>
    
                </div>
            )
            break;
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
        <div id={props.project.id}>
            <h2 className="label">{props.project.name}</h2>
            <h3 className="position">{props.project.position}</h3>
            {technologies}
            <br></br>
                <div>
                    <p className="description">{props.project.description}</p>
                    {links}
                </div>
                <div className="project-grid">
                    {leftVisual}
                    {middleVisual}
                    {rightVisual}
                </div>
        </div>
    )
}


