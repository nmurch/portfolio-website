import React from 'react'
import { Link } from 'react-router-dom'

function ProjectItem(props) {
  return (
    <div className='project-item'>
        <Link className='img-link' to={props.path} >
            <img id='project-img' src={props.src} alt='Project' />
        </Link>
        <br />
        <label for='project-img'>{props.label}</label>
        <p className='description'>{props.text}</p>
    </div>
  )
}

export default ProjectItem