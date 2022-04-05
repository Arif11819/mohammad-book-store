import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about-container'>

            <h1 className='text-6xl font-style: italic'><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon><span className='about-text'>All Right Reserved By</span> <span className='name-color'>Ariful Islam</span></h1>
        </div>
    );
};

export default About;