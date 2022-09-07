
export const options = {
  method: 'GET',
  mode: 'cors',



  
headers: {
'Access-Control-Allow-Origin':'*',
'Accept-Encoding': 'gzip'
}
};



export const fetchData = async(url ,options) =>{
const response = await fetch(url,options);
const data = await response.json();

return data;



}








