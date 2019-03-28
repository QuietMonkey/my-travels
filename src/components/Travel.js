import React from 'react'
import './travel.css'

const Travel = ({destination, country, photo, distance}) =>{
    return(
    <div className="carte">
        <h1>{destination}</h1>
        <h2>{country}</h2>
        <img src= {photo}/>
        <h2>The city of {destination} is just {distance} km away!</h2>
    </div>
    )
}

export default Travel