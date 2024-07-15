import React, { useRef } from 'react'
import '../../App.css'
import '../styles/Projects.css';
import ProjectItem from '../ProjectItem';

function Projects() {
    const introSection = useRef(null);
    const projectSection = useRef(null);

  const scrollHandler = (elmRef) => {
      window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };


    return (
      <>
      <div ref={introSection} className='project-intro-container'>
          <div className='intro-text'>
              <h1>Personal Projects</h1>
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum enim ultrices neque pellentesque, vitae tincidunt dui pellentesque. Sed tortor eros, condimentum vel ultrices nec, auctor sit amet tellus. Mauris faucibus pulvinar ex vel bibendum. Nunc eget erat nisl. Proin ac erat nunc. In sodales porttitor enim, a cursus tellus rutrum vitae. </p>
              <button className='standard-btn' onClick={() => scrollHandler(projectSection)}>View my projects below</button>
          </div>
      </div>
      <div ref={projectSection} className='project-container'>
        <ProjectItem 
          path='https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPerry_the_Platypus&psig=AOvVaw0XbatMwgU1Psa-68brIKIz&ust=1720922019481000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjmhaD0oocDFQAAAAAdAAAAABAE'
          src='images/download.jpeg'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum enim ultrices neque pellentesque, vitae tincidunt dui pellentesque. Sed tortor eros, condimentum vel ultrices nec, auctor sit amet tellus. Mauris faucibus pulvinar ex vel bibendum. Nunc eget erat nisl. Proin ac erat nunc. In sodales porttitor enim, a cursus tellus rutrum vitae.'
          label='perry with a hat'
        />
        <ProjectItem 
          path='https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPerry_the_Platypus&psig=AOvVaw0XbatMwgU1Psa-68brIKIz&ust=1720922019481000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjmhaD0oocDFQAAAAAdAAAAABAI'
          src='images/download.jpeg'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum enim ultrices neque pellentesque, vitae tincidunt dui pellentesque. Sed tortor eros, condimentum vel ultrices nec, auctor sit amet tellus. Mauris faucibus pulvinar ex vel bibendum. Nunc eget erat nisl. Proin ac erat nunc. In sodales porttitor enim, a cursus tellus rutrum vitae.'
          label='nude perry'
        />
        <ProjectItem 
          path='https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPerry_the_Platypus&psig=AOvVaw0XbatMwgU1Psa-68brIKIz&ust=1720922019481000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjmhaD0oocDFQAAAAAdAAAAABAE'
          src='images/download.jpeg'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum enim ultrices neque pellentesque, vitae tincidunt dui pellentesque. Sed tortor eros, condimentum vel ultrices nec, auctor sit amet tellus. Mauris faucibus pulvinar ex vel bibendum. Nunc eget erat nisl. Proin ac erat nunc. In sodales porttitor enim, a cursus tellus rutrum vitae.'
          label='perry with a hat'
        />
        <ProjectItem 
          path='https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPerry_the_Platypus&psig=AOvVaw0XbatMwgU1Psa-68brIKIz&ust=1720922019481000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjmhaD0oocDFQAAAAAdAAAAABAI'
          src='images/download.jpeg'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum enim ultrices neque pellentesque, vitae tincidunt dui pellentesque. Sed tortor eros, condimentum vel ultrices nec, auctor sit amet tellus. Mauris faucibus pulvinar ex vel bibendum. Nunc eget erat nisl. Proin ac erat nunc. In sodales porttitor enim, a cursus tellus rutrum vitae.'
          label='nude perry'
        />
        <ProjectItem 
          path='https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPerry_the_Platypus&psig=AOvVaw0XbatMwgU1Psa-68brIKIz&ust=1720922019481000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjmhaD0oocDFQAAAAAdAAAAABAE'
          src='images/download.jpeg'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum enim ultrices neque pellentesque, vitae tincidunt dui pellentesque. Sed tortor eros, condimentum vel ultrices nec, auctor sit amet tellus. Mauris faucibus pulvinar ex vel bibendum. Nunc eget erat nisl. Proin ac erat nunc. In sodales porttitor enim, a cursus tellus rutrum vitae.'
          label='perry with a hat'
        />
        <ProjectItem 
          path='https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPerry_the_Platypus&psig=AOvVaw0XbatMwgU1Psa-68brIKIz&ust=1720922019481000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjmhaD0oocDFQAAAAAdAAAAABAI'
          src='images/download.jpeg'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum enim ultrices neque pellentesque, vitae tincidunt dui pellentesque. Sed tortor eros, condimentum vel ultrices nec, auctor sit amet tellus. Mauris faucibus pulvinar ex vel bibendum. Nunc eget erat nisl. Proin ac erat nunc. In sodales porttitor enim, a cursus tellus rutrum vitae.'
          label='nude perry'
        />
        <ProjectItem 
          path='https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPerry_the_Platypus&psig=AOvVaw0XbatMwgU1Psa-68brIKIz&ust=1720922019481000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjmhaD0oocDFQAAAAAdAAAAABAE'
          src='images/download.jpeg'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum enim ultrices neque pellentesque, vitae tincidunt dui pellentesque. Sed tortor eros, condimentum vel ultrices nec, auctor sit amet tellus. Mauris faucibus pulvinar ex vel bibendum. Nunc eget erat nisl. Proin ac erat nunc. In sodales porttitor enim, a cursus tellus rutrum vitae.'
          label='perry with a hat'
        />
        <ProjectItem 
          path='https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPerry_the_Platypus&psig=AOvVaw0XbatMwgU1Psa-68brIKIz&ust=1720922019481000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjmhaD0oocDFQAAAAAdAAAAABAI'
          src='images/download.jpeg'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum enim ultrices neque pellentesque, vitae tincidunt dui pellentesque. Sed tortor eros, condimentum vel ultrices nec, auctor sit amet tellus. Mauris faucibus pulvinar ex vel bibendum. Nunc eget erat nisl. Proin ac erat nunc. In sodales porttitor enim, a cursus tellus rutrum vitae.'
          label='nude perry'
        />
      </div>
      <button className='standard-btn' id='to-top-btn' onClick = {() => scrollHandler(introSection)}>Go to top</button>
      </>
    )
}

export default Projects