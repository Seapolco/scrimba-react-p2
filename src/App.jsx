import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import katie from './assets/katie.png';
import star from './assets/Star.svg';


/// DB //////

function App() {

    return (
        <>
        <Navbar />
        <Hero />
        <Card avail="SOLD OUT" image={katie} star={star} 
              ratingAvg="5.0"  ratingCount="(6) • USA"
              cardDescr="Life lessons with Katie Zaferes"
              cost="From $136"
        />
        </>
    )
 
}

export default App