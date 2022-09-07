import {React, useState} from 'react'
import {Stack,Typography,Button} from '@mui/material'
const ReciepeOptions = ({selectedoption ,setselectedoption }) => {
const options = ['all','Gluten-free','vegetarian', 'Dairy-free','Peanut-free',"Soy-free",'wheat-free','Sesame-free','egg-free','tree-nut-free','fish-free','shellfish-free','Red-Meat-Free']


  return (
    <Stack direction='row' gap='10px' alignItems='center' justifyContent='center' mt="15px" flexWrap='wrap'>
    {
        options.map((option,index) => (
<Button key={index} sx={{
backgroundColor: option.toLowerCase() === selectedoption ? '#603913' : '',
textTransform:'capitalize' , color:option.toLowerCase() === selectedoption ? '#fff' : '#000' ,border:'3px solid #603913' ,'&:hover':{backgroundColor:'#603913',color:'#fff'},


}} 
onClick={() => {

setselectedoption(option.toLowerCase())

} }



>
{option}

</Button >


        ))
    }

    </Stack>

  )
}

export default ReciepeOptions