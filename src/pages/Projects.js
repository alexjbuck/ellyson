import React, { useState } from 'react'
import projects from './projects.json'
import Project from '../Project'

export default function Projects() {
  console.log(projects)

  const [query, setQuery] = useState('');

  return (
    <>
      <h1>Projects</h1>
      <input type="text" placeholder="Search" onChange={ e => setQuery(e.target.value) }/>
      {projects
      .filter(
        project => Object.values(project).reduce( (prev,next) => prev || next.toString().toLowerCase().includes(query.toLowerCase()), false )
      )
      .map(project => (
        <Project key={project['Project ID']} project={project} />
      ))}
    </>
  )
}
