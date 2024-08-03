import React from 'react'
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
                        // path='https://en.wikipedia.org/wiki/Perry_the_Platypus'
                        src='images/Spotify-App.png'
                        name='Spotify Analytics Dashboard'
                        text='Developed a Spotify dashboard app with an interactive GUI for users to visually explore songs, artists, and song characteristics using Java Swing and database of 30,000+ songs.'
                        // github='https://github.com/nmurch/react-starter-website/tree/main'
                    />
                </div>
                <div className='project-item project-right-align'>
                    <ProjectItemRight
                        // path='https://en.wikipedia.org/wiki/Perry_the_Platypus'
                        src='images/Story-Website.png'
                        name='Story Sharing Website'
                        text='Led a 5-person team to develop a full-stack Ruby Sinatra website, enabling users to manage books, profiles, and polls, and implemented a staff management system for content moderation and promotional campaigns, using agile methodologies to ensure timely delivery and issue resolution.'
                        // github='https://github.com/nmurch/react-starter-website/tree/main'
                    />
                </div>
                <div className='project-item project-left-align'>
                    <ProjectItemLeft 
                        // path='https://en.wikipedia.org/wiki/Perry_the_Platypus'
                        src='images/SSLCOM.png'
                        name='SSLCom Website'
                        text="Developed a website using HTML/CSS for the SSLCom organization within the Department of Computer Science at my university, enhancing the organization's online presence with pages detailing legal and accessibility considerations, providing essential information and resources to students and faculty."
                        // github='https://github.com/nmurch/react-starter-website/tree/main'
                    />
                </div>
            </div>
      </>
    )
}

export default ProjectSection