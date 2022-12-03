import React from 'react';
import  swim from '../assets/katie.png';
import star from '../assets/Star.svg';




const Card = () => {

    return(
       <div className="cardSection">
            <div className="card">
                <div className="cardImageContainer">
                    <div className="availability">SOLD OUT</div>
                    <img src={swim} alt="" className="cardImage" />
                </div>
                <div className="cardText">
                    <div className="ratingCountyContainer">
                        <div className="starRating">
                            <img src={star}  alt="" className="starIcon" />
                            <p className="ratingAverage">5.0</p>
                        </div>
                        <p className="ratingCountCountry">(6) • USA </p>
                    </div>
                    <p className="cardDescription">Life lessons with Katie Zaferes</p>
                    <p className="cost"><b>From $136</b> / person</p>
                </div>
            </div>
       </div> 
    )
}

export default Card