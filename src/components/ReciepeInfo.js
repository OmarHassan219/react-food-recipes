import { Box, Stack, Typography } from '@mui/material'
import React,{useMemo} from 'react'
import Loader from './Loader'

const ReciepeInfo =  ({receipeInfo})  => {

    const {totalNutrients,totalWeight,calories,totalTime,cuisineType,image,label,dishType,source,url,ingredientLines} = receipeInfo
   console.log(receipeInfo)
  return (
    
    <Stack sx={{maxWidth:'100%'}} >
<Stack   padding={6} sx={{flexDirection:{lg:'row'} , gap:{lg:"30px" , sm:"10px", xs:"5px"} , maxWidth:"100%"}}  >
    <img src={image} alt={label} className="infoimage" />
    <Stack alignItems='center'>
        <Typography variant='h3' marginBottom="10px">{label}</Typography>
        <Typography fontSize='15px' marginBottom="50px">See full recipe on <a href={url} target="_blank" rel="noreferrer">{source} </a></Typography>
         <Typography fontSize='25px' alignSelf='flex-start' marginBottom="10px">Dish Type: {dishType}</Typography>
         <Typography fontSize='25px' alignSelf='flex-start' marginBottom="10px">Cusisine: {cuisineType}</Typography>
         <Typography fontSize='25px' alignSelf='flex-start' marginBottom="10px">Calories : {Math.floor(calories)} Kcal</Typography>
         <Typography fontSize='25px' alignSelf='flex-start' marginBottom="10px">total Time :{totalTime} Minutes</Typography>
    </Stack>
    <hr/>
    <Box width='300px' sx={{marginLeft:{lg:'100px'}}}  border='2px solid black' padding="0 2px">
<Typography fontSize="40px" fontWeight='bold' textAlign="center" borderBottom="1px solid black" >Nutrition Facts</Typography>
<Typography fontSize="22px" textAlign="center" fontWeight='bold'  borderBottom="15px solid black" padding="2px ">Serving size   <Typography marginLeft='80px' fontSize="22px" fontWeight='bold' display="inline-block">{Math.floor(totalWeight)}g</Typography>   </Typography>
<Typography padding={1} paddingBottom='0' fontSize="16px" fontWeight='bold' >Amount per serving</Typography>
<Typography fontSize="30px" fontWeight='bold' marginLeft='5px' textAlign="left" borderBottom="8px solid black" >Calories <Typography marginLeft='50px' fontSize="38px" fontWeight='bold' display="inline-block">{Math.floor(calories)}</Typography></Typography>
<Typography fontSize="22px" textAlign="left" fontWeight='bold'  borderBottom="1px solid black" padding="2px 10px">{totalNutrients?.CHOCDF.label} <Typography marginLeft='10px' fontSize="15px" fontWeight='bold' display="inline-block">{Math.floor(totalNutrients?.CHOCDF.quantity)}{totalNutrients?.CHOCDF.unit}</Typography> </Typography>
<Typography fontSize="22px" textAlign="left" fontWeight='bold'  borderBottom="1px solid black" padding="2px 10px">Fat <Typography marginLeft='10px' fontSize="15px" fontWeight='bold' display="inline-block">{Math.floor(totalNutrients?.FAT.quantity)}{totalNutrients?.FAT.unit}</Typography> </Typography>
<Typography fontSize="22px" textAlign="left" fontWeight='bold'  borderBottom="1px solid black" padding="2px 10px">{totalNutrients?.ENERC_KCAL.label} <Typography marginLeft='10px' fontSize="15px" fontWeight='bold' display="inline-block">{Math.floor(totalNutrients?.ENERC_KCAL.quantity)}{totalNutrients?.ENERC_KCAL.unit}</Typography> </Typography>
<Typography fontSize="22px" textAlign="left" fontWeight='bold'  borderBottom="1px solid black" padding="2px 10px">{totalNutrients?.PROCNT.label} <Typography marginLeft='10px' fontSize="15px" fontWeight='bold' display="inline-block">{Math.floor(totalNutrients?.PROCNT.quantity)}{totalNutrients?.PROCNT.unit}</Typography> </Typography>
    </Box>
</Stack>
    <Stack>
<Stack padding='0 45px'>
    
 <Typography variant="h3" sx={{width:{lg:"970px"}}}  borderTop="2px solid #603913"> {ingredientLines?.length}  Ingredients</Typography>  
    {
ingredientLines?.length ? ingredientLines.map((ing,index) => (

<Typography key={index} fontSize="20px" margin={1} padding={1}> - {ing}. </Typography>


)):''

    }
</Stack>




    </Stack>









    </Stack>




  )
}

export default ReciepeInfo