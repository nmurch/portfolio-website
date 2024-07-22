import React from 'react'
import { Link } from 'react-router-dom'

function ProjectItemLeft(props) {
  return (
    <>
        <Link className='img-link' to={props.path} target='_blank'>
            <div className='project-outline left-outline'>
                <img className='project-img' src={props.src} alt='Project' />
            </div>
        </Link>
        <div className='project-info left-info'>
            <h2>{props.name}</h2>
            <p>{props.text}</p>
            <div className='app-link'>
                <Link to={props.path} target='_blank'>
                    view the app
                </Link>
            </div>
            <div className='app-link'>
                <Link to={props.github} target='_blank'>
                    GitHub repository
                </Link>
            </div>
        </div>
    </>
  )
}

export default ProjectItemLeft