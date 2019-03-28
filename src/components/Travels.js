import React from 'react'
import Travel from "./Travel"
import "./travels.css"

const arrayTravels = [
    {
    destination: "Paris",
    country: "France",
    image: "https://via.placeholder.com/600/0000FF/",
    distance: 0,
    },
    {
    destination: "London",
    country: "England",
    image: "https://via.placeholder.com/600/FFF000/",
    distance: 466,
    },
    {
    destination: "Madrid",
    country: "Spain",
    image: "https://via.placeholder.com/600/F000FF/",
    distance: 987,
    },
    {
    destination: "Rome",
    country: "Italy",
    image: "https://via.placeholder.com/600/FF0000/",
    distance: 864,
    },
    {
    destination: "Bogota",
    country: "Colombia",
    image: "https://via.placeholder.com/600/F0FFFF/",
    distance: 3564,
    }
];

function createTravel(Travels){
    return Travels.map(travel => {
        return <Travel destination={travel.destination} country={travel.country} photo={travel.image} distance={travel.distance} />
    })
}

const Travels = () =>{
    return(createTravel(arrayTravels))
}






export default Travels