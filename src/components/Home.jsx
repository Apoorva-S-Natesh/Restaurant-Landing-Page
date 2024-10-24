import React from "react";
import Navbar from './Navbar';
import { FiArrowRight } from "react-icons/fi";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";

function Home(){
    return(
        <div className="home-container">
          <Navbar/>
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                 <img src={BannerBackground} alt="Background image"/>
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">Taste The <span>Extraordinary</span></h1>
                    <p className="primary-text">Indulge your senses in a symphony of flavors at our culinary haven. 
                    From mouthwatering classics to inventive delights, discover a world where every bite tells a delicious story.</p>
                    <button className="secondary-button">Order Now <FiArrowRight/></button>
                </div>
                <div className="home-image-section">
                    <img src={BannerImage} alt="Bowl of fresh food from Foodie"/>
                </div>
            </div>
        </div>
    )
}

export default Home;