import React from 'react'
import {Route, Routes} from "react-router-dom"
import PrivateRouter from "./PrivateRouter"
import About from "../pages/About/About"
import Details from "../pages/Details/Details"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"

export const AppRouter = () => {
  return (
    <>
        <Routes>
         <Route path="/home" element={<Home />} />
          <Route path="/private" element={<PrivateRouter/>} >
            <Route path="about" element={<About />} />
            <Route path="details" element={<Details />} />
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Register/>} />

         
        </Routes>
    </>


 
    
  )
}

