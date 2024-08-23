import React, { useEffect } from "react"
import { useState } from "react"
import './FeaturedCars.css'
function FeaturedCars(){
    const [cars,setCars]=useState([])
    const [popularCars,setPopularCars]=useState([])
    const [upcomingCars,setUpcomingCars]=useState([])
    const [selectedTab, setSelectedTab] = useState('Trending');
    function formatDate(dateStr) {
        const options = { day: 'numeric', month: 'long' };
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', options);
    }
    useEffect(()=>{
        fetch('/api/featured-cars/')
        .then(response=> response.json())
        .then(data=> setCars(data))
        .catch(error=>console.error('Error fetching cars: ',error)
        )
    },[])   


    useEffect(()=>{
        fetch('/api/popular-cars/')
        .then(response=> response.json())
        .then(data=> setPopularCars(data))
        .catch(error=>console.error('Error fetching cars: ',error)
        )
    },[])

    useEffect(()=>{
        fetch('/api/upcoming-cars/')
        .then(response=> response.json())
        .then(data=> setUpcomingCars(data))
        .catch(error=> console.error('Error fetching cars: ',error)
        )
    },[])

    const renderCars = () => {
        switch (selectedTab) {
            case 'Trending':
                return cars.map((car, index) => (
                    <div key={index} className="car-card">
                        <div className="car-badge">
                            <span className='title'>
                                JUST LAUNCHED
                                <div className='launchDate'>{formatDate(car.launch_date)}</div>
                            </span>
                        </div>
                        <img src={`http://localhost:8000${car.car_image}`} alt={car.car_name} />
                        <h2>{car.car_name}</h2>
                        <p className="car-price">Rs. {car.car_price} Lakh onwards</p>
                        <p className="car-location">On-Road Price, {car.on_road_price}</p>
                        <button className="price-check-btn">Check On-Road Price</button>
                    </div>
                ));
            case 'Popular':
                return popularCars.map((car, index) => (
                    <div key={index} className="car-card">
                        <img src={`http://localhost:8000${car.car_image}`} alt={car.car_name} />
                        <h2>{car.car_name}</h2>
                        <p className="car-price">Rs. {car.car_price} Lakh onwards</p>
                        <p className="car-location">On-Road Price, {car.on_road_price}</p>
                        <button className="price-check-btn">Check On-Road Price</button>
                    </div>
                ));
            case 'Upcoming':
                return upcomingCars.map((car, index) => (
                    <div key={index} className="car-card">
                        <img src={`http://localhost:8000${car.car_image}`} alt={car.car_name} />
                        <h2>{car.car_name}</h2>
                        <p className="car-price">Rs. {car.start_car_price}-{car.end_car_price} {car.type} {car.on_road_price}</p>
                        <button className="price-check-btn">Check On-Road Price</button>
                    </div>
                ));
            default:
                return null;
        }
    };

    return(
        <div className="featured-cars-container">
            <h1 className="content">Featured Cars</h1>
            <div className="tabs">
            <button 
                    className={`tab ${selectedTab === 'Trending' ? 'active' : ''}`} 
                    onClick={() => setSelectedTab('Trending')}
                >
                    Trending
                </button>
                <button 
                    className={`tab ${selectedTab === 'Popular' ? 'active' : ''}`} 
                    onClick={() => setSelectedTab('Popular')}
                >
                    Popular
                </button>
                <button 
                    className={`tab ${selectedTab === 'Upcoming' ? 'active' : ''}`} 
                    onClick={() => setSelectedTab('Upcoming')}
                >
                    Upcoming
                </button>
            </div>
            <div className="cars-grid">
                {renderCars()}
            </div>
        </div>
    )
}
export default FeaturedCars