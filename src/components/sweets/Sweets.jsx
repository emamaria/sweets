import React, { useState } from 'react'
import { sweetData } from '../../data/sweets'
import Sweet from './Sweet'
const Sweets = () => {


const [inputValue, setInputValue] = useState("");


  let filteredData;

 function handleChange(event){
  //  console.log(event.target.value)
   setInputValue(event.target.value)
   filteredData = sweetData.filter( data => data.name === inputValue)
   
    
 }



 


  return (
    <>
    <input type="text" placeholder="write the sweet name" value={inputValue} onChange={handleChange}/>
    <div className='sweets__container'>
      {  (inputValue.length === 0)?sweetData.map( (data, index) => {
          return <Sweet key={index}  name={data.name} price={data.price} quantity={data.size}/>
     }): filteredData?.map((data, index) => <Sweet key={index}  name={data?.name} price={data?.price} quantity={data?.size}/> )}
   
     </div>
    </>
  )
}

export default Sweets