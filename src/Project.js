import React from 'react'
import './Project.css'

export default function Project({ project }) {
    console.log(project)
    const email = 'mailto:'+project['TPOC Email']
  return (
    <div className='project'>{project.Title} - <a href={email}>{project.TPOC}</a></div>
  )
}
