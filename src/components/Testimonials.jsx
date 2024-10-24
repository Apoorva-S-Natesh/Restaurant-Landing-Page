import React from 'react'
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className='work-section-wrapper'>
    <div className='work-section-top'> 
      <p className='primary-subheading'>Testimonial</p>
      <h1 className='primary-heading'>What Are They Saying</h1>
      <p className='primary-text'>Our main mission is to prepare delicious, fresh meals using the finest ingredients. 
        We also try to comply with all the requirements of the recipes.</p>
    </div>
    <div className='testimonial-section-bottom'> 
      <img className='about-section-image-container' src="https://picsum.photos/200" alt="tesimonial profile pic"/>
      <p>Pellentesque vulputate tempor iaculis. Praesent molestie lectus vitae posuere volutpat. Donec at purus massa.</p>
      <div className='testimonials-stars-container'>
      <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
      </div>
      <h2>Karl</h2>
    </div> 
   
    </div>
  )
}

export default Testimonials

