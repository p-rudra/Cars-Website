import { useState } from 'react'
import './NewCarsBody.css'
import petrol from './assets/petrol.svg';
import diesel from './assets/diesel.svg';
import electric from './assets/electric.svg';
import cng from './assets/cng.svg';
import hybrid from './assets/hybrid.svg';
import automatic from './assets/automatic.svg';
import manual from './assets/manual.svg';
import suv from './assets/suv.svg';
import sedan from './assets/sedan.svg';
function NewCarsBody(){
    const [selectedTab,setSelectedTab]=useState('BUDGET')
    const renderFunctionality=()=>{
        switch(selectedTab){
            case 'BUDGET':
                return(
                    <div className='buttonContainer'>
                    <a href='' className='element-tab'>Under 5 Lakh</a>
                    <a href='' className='element-tab'>Under 6 Lakh</a>
                    <a href='' className='element-tab'>Under 7 Lakh</a>
                    <a href='' className='element-tab'>Under 8 Lakh</a>
                    <a href='' className='element-tab'>Under 10 Lakh</a>
                    <a href='' className='element-tab'>Under 15 Lakh</a>
                    <a href='' className='element-tab'>Under 20 Lakh</a>
                    <a href='' className='element-tab'>Under 25 Lakh</a>
                    <a href='' className='element-tab'>Under 30 Lakh</a>
                    <a href='' className='element-tab'>Luxury Cars</a>
                    </div>
                )
            case 'FUEL TYPE':
                return(
                    <div className='fuel-type-container'>
                        <div className="fuel-type-item">
                        <img src={petrol} alt="Petrol" className="fuel-icon"/>
                        <span className="fuel-label">Petrol</span>
                        </div>
                        <div className="fuel-type-item">
                            <img src={diesel} alt="Diesel" class="fuel-icon"/>
                            <span className="fuel-label">Diesel</span>
                            
                        </div>
                        <div className="fuel-type-item">
                            <img src={electric} alt="Electric" class="fuel-icon"/>
                            <span className="fuel-label">Electric</span>
                            
                        </div>
                        <div className="fuel-type-item">
                            <img src={hybrid} alt="Hybrid" class="fuel-icon"/>
                            <span className="fuel-label">Hybrid</span>
                            
                        </div>
                        <div className="fuel-type-item">
                            <img src={cng} alt="CNG" class="fuel-icon"/>
                            <span className="fuel-label">CNG</span>

                        </div>
                    </div>
                )
                case 'TRANSMISSION':
                    return(
                        <div className='transmission-container'>
                            <div className="transmission-type-item">
                            <img src={automatic} alt="Automatic" className="transmission-icon"/>
                            <span className="transmission-label">Automatic</span>
                            </div>
                            <div className="transmission-type-item">
                            <img src={manual} alt="Manual" className="transmission-icon"/>
                            <span className="transmission-label">Manual</span>
                            </div>
                        </div>
                    )
                case 'SEATING CAPACITY':
                    return(
                        <div className='seating-type-container'>
                            <a href="" className='element-tab'>5 Seater</a>
                            <a href="" className='element-tab'>6 Seater</a>
                            <a href="" className='element-tab'>7 Seater</a>
                            <a href="" className='element-tab'>8 Seater</a>
                        </div>
                    )
                case 'BODY TYPE':
                    return(
                        <div className='body-type-container'>
                            <div className="body-type-item">
                            <img src={suv} alt="SUV" className="body-icon"/>
                            <span className="body-label">SUV</span>
                            </div>
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

            <h2 className='newCarsHeading'>
            Find The Cars Of Your Choice
            </h2>
            <div className='newCarsTabs'>
                <button className={`ncTab ${selectedTab === 'BUDGET' ? 'active' : ''}`} onClick={()=> setSelectedTab('BUDGET')}>BUDGET</button>
                <button className={`ncTab ${selectedTab === 'BODY TYPE' ? 'active' : ''}`} onClick={()=> setSelectedTab('BODY TYPE')}>BODY TYPE</button>
                <button className={`ncTab ${selectedTab === 'FUEL TYPE' ? 'active' : ''}`} onClick={()=> setSelectedTab('FUEL TYPE')}>FUEL TYPE</button>
                <button className={`ncTab ${selectedTab === 'TRANSMISSION' ? 'active' : ''}`} onClick={()=> setSelectedTab('TRANSMISSION')}>TRANSMISSION</button>
                <button className={`ncTab ${selectedTab === 'SEATING CAPACITY' ? 'active' : ''}`} onClick={()=> setSelectedTab('SEATING CAPACITY')}>SEATING CAPACITY</button>
            </div>
            {renderFunctionality()}
        </>
    )
}
export default NewCarsBody