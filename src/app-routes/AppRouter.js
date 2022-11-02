import React from 'react'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'
import Drinks from '../components/drinks/Drinks'
import Home from '../components/home/Home'
import Navbar from '../components/Navbar/Navbar'
import Sweets from '../components/sweets/Sweets'

const AppRouter = () => {
  return (
    <Router>
    
        <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/sweets" element={<Sweets/>}/>
        <Route path="/drinks" element={<Drinks/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter