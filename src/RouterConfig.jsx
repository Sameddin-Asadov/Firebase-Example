import React from 'react'
import {  Routes, Route } from "react-router";
import Home from './pages/Home';
import Auth from './pages/Auth';
function RouterConfig() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route  path='/auth' element={<Auth/>} />
          

          
        </Routes>
    </div>
  )
}

export default RouterConfig