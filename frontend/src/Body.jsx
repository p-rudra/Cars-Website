import React from "react"
import FeaturedCars from "./FeaturedCars";
import car1 from './assets/car1.jpeg'
import car2 from './assets/car2.jpg'
function Body(){
    return(
        <>
            <div className="container mt-5" style={{border:'none'}}>
        <div className="row">
          {/* First Card */}
          <div className="col-lg-6 col-md-12 mt-5 mb-4 cardFirst" style={{ height: '400px' }}>
            <div className="card p-4 shadow">
            <img src={car1} className="card-img-top" alt="Car" />
            </div>
          </div>

          {/* Second Card */}
          <div className="col-lg-6 col-md-12 mb-4 mt-5 cardSecond">
            <div className="card p-4 shadow">
              <img src={car2} className="card-img-top" alt="Car" />
              <div className="card-body">
                <h2 className="card-title">Your Journey Starts Here</h2>
                <p className="card-text">SwiftShift, where every mile matters!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
            <FeaturedCars/>
        </>
    )
}
export default Body