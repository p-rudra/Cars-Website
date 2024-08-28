import { useState,useEffect} from 'react'
import './NewCarsBody.css'
import petrol from './assets/petrol.svg';
import diesel from './assets/diesel.svg';
import electric from './assets/electric.svg';
import cng from './assets/cng.svg';
import automatic from './assets/automatic.svg';
import manual from './assets/manual.svg';
import suv from './assets/suv.svg';
import axios from 'axios'
import sedan from './assets/sedan.svg';
function NewCarsBody(){
    const [selectedTab,setSelectedTab]=useState('BUDGET')
    const [selectedFuelType,setSelectedFuelType]=useState('')
    const [selectedBudget,setSelectedBudget]=useState('')
    const [selectedTransmission, setSelectedTransmission] = useState('');
    const [selectedSeating, setSelectedSeating] = useState('');
    const [selectedBodyType, setSelectedBodyType] = useState('');
    const [cars, setCars] = useState([]);

    const fetchFilteredCars = async () => {
        const filters = {
            budget: selectedBudget,
            fuel_type: selectedFuelType,
            transmission: selectedTransmission,
            seating_capacity: selectedSeating,
            body_type: selectedBodyType,
        };

        try {
            const response = await axios.get('http://127.0.0.1:8000/api/cars/', {
                params: filters
            });
            setCars(response.data);
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    };
    
    const renderFunctionality=()=>{
        switch(selectedTab){
            case 'BUDGET':
                return(
                    <div className='buttonContainer'>
                    <input type="radio" name="budget" value='500000' onChange={(e)=>setSelectedBudget(e.target.value)}/><button className='element-tab'>Under 5 Lakh</button>
                    <input type="radio" name="budget" value='600000'onChange={(e)=>setSelectedBudget(e.target.value)} /><button className='element-tab'>Under 6 Lakh</button>
                    <input type="radio" name="budget" value='700000'onChange={(e)=>setSelectedBudget(e.target.value)} /><button className='element-tab'>Under 7 Lakh</button>
                    <input type="radio" name="budget" value='1000000' onChange={(e)=>setSelectedBudget(e.target.value)}/><button className='element-tab'>Under 10 Lakh</button>
                    <input type="radio" name="budget" value='1500000' onChange={(e)=>setSelectedBudget(e.target.value)}/><button className='element-tab'>Under 15 Lakh</button>
                    <input type="radio" name="budget" value='2000000' onChange={(e)=>setSelectedBudget(e.target.value)}/><button className='element-tab'>Under 20 Lakh</button>
                    <input type="radio" name="budget" value='2500000' onChange={(e)=>setSelectedBudget(e.target.value)} /><button className='element-tab'>Under 25 Lakh</button>
                    <input type="radio" name="budget" value='3000000' onChange={(e)=>setSelectedBudget(e.target.value)}/><button className='element-tab'>Under 30 Lakh</button>
                    </div>
                )
            case 'FUEL TYPE':
                return(
                    <div className='fuel-type-container'>
                        <input type="radio" name="fuel-type" value='Petrol' onChange={(e)=>setSelectedFuelType(e.target.value)} />
                        <div className="fuel-type-item">
                        <img src={petrol} alt="Petrol" className="fuel-icon"/>
                        <span className="fuel-label">Petrol</span>
                        </div>
                        <input type="radio" name="fuel-type" value='Diesel' onChange={(e)=>setSelectedFuelType(e.target.value)}/>
                        <div className="fuel-type-item">
                            <img src={diesel} alt="Diesel" class="fuel-icon"/>
                            <span className="fuel-label">Diesel</span>
                            
                        </div>
                        <input type="radio" name="fuel-type" value='Electric' onChange={(e)=>setSelectedFuelType(e.target.value)}/>
                        <div className="fuel-type-item">
                            <img src={electric} alt="Electric" class="fuel-icon"/>
                            <span className="fuel-label">Electric</span>
                            
                        </div>
                        <input type="radio" name="fuel-type" value='Cng' onChange={(e)=>setSelectedFuelType(e.target.value)} />
                        <div className="fuel-type-item">
                            <img src={cng} alt="CNG" class="fuel-icon"/>
                            <span className="fuel-label">CNG</span>

                        </div>
                    </div>
                )
                case 'TRANSMISSION':
                    return(
                        <div className='transmission-container'>
                            <input type="radio" name="transmission" value='Automatic' onChange={(event)=> setSelectedTransmission(event.target.value)}/>
                            <div className="transmission-type-item">
                            <img src={automatic} alt="Automatic" className="transmission-icon"/>
                            <span className="transmission-label">Automatic</span>
                            </div>
                            <input type="radio" name="transmission" value='Manual' onChange={(event)=> setSelectedTransmission(event.target.value)}/>
                            <div className="transmission-type-item">
                            <img src={manual} alt="Manual" className="transmission-icon"/>
                            <span className="transmission-label">Manual</span>
                            </div>
                        </div>
                    )
                case 'SEATING CAPACITY':
                    return(
                        <div className='seating-type-container'>
                           <input type="radio" name="seating" value='5' onChange={(event)=> setSelectedSeating(event.target.value)}/> <button className='element-tab'>5 Seater</button>
                            <input type="radio" name="seating" value='7' onChange={(event)=> setSelectedSeating(event.target.value)}/><button  className='element-tab'>7 Seater</button>
                            <input type="radio" name="seating" value='8' onChange={(event)=> setSelectedSeating(event.target.value)}/><button  className='element-tab' >8 Seater</button>
                        </div>
                    )
                case 'BODY TYPE':
                    return(
                        <div className='body-type-container'>
                            <input type="radio" name="body" value='SUV' onChange={(event)=>setSelectedBodyType(event.target.value)}/>
                            <div className="body-type-item">
                            <img src={suv} alt="SUV" className="body-icon"/>
                            <span className="body-label">SUV</span>
                            </div>
                            <input type="radio" name="body" value='SEDAN' onChange={(event)=>setSelectedBodyType(event.target.value)} />
                            <div className="body-type-item">
                            <img src={sedan} alt="SEDAN" className="body-icon"/>
                            <span className="body-label">SEDAN</span>
                            </div>
                        </div>
                    )
        }
    }
    return(
        <>
            <h2 className='newCarsHeading'>New Cars</h2>
            <div className='description'>
            Are you planning on buying a new car? Well, we know that with so many car options available out there, it gets really difficult to find a good car which suits your need. Hence, we have put together a complete list of new cars. Maruti Suzuki, Tata and Mahindra are the 3 most popular car brands. These popular car brands cater to a wide spectrum of budgets and needs, offering a variety of cars from fuel-efficient hatchbacks to spacious SUVs. The 5 most popular cars are Mahindra Thar Roxx, Citroen Basalt, Mahindra XUV 3XO, Tata Curvv EV and Maruti Suzuki Fronx. Explore the complete list of cars by exploring different brands or by applying multiple filters such as budget, fuel type, body type etc. You can find the car that suits you best from the list of cars below.
            </div>
            <h3 className='newCarsHeading'>
            Find The Cars Of Your Choice
            </h3>
            <div className='newCarsTabs'>
                <button className={`ncTab ${selectedTab === 'BUDGET' ? 'active' : ''}`} onClick={()=> setSelectedTab('BUDGET')}>BUDGET</button>
                <button className={`ncTab ${selectedTab === 'BODY TYPE' ? 'active' : ''}`} onClick={()=> setSelectedTab('BODY TYPE')}>BODY TYPE</button>
                <button className={`ncTab ${selectedTab === 'FUEL TYPE' ? 'active' : ''}`} onClick={()=> setSelectedTab('FUEL TYPE')}>FUEL TYPE</button>
                <button className={`ncTab ${selectedTab === 'TRANSMISSION' ? 'active' : ''}`} onClick={()=> setSelectedTab('TRANSMISSION')}>TRANSMISSION</button>
                <button className={`ncTab ${selectedTab === 'SEATING CAPACITY' ? 'active' : ''}`} onClick={()=> setSelectedTab('SEATING CAPACITY')}>SEATING CAPACITY</button>
            </div>
            {renderFunctionality()}
            <br />
            <br />
            <button className='submit-button' onClick={fetchFilteredCars}>Submit</button>
            <div>
                {cars.length > 0 ? (
                    <div className="cars-container">
                        {cars.map((car, index) => (
                            <div key={index} className="car-item">
                                <img src={`http://localhost:8000${car.car_image}`} alt={car.name} className="car-image" />
                                <h3>{car.name}</h3>
                                <p>Price: {car.car_price} {car.type}</p>
                                <p>Fuel Type: {car.fuel_type}</p>
                                <p>Transmission: {car.transmission}</p>
                                <p>Seating Capacity: {car.seating_capacity}</p>
                                <p>Body Type: {car.body_type}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No cars found based on selected filters.</p>
                )}
            </div>
        </>
    )
}
export default NewCarsBody