import React from 'react'

const Sweet = ({ price, quantity, name}) => {
  return (
    <div className='sweet_container'>
        <img src={`/assets/sweets/${name.split(" ").join("_")}.jpg`} alt={name}/>
        <h3>{name}</h3>
        <p>1 {quantity}</p>
        <p>price: {price}</p>
    </div>
  )
}

export default Sweet