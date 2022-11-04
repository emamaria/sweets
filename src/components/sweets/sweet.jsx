import React from 'react'

const Sweet = ({ price, quantity, name}) => {
  return (
    <div className='sweet_container'>
        <img src={`/assets/sweets/${name.split(" ").join("_")}.jpg`} alt={name}/>
        <h3>{name[0].toUpperCase() + name.substring(1)}</h3>
        <p>1 {quantity}</p>
        <p>Price: {price}€</p>
    </div>
  )
}

export default Sweet