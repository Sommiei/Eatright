
import React, { useEffect, useState } from 'react'
import axios from 'axios'


export const SearchApi = () => {
const [GetApi, setGetApi] = useState ([]);
const [postApi, setPostApi] = useState('')


  const apiUrl ='http://49.13.2.10:4000/todos/'

 
  useEffect(()=>(
    axios.get(apiUrl)
    .then(response => {
      setGetApi(response.data.data)
      console.log(response.data)
    })
    .catch(error => {
        console.error('Error submitting form:', error);
    })
  ),[apiUrl],)
    
  axios.post(apiUrl,{
    name:'sommie',
    description:'trying post method'
  })
  .then(response => {
    setPostApi(response.data.data)
    console.log(response.data)
  })
  .catch(error => {
      console.error('Error submitting form:', error);
  })

  
  return (
    <>
         <div className='bg-red-500  w-[500px] h-[100px]'>
            <div>
              {GetApi.map((item,idx)=>(
             <div key={idx}>
              <p>{item.name}</p>
             </div>   
              ))}
            </div>
          </div>
    
    </>
  )
}
