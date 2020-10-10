import React from 'react';
import '../App.css';
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/public/videos/video-1.mp4" autoPlay loop muted />
            <h1> Advertisement</h1>
            <h3>
            A strategic experience agency crafting brands, websites, products, and
            pretty much anything you can imagine
          </h3>

        </div>
    )
}

export default HeroSection;
