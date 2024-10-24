import React from 'react'
import Food from '../Assets/food.png';
import HowOften from '../Assets/calender.png';
import FastDelivery from '../Assets/fast-delivery.png';

const Work = () => {
    const WhyUs=[{
        icon:Food,
        title:"Pick Meals",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        
    },
    {
        icon:HowOften,
     title:"Choose How Often",
     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    
    },
    {
        icon:FastDelivery,
      title:"Fast Delivery",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    
    }]
        
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How it works</h1>
            <p className='primary-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium nec nibh id varius. 
            Ut ac viverra nisi. Donec ornare porta neque vel pretium. Integer sed fringilla nulla. 
            </p>
        </div>
        <div className='work-section-bottom'>
          {
            WhyUs.map((item)=>(<div className='work-section-info'>
                <div className='info-boxes-img-container'>
                    <img src={item.icon} alt="Fast and delicious food Delivery icons"/>
                </div>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Work