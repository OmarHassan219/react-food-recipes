import React from 'react'
import {Circles} from 'react-loader-spinner'
import {Stack} from '@mui/material'

const Loader = () => {
  return (
    <Stack direction='row' justifyContent="center" alignItems="center" width="100%">
<Circles />

</Stack> 
  )
}

export default Loader