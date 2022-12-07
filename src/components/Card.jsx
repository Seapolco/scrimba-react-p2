import React from 'react';
//import  swim from '../assets/katie.png';
//import star from '../assets/Star.svg';




const Card = (props) => {

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
       <div className="cardSection">
            <div className="card">
                <div className="cardImageContainer">
                {badgeText && <div className="availability">{badgeText}</div>}
                    <img src={props.item.coverImg} alt="" className="cardImage" />
                </div>
                <div className="cardText">
                    <div className="ratingCountyContainer">
                        <div className="starRating">
                            <img src="/images/Star.svg" alt="" className="starIcon" />
                            <p className="ratingAverage">{props.item.stats.rating}</p>
                        </div>
                        <p className="ratingCountCountry">({props.item.stats.reviewCount})  • USA </p>
                    </div>
                    <p className="cardDescription">{props.item.title}</p>
                    <p className="cost">$<b>{props.item.price}</b> / person</p>
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