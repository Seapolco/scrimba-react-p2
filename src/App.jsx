import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data'
//import katie from './assets/katie.png';
//import star from './assets/Star.svg';


/// DB //////

function App() {

    let cards = data.map((e) => {
        return <Card avail={e.openSpots > 0 ? "Available" : "SOLD OUT"} 
        image={`/images/${e.coverImg}`} 
        star={'/images/Star.svg'}
        ratingAvg={e.stats.rating}  
        ratingCount={e.stats.reviewCount}
        cardDescr={e.title}
        cost={e.price} />
    })

    return (
        <>
        <Navbar />
        <Hero />
        <div className="cardsContainer">
        {cards}
        </div>
    
        </>
    )
 
}

export default App


{/* <Card avail="SOLD OUT" image="/images/katie.png" star="/images/Star.svg"
ratingAvg="5.0"  ratingCount="(6) • USA"
cardDescr="Life lessons with Katie Zaferes"
cost="From $136"
/> */}