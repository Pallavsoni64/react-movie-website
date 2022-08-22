import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './Home'
import Error from './Error'
import Singlemovie from './Singlemovie'


const App = () => {
 
  return (
   <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='movie/:id' element={<Singlemovie/>}/>
    <Route path ='*' element={<Error/>}/>
  </Routes>
   </>
  )
}

export default App
