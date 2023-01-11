import React from 'react'
import { useState, useEffect } from 'react'
import { ProjectCard } from '../../components'
import axios from 'axios'

const Projects = () => {
  const [Repos, setRepos] = useState([]);

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
        
        {Repos.map((repo) => {
          return (
            <ProjectCard name={repo.name} />
          )
        })}

    </>
  )


};

export default Projects
