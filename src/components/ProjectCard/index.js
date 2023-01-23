import React, { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import { useEffect } from "react";

import './style.css'




const ProjectCard = (props) => {
  var front = document.getElementsByClassName('front')
  var back = document.getElementsByClassName('back')
  var click = 0
  const Hider = (id) => {
    click++
    if (click % 2 != 0) {
      for (let i = 0; i < front.length; i++) {
        front[i].classList.add("hidden")
      }
      back[id].classList.remove("hidden")



    }
    else {
      for (let i = 0; i < front.length; i++) {
        front[i].classList.remove("hidden")
      }
      back[id].classList.add("hidden")
    }



  }

  return (
    <>
      <div className="card front" onClick={() => Hider(props.cardId)}>
        {props.name}
      </div>

      <div className="card back hidden" onClick={() => Hider(props.cardId)}>
        <div className="cardHeader"> {props.name} </div>
        <div>
          {props.desc}
        </div>
        <div className="cardFooter">
           <a target="_blank" href={props.repoLink}> <GitHubIcon style={{fontSize: '48px'}} /> </a>
       </div>
      </div>
    </>
  )
}







export default ProjectCard;
