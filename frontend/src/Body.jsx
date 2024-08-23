import React from "react"
import './Body.css'
import banner from './assets/banner.jpg';
import FeaturedCars from "./FeaturedCars";
function Body(){
    return(
        <>
            <div className="banner"></div>
            <FeaturedCars/>
        </>
    )
}
export default Body