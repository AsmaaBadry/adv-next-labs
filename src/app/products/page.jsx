'use client'
import React, { useEffect, useState } from 'react'
import ProductCart from '../components/ProductCart'
import axios from 'axios'
function Products() {
 const [pro,setPro]= useState([])
  async function getProduct(){
    await axios.get('/api/products').then((res)=>{
      console.log(res)
      setPro(res)
    })
  }
  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div className='flex min-h-screen flex-col items-center justify-start p-24'>
      <ProductCart/>
      {pro?.data?.map((product)=><div key={product.id}>
        <h1>{product.name}</h1>
        <p>{product.category}</p>
      </div>)}
    </div>
  )
}

export default Products
