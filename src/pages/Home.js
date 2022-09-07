import {React,useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import {Box,Stack ,Typography} from '@mui/material'
import ReciepeOptions from '../components/ReciepeOptions'
import Explorereciepe from '../components/Explorereciepe'
import Reciepes from '../components/Reciepes'


const Home = () => {
  const [search, setsearch] = useState('')
const [selectedoption, setselectedoption] = useState('all')
const [recepieresult, setrecepieresult] = useState('')


  return (
    <Box>
    <Navbar selectedoption={selectedoption} search={search} setsearch={setsearch} setrecepieresult={setrecepieresult} recepieresult={recepieresult}/>
    <Explorereciepe/>
    
<ReciepeOptions selectedoption={selectedoption} setselectedoption={setselectedoption} />
<Reciepes selectedoption={selectedoption} search={search} setsearch={setsearch}  setrecepieresult={setrecepieresult} recepieresult={recepieresult}/>
    </Box>
  )
}

export default Home