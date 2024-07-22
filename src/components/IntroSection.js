import React from 'react'
import '../App.css';
import { Button } from './Button'
import './styles/IntroSection.css';

function IntroSection({projectsRef}) {

  const scrollHandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: 'smooth' })
  }

  return (
    <>
    <div className='intro-container'>
        <div className='inner-container'>
          <p className='greeting'>hello, i'm</p>
            <div className='typewriter'>
              <h1>NICOLE MURCH</h1>
            </div>
          <p className='intro-content'>University student and aspiring full-stack software engineer</p>
          <button className='view-work-btn' onClick= {() => scrollHandler(projectsRef)}>view my work</button>
        </div>
    </div>
    </>
  )
}

export default IntroSection