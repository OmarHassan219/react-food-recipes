import React from 'react'
import { Stack,Typography,TextField ,Button, Box} from '@mui/material'
import Logo   from '../assests/logggo.png'
import {Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import plate1 from '../assests/plate 12.png'
import plate2 from '../assests/Fresh-vegetables-flying-in-a-pot-on-transparent-background-PNG.png'
import plate3 from '../assests/plate3.png'
import foodbackg from '../assests/foodbackg.jpg'
import { fetchData ,options } from '../Utils/fetchData';

const Navbar = ({search , setsearch , selectedoption,setrecepieresult,recepieresult}) => {

const handelesearch = async() => {

  if(search === 'wine'|| search === 'pork' || search === 'beer' || search === 'pig'||search === 'vodka'){
    search ='sdfdfgdf'
  }

if(search){
  const fethrecepiesdata = async() => {
//   let APP_ID = process.env.REACT_APP_RAPID_API_ID
// let APP_KEY = process.env.REACT_APP_RAPID_API_KEY
let APP_ID = 'c67ffa53'
let APP_KEY = '4e82346dc08fd138d396ec6c3ff910e5'
let fetchedrecepies = [];

if(selectedoption === "all"){
fetchedrecepies = await  fetchData(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${search}&from=0&to=100&dishType=Main course&excluded=pork&excluded=wine&excluded=beer&excluded=alcohol
`, options)

}
else{

fetchedrecepies = await  fetchData(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&health=${selectedoption}&q=${search}&from=0&to=100&dishType=Main course&excluded=pork&excluded=wine&excluded=beer&excluded=alcohol
`, options)

}

setrecepieresult(fetchedrecepies.hits)
// setsearch('')
// console.log(fetchedrecepies.hits)
// console.log(recepieresult)
// console.log(recepieresult.length)



}
fethrecepiesdata()
}






















// if(search){
// let APP_ID = process.env.REACT_APP_RAPID_API_KEY
// let APP_KEY = process.env.REACT_APP_RAPID_API_ID
  
// const receipeData = await fetchData(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${search}&from=0&to=100&dishType=Main course
// `,options)

// // const receipeData = await fetchData(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=coffee&from=0&to=40&ingr=3&diet=high-protein`, options)




// // const receipeData = await fetchData(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=cake`, options)

// setsearch('')
// console.log(receipeData)

// }



}





  return (
    <Box className='boks' mt={3} sx={{textAlign:'center'}}>
<Stack flexWrap='wrap'  className='nav' justifyContent='space-around' alignItems='center'  sx={{flexDirection:{lg:'row'} ,gap:{lg:'30px',sm:"20px",xs:"5px"},width:{lg:'fit-content',sm:'700px'},borderRadius:'40px', padding:'20px',m:'auto'}}  >
  <Link to='/'>
  <img src={Logo}  alt="Ingredient-free" className='main-logo' />
  </Link>

  <Stack direction='row'  justifyContent='center' sx={{width:{lg:'fit-content',sm:'500px' , xs:'100%'} , marginBottom:{sm:'10px' , xs:'10px'}}}>

  <TextField sx={{Input:{fontWeight:'700' ,border:'none' ,borderRadius:'40px' , color:'#603913',  '&::placeholder':{color:'black' , fontSize:{lg:'15px' , sm:'9px',xs:'8px'}}  }, fieldset:{display:'none'}, borderRadius:'50px',
width:{lg:'800px' , xs:'100%' , sm:"100%"}, backgroundColor:'rgb(255,255,255,0.94)' 

}}  placeholder="Hungry for ......"  style={{border:'none' , outline:'none'}} type='text' value={search}

onChange={(e) => {setsearch(e.target.value)}}


/>
<Button  sx={{backgroundColor:'#fff', borderRadius:'30px',marginLeft:'5px',  fontSize:'10px', fontWeight:'bold', border:{lg:'2px solid #fff',sm:'2px solid #fff',xs:"none"} , color:'#603913',padding:{lg:'5px',sm:'5px 3px',xs:'0'}, "&:hover":{backgroundColor:'#fcf4b2' , color:'#603913'}}}

onClick={handelesearch}


>Search</Button>
</Stack>

<Link to='/'  style={{textDecoration:'none'}}>
<Button   sx={{borderRadius:'10px',fontSize:'16px', border:{lg:'2px solid #fff',sm:'2px solid #fff',xs:"none"} , color:'#603913',padding:{lg:'10px',sm:'5px 3px',xs:'0'}, "&:hover":{backgroundColor:'#603913' , color:'white'}}} className='button' >
  <Stack direction='row'  alignItems='center'>
    <HomeIcon fontSize='medium' className='home-icon' sx={{marginBottom:'2px' ,marginRight:{lg:'6px'},paddingRight:{lg:'3px'}, color:'#603913' , borderRight:{lg:'3px solid #fff'}}} color="primary"/>


<Typography fontWeight='bold' sx={{display:{lg:'block',sm:'none',xs:'none'}}}>Home</Typography>

</Stack>


</Button>


  </Link>



</Stack>

</Box>
  )
}

export default Navbar