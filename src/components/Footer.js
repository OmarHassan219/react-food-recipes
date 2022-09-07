import React from 'react'
import { Box, Typography } from '@mui/material'
import Logo   from '../assests/logggo.png'

const Footer = () => {
  return (
    <Box backgroundColor="#fcf4b2"  padding={6} textAlign="center"  >
<img src={Logo} alt='logo' />
<Typography  marginTop='20px'>
    Made with 💓 by Omar & Khalid 
</Typography>
<Typography> All rights reserved 
    &copy; 2022
</Typography>


    </Box>
  )
}

export default Footer