import {React, useEffect , useState} from 'react'
import {Box , Typography , Stack , Button} from '@mui/material'
import { Link } from 'react-router-dom'

const ReciepesCard = ({recipe,search , selectedoption}) => {
    const {image , calories , label , source} = recipe
    // const go =()=>{
    //     console.log(recipe.shareAs.toString().split("").slice(-34,-2).join(''))
    // }
    let recipeidUrl = ''
    let lastindexsearch = search.length
    let lastindexselect = selectedoption.length
    const go =() => {

        console.log(recipe.shareAs)

    }
    if(search && selectedoption === 'all') {
   recipeidUrl = recipe.shareAs.toString().split("").slice(-(lastindexsearch  +33),-(lastindexsearch  + 1)).join('')
    }
    else if(selectedoption !== 'all' && search) {
recipeidUrl = recipe.shareAs.toString().split("").slice(-(lastindexselect + lastindexsearch  + 34),-(lastindexsearch + lastindexselect  + 2)).join('')
    }
    else if(selectedoption !== 'all' && !search) {
recipeidUrl = recipe.shareAs.toString().split("").slice(-(lastindexselect  + 35),-(lastindexselect + 2)).join('')
    }
    
    else{
     recipeidUrl = recipe.shareAs.toString().split("").slice(-34,-2).join('')}
    return (
    <Link to={`/receipe/${recipeidUrl}`} >

<Stack onClick={go}  overflow='hidden' padding='10px' border='1px solid #ccc' backgroundColor='#fafafa' sx={{width:'322px' , cursor:'pointer', borderTopRightRadius:'10px',  borderTopLeftRadius:'10px'}}>

   
    <Box position='relative'>
<img src={image} alt='food' loading='lazy' style={{width:'300px' , borderTopLeftRadius:'10px' , borderTopRightRadius:'10px'}} />
<Typography position='absolute' left='0' bottom='0' sx={{backgroundColor:'#fff' , borderTopRightRadius:'10px' , borderTopLeftRadius:'10px' , padding:'5px 10px' , fontSize:'12px' , fontWeight:'bold' , color:'#757575'}}>

  Calories: {Math.ceil(calories)}
</Typography>
</Box>

<Typography sx={{fontSize:'15px' , color:'#2F820C' , marginTop:'10px'}} >
by {source}

</Typography>
<Typography sx={{fontWeight:'bold' , fontSize:'20px' , color:'#000' , marginTop:'10px'}} >
{label}

</Typography>

</Stack>
 </Link>

  )
}

export default ReciepesCard