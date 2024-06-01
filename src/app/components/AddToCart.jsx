'use client'
import React from 'react'

function AddToCart() {
  return (
    <div>
       <button className='border-2 m-2 p-2' onClick={()=>alert('Added Successfully')}>Add To Cart</button>
    </div>
  )
}

export default AddToCart
