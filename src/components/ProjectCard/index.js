import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import './style.css'


const ProjectCard = (props) => {


  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={flip}
      flipDirection="vertical">
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '75px',
        height: '75px',
        background: 'gray',
        fontSize: '18px',
        color: 'black',
        margin: '15px',
        borderRadius: '4px',
        textAlign: 'center',
        padding: '20px',
        boxShadow: '10px'
      }} onClick={() => setFlip(!flip)}>
        {props.name}
      </div>
      <div style={{
        width: '500px',
        height: '500px',
        background: '#F0EDE4',
        fontSize: '18px',
        color: 'black',
        borderRadius: '4px',
        textAlign: 'center',
        padding: '20px',
        boxShadow: '10px'
      }} onClick={() => setFlip(!flip)}>
        {props.desc}
      </div>
    </ReactCardFlip>
  );
}

export default ProjectCard
