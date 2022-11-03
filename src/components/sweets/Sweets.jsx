import React from 'react'
import { sweetData } from '../../data/sweets'
import Sweet from './Sweet'
const Sweets = () => {

  
  return (
    <div className='sweets__container'>
      { sweetData.map( (data, index) => {
      return <Sweet key={index}   name={data.name} price={data.price} quantity={data.size}/>
    })}
    </div>
  )
}

export default Sweets