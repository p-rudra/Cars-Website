import { useState,useEffect } from 'react'
import Navbar from './Navbar'
import Location from './Location'
import Body from './Body'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home'
import NewCarsPage from './NewCarsPage'
import CarDetailPage from './CarDetailPage'
import AuthenticationForUser from './AuthenticationForUser'
function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new-cars' element={<NewCarsPage/>}/>
      <Route path='/car/:car_name' element={<CarDetailPage/>}/>
      <Route path='/auth-options' element={<AuthenticationForUser/>}/>
    </Routes>
    </Router>
    </>   
  )
}

export default App
