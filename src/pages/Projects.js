import React from 'react'
import projects from './projects.json'
import Project from '../Project'

export default function Projects() {
  console.log(projects)
  return (
    <>
      <h1>Projects</h1>
      {projects.map(project => (
        <Project key={project['Project ID']} project={project} />
      ))}
    </>
  )
}
