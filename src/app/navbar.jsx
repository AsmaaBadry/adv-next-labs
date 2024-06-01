import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-gray-500 p-5 text-white" >
        <div class="container mx-auto">  
         <ul className='flex gap-3 items-center '>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/products'>Products</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>
            <li>
                <Link href='/users'>Users</Link>
            </li>
            <li>
                <Link href='/addProduct'>Add Product</Link>
            </li>
         </ul>
        </div>
    </nav>
    
  )
}

export default Navbar
