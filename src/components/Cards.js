import React from 'react';
import CardItem from './CardItem';
import './styles/Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out some of my projects</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/package.jpg' 
                    text='Some project' 
                    label='perry' 
                    path='/projects' />
                    <CardItem 
                    src='images/package.jpg' 
                    text='Another project' 
                    label='perry' 
                    path='/projects' />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/package.jpg' 
                    text='Some project' 
                    label='perry' 
                    path='/projects' />
                    <CardItem 
                    src='images/package.jpg' 
                    text='Another project' 
                    label='perry' 
                    path='/projects' />
                    <CardItem 
                    src='images/package.jpg' 
                    text='Yet another project' 
                    label='perry' 
                    path='/projects' />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards