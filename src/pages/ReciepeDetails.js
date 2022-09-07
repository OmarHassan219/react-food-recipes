import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { fetchData,options } from '../Utils/fetchData'
import { Box,Stack,Typography,Button } from '@mui/material'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import Logo   from '../assests/logggo.png'
import Explorereciepe from '../components/Explorereciepe'
import ReciepeInfo from '../components/ReciepeInfo'
import Loader from '../components/Loader'


const ReciepeDetails = () => {

  
  const [receipeInfo, setreceipeInfo] = useState([])
  
const {id} = useParams()


useEffect(() => {
  
const fetchspecrec = async() => {

let APP_ID = 'c67ffa53'
let APP_KEY = '4e82346dc08fd138d396ec6c3ff910e5'
let fetchedrecepie = []
  console.log(id)
fetchedrecepie = await fetchData(`https://api.edamam.com/api/recipes/v2/${id}?app_id=${APP_ID}&app_key=${APP_KEY}&type=public
`, options)
// fetchedrecepie = await fetchData(`https://api.edamam.com/api/recipes/v2/${id}
// `, options)

setreceipeInfo(fetchedrecepie.recipe)
console.log( fetchedrecepie.recipe)
console.log('////////////')

}


fetchspecrec()


}, [id])

console.log(receipeInfo)

  return (
   <Box sx={{maxWidth:'100%'}} >
<Box className='boks' mt={3} sx={{textAlign:'center' , maxWidth:'100%'}}>
<Stack flexWrap='wrap'  className='nav' justifyContent='space-around' alignItems='center'  sx={{flexDirection:{lg:'row'} ,gap:{lg:'30px',sm:"20px",xs:"5px"},width:{lg:'fit-content',sm:'700px'},borderRadius:'40px', padding:'20px',m:'auto'}}  >
  <Link to='/'>
  <img src={Logo}  alt="Ingredient-free" className='main-logo' />
  </Link>

  <Stack direction='row'  justifyContent='center' sx={{width:{lg:'fit-content',sm:'500px' , xs:'100%'} , marginBottom:{sm:'10px' , xs:'10px'}}}>

  
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

<Explorereciepe/>
{ receipeInfo ?
<ReciepeInfo receipeInfo={receipeInfo} /> : <Loader/>
}
</Box>








  )
}

export default ReciepeDetails