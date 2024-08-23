import "./Location.css"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
function Location(){
    const [search,setSearch]=useState("")
    const cities=['Mumbai','Bangalore','Delhi','Pune','Hyderabad','Ahmedabad','Chennai','Chandigarh','Kolkata']
    const handleLocationDetection=()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log('Detected location',position.coords)
        },(error)=>{
            console.log('Error detecting the location',error)
        })
    }
    return(
        <div className='container'>
            <div className="heading">
                <h2>Select Your City</h2>
                <button>&times;</button>
            </div> 
            <div className="searchContainer">
             <div className="searchIcon">
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
            </div>

             <div>
             <input type="search" name="city" className="searchBar" placeholder="Enter you city" onChange={(e) => setSearch(e.target.value)}/>
             </div>
        </div>
        <div className="detectLocation">
            <button className="btn" onClick={handleLocationDetection}><span><FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 text-xl" /></span>Detect my location</button>
        </div>
        <ul className='cities'>
            {
                cities.map((city)=>{
                    return (
                        <>
                    <li onClick={handleLocationDetection}>{city}</li> 
                    <hr width='455px'/></>)
                })
            }
        </ul>
        </div>
    )
}
export default  Location