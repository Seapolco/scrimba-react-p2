import React from 'react';
import heroImage from '../assets/hero.png';

const Hero = () => {
    return (
        <main className="heroContainer">
            <img src={heroImage} alt="" className="heroImage" />
            <div className="heroText">
                <h1 className="heroHeader">Online Experiences</h1>
                <p className="description">
                    Join unique interactive activities led by <br/>
                    one-of-a-kind hosts - all without leaving <br/>
                    home.
                </p>
            </div>
        </main>
    )
}

export default Hero