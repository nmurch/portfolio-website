import React, { useRef } from 'react'
import './../App.css'
import './styles/Projects.css';
import ProjectItemLeft from './ProjectItemLeft';
import ProjectItemRight from './ProjectItemRight';

const ProjectSection = () => {
    return (
        <>
            <div className='project-container'>
                <h1 className='project-header'><span>projects and portfolio</span></h1>
                <div className='project-item project-left-align'>
                    <ProjectItemLeft 
                        path='https://en.wikipedia.org/wiki/Perry_the_Platypus'
                        src='images/download.jpeg'
                        name='placeholder'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum enim ultrices neque pellentesque, vitae tincidunt dui pellentesque. Sed tortor eros, condimentum vel ultrices nec, auctor sit amet tellus. Mauris faucibus pulvinar ex vel bibendum.'
                        github='https://github.com/nmurch/react-starter-website/tree/main'
                    />
                </div>
                <div className='project-item project-right-align'>
                    <ProjectItemRight
                        path='https://en.wikipedia.org/wiki/Perry_the_Platypus'
                        src='images/download.jpeg'
                        name='placeholder'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum enim ultrices neque pellentesque, vitae tincidunt dui pellentesque. Sed tortor eros, condimentum vel ultrices nec, auctor sit amet tellus. Mauris faucibus pulvinar ex vel bibendum.'
                        github='https://github.com/nmurch/react-starter-website/tree/main'
                    />
                </div>
                <div className='project-item project-left-align'>
                    <ProjectItemLeft 
                        path='https://en.wikipedia.org/wiki/Perry_the_Platypus'
                        src='images/download.jpeg'
                        name='placeholder'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum enim ultrices neque pellentesque, vitae tincidunt dui pellentesque. Sed tortor eros, condimentum vel ultrices nec, auctor sit amet tellus. Mauris faucibus pulvinar ex vel bibendum.'
                        github='https://github.com/nmurch/react-starter-website/tree/main'
                    />
                </div>
                <div className='project-item project-right-align'>
                    <ProjectItemRight
                        path='https://en.wikipedia.org/wiki/Perry_the_Platypus'
                        src='images/download.jpeg'
                        name='placeholder'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum enim ultrices neque pellentesque, vitae tincidunt dui pellentesque. Sed tortor eros, condimentum vel ultrices nec, auctor sit amet tellus. Mauris faucibus pulvinar ex vel bibendum.'
                        github='https://github.com/nmurch/react-starter-website/tree/main'
                    />
                </div>
            </div>
      </>
    )
}

export default ProjectSection