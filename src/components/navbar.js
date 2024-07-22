import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styles/Navbar.css'

function Navbar({ homeRef, projectsRef, contactRef }) {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [color, setColor] = useState(false) // change nav color when scrolling

    const changeColor = () => {
      if (window.scrollY >= 830) {
        setColor(true)
      } else {
        setColor(false)
      }
    }

    window.addEventListener('scroll', changeColor);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
        window.addEventListener('resize', showButton)
        return () => window.removeEventListener('resize', showButton)
    }, [])

    const navbarOffset = 60;

    const scrollHandler = (elmRef) => {
        window.scrollTo({ top: elmRef.current.offsetTop - navbarOffset, behavior: 'smooth' })
    }

    return (
        <nav className={ color ? 'navbar navbar-transparent' : 'navbar'}>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={() => { scrollHandler(homeRef); closeMobileMenu() }}>
                    nm
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <NavLink to='#' className='nav-links' onClick={() => { scrollHandler(homeRef); closeMobileMenu() }}>
                            // home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='#' className='nav-links' onClick={() => { scrollHandler(projectsRef); closeMobileMenu() }}>
                            // projects
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='#' className='nav-links' onClick={() => { scrollHandler(contactRef); closeMobileMenu() }}>
                            // contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
