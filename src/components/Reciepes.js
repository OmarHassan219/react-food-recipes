import {React, useEffect , useState} from 'react'
import {Box , Typography , Stack , Button} from '@mui/material'
import { fetchData, options } from '../Utils/fetchData'
import ReciepesCard from './ReciepesCard'
import Loader from './Loader'
import NotFound from './NotFound'







const Reciepes = ({selectedoption ,search, setsearch,recepieresult,setrecepieresult}) => {

    const [showMorecount, setshowMorecount] = useState(1)
const NumberofCards = 12 * showMorecount
const Indexoffirst=0

const shownrecipes = recepieresult.slice(Indexoffirst,NumberofCards)



useEffect(() => {

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




// console.log(selectedoption)
// console.log(fetchedrecepies.hits)
// console.log(recepieresult)
}
fethrecepiesdata()

},[selectedoption])


const handleshowmore =() =>{

    
    setshowMorecount(prevcount => prevcount + 1)

}



  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='flex-start' marginTop='30px' gap='80px' padding='40px' textAlign='center' >



{ recepieresult ? shownrecipes.map((recipe,index) => (                

<ReciepesCard selectedoption={selectedoption} key={index} search={search} recipe={recipe.recipe} />
    
    
    
 
 


) ) : <Loader/>  }
{
(recepieresult.length === 0 && search ) ? <NotFound/> :null


}
<Button onClick={handleshowmore} sx={{backgroundColor:'#fff', borderRadius:'30px',  fontSize:'16px', fontWeight:'bold' , color:'#603913', "&:hover":{backgroundColor:'#fcf4b2' , color:'#603913'}}} >Show More recipes</Button>
    </Stack>
  )
}

export default Reciepes