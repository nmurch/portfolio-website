import React from 'react'
import '../App.css';
import { Button } from './Button'
import './styles/IntroSection.css';

function IntroSection() {

  return (
    <div className='intro-container'>
        <video autoPlay loop muted >
          <source src='/videos/IMG_7225.mp4' />
        </video>
        <h1>THIS IS A PLACEHOLDER VIDEO</h1>
        <p>this is the caption for said video</p>
        <div className='intro-btns'>
            <Button path='https://github.com/nmurch' className='btns' buttonStyle='btn--outline' buttonSize='btn--large'
            >GITHUB
            </Button>
            <Button path='https://github.com/nmurch' className='btns' buttonStyle='btn--primary' buttonSize='btn--large'
            >ANOTHER VIDEO BLAH BLAH <i className='far fa-play-circle'/>
            </Button>
        </div>
    </div>
  )
}

export default IntroSection