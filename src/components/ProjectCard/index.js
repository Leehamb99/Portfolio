import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
// const ProjectCard = (props) => {
//   return (
//     <div className="card">{props.name}</div>
//   )
// }



const ProjectCard = (props) => {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={flip}
      flipDirection="vertical">
      <div style={{
        width: '300px',
        height: '200px',
        background: '#d7fbda',
        fontSize: '40px',
        color: 'green',
        margin: '20px',
        borderRadius: '4px',
        textAlign: 'center',
        padding: '20px'
      }} onClick={() => setFlip(!flip)}>
        {props.name}
      </div>
      <div style={{
        width: '300px',
        height: '200px',
        background: '#fbd7f8',
        fontSize: '40px',
        color: 'blue',
        margin: '20px',
        borderRadius: '4px',
        textAlign: 'center',
        padding: '20px'
      }} onClick={() => setFlip(!flip)}>
        Computer Science Portal.
      </div>
    </ReactCardFlip>
  );
}

export default ProjectCard
