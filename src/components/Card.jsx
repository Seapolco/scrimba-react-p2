import React from 'react';
//import  swim from '../assets/katie.png';
//import star from '../assets/Star.svg';




const Card = (props) => {

    return(
       <div className="cardSection">
            <div className="card">
                <div className="cardImageContainer">
                    <div className="availability">{props.avail}</div>
                    <img src={props.image} alt="" className="cardImage" />
                </div>
                <div className="cardText">
                    <div className="ratingCountyContainer">
                        <div className="starRating">
                            <img src={props.star}  alt="" className="starIcon" />
                            <p className="ratingAverage">{props.ratingAvg}</p>
                        </div>
                        <p className="ratingCountCountry">({props.ratingCount})  • USA </p>
                    </div>
                    <p className="cardDescription">{props.cardDescr}</p>
                    <p className="cost">$<b>{props.cost}</b> / person</p>
                </div>
            </div>
       </div> 
    )
}

export default Card




// return(
//     <div className="cardSection">
//          <div className="card">
//              <div className="cardImageContainer">
//                  <div className="availability">SOLD OUT</div>
//                  <img src={swim} alt="" className="cardImage" />
//              </div>
//              <div className="cardText">
//                  <div className="ratingCountyContainer">
//                      <div className="starRating">
//                          <img src={star}  alt="" className="starIcon" />
//                          <p className="ratingAverage">5.0</p>
//                      </div>
//                      <p className="ratingCountCountry">(6) • USA </p>
//                  </div>
//                  <p className="cardDescription">Life lessons with Katie Zaferes</p>
//                  <p className="cost"><b>From $136</b> / person</p>
//              </div>
//          </div>
//     </div> 
//  )