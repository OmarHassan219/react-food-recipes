import React from 'react'
import {Route,Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import Home from './pages/Home'
import ReciepeDetails from './pages/ReciepeDetails'


import './App.css'
import Footer from './components/Footer'
const App = () => {
  return (
<>
<Box width='400px' sx={{width:{xl:'1448px'} }} m='auto'>
<Routes>

<Route  path='/' element={<Home/>}    />
<Route  path='/receipe/:id' element={<ReciepeDetails/>}    />


</Routes>


</Box>

<Footer/>
</>

  )
}

export default App