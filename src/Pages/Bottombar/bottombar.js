import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
/*https://docs.google.com/document/d/16n36aSWUKWM3UWrvz11ZpwlWm_tD-P_76SxFAZI5hcA/edit?usp=sharing */
export default function bottombar() {
    return (
        <div>   
            <a href="https://github.com/abhialderman" className="icon"><FontAwesomeIcon icon={faGithub} transform="left-20" /></a>
            <a href="https://www.linkedin.com/in/abhialderman/" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
    )
}