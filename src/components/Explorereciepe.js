import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
import glutfree from '../assests/gluten.jpg'
import vege from '../assests/vege.jpg'
import dairyfree from '../assests/dairy free.png'
import soyfree from '../assests/soy free.png'
import nutfree from '../assests/nut free.png'
import halal from '../assests/halal.jpg'
import '../App.css'
const Explorereciepe = () => {
  return (
<Stack direction="row" alignItems="center" justifyContent='center' backgroundColor='#fcf4b2'  sx={{marginTop:{lg:'20px',sm:'70px' , xs:'45px'},padding:{xl:'0 60px',sm:'0 30px',xs:'15px'}, gap:{xl:'90px',sm:'30px',xs:'5px'}  ,borderBottomLeftRadius:"30px",borderBottomRightRadius:"30px" ,  fontWeight:"700"}} className='explore-rec'>
<img src={glutfree} className='explore-img' alt='gluten-free' />
<img src={dairyfree} className='explore-img' alt='dairy-free' />
<img src={vege} alt='veg' className='explore-img' />
<Typography textAlign='center'  lineHeight="1.5" fontSize='40px'  sx={{fontSize:{xl:'55px',sm:'35px',xs:'25px'}}} fontFamily='Dancing Script' > 
Explore Receipes
</Typography>
<img src={nutfree} className='explore-img' alt='gluten-free' />
<img src={soyfree}className='explore-img' alt='dairy-free' />
<img src={halal}className='explore-img' alt='veg' />




    </Stack>

  )
}

export default Explorereciepe