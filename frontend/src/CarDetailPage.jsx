import React,{useEffect,useState} from "react"
import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import './CarDetailPage.css'
function CarDetailPage(){
    function parseCommaSeparatedNumber(value) {
        if (value && typeof value === 'string') {
            return parseInt(value.replace(/,/g, ''), 10);
        }
        return 0;
    }
    const {car_name}=useParams()
    const [car,setCar]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:8000/api/car-details/${car_name}/`)
        .then(response=> response.json())
        .then(data=> setCar(data))
        .catch(error=> console.log('Error fetching the car details:',error))
    },[car_name])
    useEffect(()=>{
        fetch(`http://localhost:8000/api/p-car-details/${car_name}/`)
        .then(response=> response.json())
        .then(data=> setCar(data))
        .catch(error=> console.log('Error fetching the car details:',error))
    },[car_name])
        const ex_showroom_price=parseCommaSeparatedNumber(car.ex_showroom_price)
        const individual_registration=parseCommaSeparatedNumber(car.individual_registration)
        const insurance=parseCommaSeparatedNumber(car.insurance)
        const other_charges=parseCommaSeparatedNumber(car.other_charges)
        const on_road_price=ex_showroom_price+individual_registration+insurance+other_charges
        const formatted_on_road_price=on_road_price
    function specificationTable(){
        switch(car.fuel_type){
            case 'Electric':
                return (
                    <>
                        <table class="specs-table">
                        <tr>
                            <td><strong>Price</strong></td>
                            <td>Rs. {car.car_price}Lakh</td>
                        </tr>
                        <tr>
                            <td><strong>Fuel Type</strong></td>
                            <td>{car.fuel_type}</td>
                        </tr>
                        <tr>
                            <td><strong>Driving Range</strong></td>
                            <td>{car.driving_range}km</td>
                        </tr>
                        <tr>
                            <td><strong>Transmission</strong></td>
                            <td>{car.transmission}</td>
                        </tr>
                        <tr>
                            <td><strong>Seating Capacity</strong></td>
                            <td>{car.seating_capacity} Seater</td>
                        </tr>
                        <tr>
                            <td><strong>Battery Capacity</strong></td>
                            <td>{car.battery_capacity} kWh</td>
                        </tr>
                    </table>
                    </>
                )
            case 'Petrol':
                return (
                    <>
                        <table class="specs-table">
                        <tr>
                            <td><strong>Price</strong></td>
                            <td>Rs. {car.car_price}Lakh</td>
                        </tr>
                        <tr>
                            <td><strong>Fuel Type</strong></td>
                            <td>{car.fuel_type}</td>
                        </tr>
                        <tr>
                            <td><strong>Mileage(kmpl)</strong></td>
                            <td>{car.mileage}</td>
                        </tr>
                        <tr>
                            <td><strong>Transmission</strong></td>
                            <td>{car.transmission}</td>
                        </tr>
                        <tr>
                            <td><strong>Engine(cc)</strong></td>
                            <td>{car.engine}</td>
                        </tr>
                        <tr>
                            <td><strong>Seating Capacity</strong></td>
                            <td>{car.seating_capacity} Seater</td>
                        </tr>
                    </table>
                    </>
                )
            case 'Diesel':
                return (
                    <>
                        <table class="specs-table">
                        <tr>
                            <td><strong>Price</strong></td>
                            <td>Rs. {car.car_price}Lakh</td>
                        </tr>
                        <tr>
                            <td><strong>Fuel Type</strong></td>
                            <td>{car.fuel_type}</td>
                        </tr>
                        <tr>
                            <td><strong>Mileage(kmpl)</strong></td>
                            <td>{car.mileage}</td>
                        </tr>
                        <tr>
                            <td><strong>Transmission</strong></td>
                            <td>{car.transmission}</td>
                        </tr>
                        <tr>
                            <td><strong>Engine(cc)</strong></td>
                            <td>{car.engine}</td>
                        </tr>
                        <tr>
                            <td><strong>Seating Capacity</strong></td>
                            <td>{car.seating_capacity} Seater</td>
                        </tr>
                    </table>
                    </>
                )
                case 'CNG':
                    return (
                        <>
                            <table class="specs-table">
                            <tr>
                                <td><strong>Price</strong></td>
                                <td>Rs. {car.car_price}Lakh</td>
                            </tr>
                            <tr>
                                <td><strong>Fuel Type</strong></td>
                                <td>{car.fuel_type}</td>
                            </tr>
                            <tr>
                                <td><strong>Mileage(kmpl)</strong></td>
                                <td>{car.mileage}</td>
                            </tr>
                            <tr>
                                <td><strong>Transmission</strong></td>
                                <td>{car.transmission}</td>
                            </tr>
                            <tr>
                                <td><strong>Engine(cc)</strong></td>
                                <td>{car.engine}</td>
                            </tr>
                            <tr>
                                <td><strong>Seating Capacity</strong></td>
                                <td>{car.seating_capacity} Seater</td>
                            </tr>
                        </table>
                        </>
                    )
        }
        return (
            <>
            <table class="specs-table">
            <tr>
                <td><strong>Price</strong></td>
                <td>Rs. 11.17 Lakh</td>
            </tr>
            <tr>
                <td><strong>Fuel Type</strong></td>
                <td>Electric</td>
            </tr>
            <tr>
                <td><strong>Driving Range</strong></td>
                <td>331 km</td>
            </tr>
            <tr>
                <td><strong>Transmission</strong></td>
                <td>Automatic</td>
            </tr>
            <tr>
                <td><strong>Seating Capacity</strong></td>
                <td>5 Seater</td>
            </tr>
            <tr>
                <td><strong>Battery Capacity</strong></td>
                <td>38 kWh</td>
            </tr>
        </table>
            </>
        )
    }
    return(
        <>
        <Navbar/>
        <br />
        <div className="detailedCarContainer">
            <h2>{car.car_name}</h2>
            <p>{car.description}</p>
        </div>
        <br />
        <div className="detailContainer">
            <div className="leftContainer">
                <img src={`http://localhost:8000${car.car_image}`} alt="Not found" />
                <h4>{car.car_name}</h4>
            </div>
            <div className="rightContainer">
                <h2>{car.car_name} On Road Price</h2>
                <p>Ex-Showroom Price Rs. {car.ex_showroom_price}</p>
                <p>Individual Registration Rs. {car.individual_registration}</p>
                <p>Insurance Rs. {car.insurance}</p>
                <p>Other Charges Rs. {car.other_charges}</p>
                <hr />
                <h3>On Road Price  Rs. {formatted_on_road_price} </h3>
            </div>
        </div>
        <div className="specificationContainer">
            <h2>{car.car_name} Specifications</h2>
            {specificationTable()}
        </div>
        </>
    )
}
export default CarDetailPage