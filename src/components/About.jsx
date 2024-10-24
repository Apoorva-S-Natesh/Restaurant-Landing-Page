import React from 'react';
import AboutBAckgroundImage from "../Assets/about-image.png";
import AboutBackImage from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

function About(){
    return(
        <div className='about-section-container'>
        <div className='about-background-image-container'>
           <img className="aboutbg" src={AboutBackImage} alt="background image"/>
        </div>
        <div className='about-section-image-container'>
          <img src={AboutBAckgroundImage} alt="Delicious food bowl"/>
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h2 className='primary-heading'>Only Healthy Meals for you</h2>
            <p className='primary-text'> Our main mission is to prepare delicious, fresh meals using the finest ingredients. We also try to comply with all the requirements of the recipes.
            In addition, we have implemented several levels of daily quality control of dishes by chefs, waiters and restaurant owners.</p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'><BsFillPlayCircleFill/> Watch video</button>
            </div>
        </div>
        </div>
    )
}

export default About