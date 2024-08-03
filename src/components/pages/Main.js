import React, { useRef } from 'react'
import Contact from '../Contact'
import '../../App.css'
import IntroSection from '../IntroSection'
import ProjectSection from '../ProjectSection'
import Navbar from '../Navbar'

function Main() {
    const home = useRef(null)
    const projects = useRef(null)
    const contact = useRef(null)

    return (
        <>
            <Navbar homeRef={home} projectsRef={projects} contactRef={contact} />
            <div className='main-container'>
                <div ref={home}>
                    <IntroSection projectsRef={projects} />
                </div>
                <div ref={projects}>
                    <ProjectSection />
                </div>
                <div ref={contact}>
                    <Contact />
                </div>
                <button className='standard-btn' id='to-top-btn' onClick={() => window.scrollTo({ top: home.current.offsetTop, behavior: 'smooth' })}>
                    Go to top
                </button>
            </div>
        </>
    )
}

export default Main