import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import GitHubIcon from '@mui/icons-material/GitHub';

import './style.css'


const ProjectCard = (props) => {


  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={flip}
      flipDirection="vertical"
      flipSpeedBackToFront="0"
      flipSpeedFrontToBack="0">
      <div style={{
        display: 'flex',
        textAlign: 'flexStart',
        flexWrap: 'wrap',
        width: '100px',
        height: '80px',
        background: 'gray',
        fontSize: '18px',
        color: 'black',
        borderRadius: '4px',
        margin: '15px',
        padding: '20px',
        boxShadow: '10px',
      }} onClick={() => setFlip(!flip)}>
        {props.name}
      </div>
      <div style={{
        width: '500px',
        height: '500px',
        background: '#212121',
        fontSize: '18px',
        color: '#BFBFBF',
        borderRadius: '4px',
        textAlign: 'center',
        padding: '20px',
        boxShadow: '10px'
      }} onClick={() => setFlip(!flip)}>
        <div className="cardHeader">
        Project Description :
        </div>

        <div>
        {props.desc}
        </div>
        
        <div className="cardFooter">
          <a target="_blank" href={props.repoLink}> <GitHubIcon style={{fontSize: '48px'}} /> </a>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default ProjectCard;
