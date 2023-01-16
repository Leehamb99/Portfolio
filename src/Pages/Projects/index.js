import React from 'react'
import { useState, useEffect } from 'react'
import { ProjectCard } from '../../components'
import axios from 'axios'

const Projects = () => {
  var click = 0
  let cards = document.getElementsByClassName("list")
  const [Repos, setRepos] = useState([]);
  const Hider = (id) => {
    click++
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add("hidden")
    }
    cards[id].classList.remove("hidden")
    if (click % 2 == 0){
      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("hidden")
      }
    }
  }
  useEffect(() => {
    axios.get("https://api.github.com/users/Leehamb99/repos").then((response) => {
      setRepos(response.data)


    })
      .catch(err => {
        console.log(err)
      })

  }, []);

  return (
    <>
      {Repos.slice(0,12).map((repo, index) => {
        return (
          <div className="list" key={index} onClick={() => { Hider(index) }}>
            <ProjectCard name={repo.name} desc={repo.description} repoLink={repo.html_url}/>
          </div>
        )
      })}
    </>
  )



};

export default Projects
