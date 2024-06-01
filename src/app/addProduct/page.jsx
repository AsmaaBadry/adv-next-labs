// 'use client'
// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react'
// import axios from 'axios'
// function AddProduct() {
//   const router=useRouter()
//   const [product,setProduct]=useState({
   
//     name:'',
//     category:''
//   })
//   async function addProduct(e){
//     e.preventDefault()
//     await axios.post('/api/products',product).then((res)=>console.log(res))
//     router.push('/products')
//   }
//   return (
//     <div className="my-3">
//       <h1 className="text-main text-center">Add Form</h1>
//       <form onSubmit={addProduct}>
//         <div className="row mt-4">
//           <div className="col-md-8 m-auto bg-light shadow p-4 ">
//             <div className="row gy-4">
//               <div className="col-md-12">
//                 <label htmlFor="name">Name:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="email"
//                   className="bg-gray-500 text-white"
//                   onChange={(e)=>{setProduct({ ...product, name: e.target.value })}}
//                   value={product.name}
                  
//                 />
               
//               </div>
//               <div className="col-md-12">
//                 <label htmlFor="category">Category:</label>
//                 <input
//                   type="text"
//                   id="category"
//                   name="category"
//                   className="bg-gray-500 text-white"
//                   onChange={(e)=>{setProduct({ ...product, category: e.target.value })}}
//                   value={product.category}
//                 />
                
//               </div>
              
//               <div className="">
//                 <button type='submit' className='btn bg-green-500 text-white'>Add Product</button>
//               </div>
              
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddProduct



'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import axios from 'axios'

function AddProduct() {
  const router = useRouter()
  const [product, setProduct] = useState({
    name: '',
    category: ''
  })

  async function addProduct(e) {
    e.preventDefault()
    await axios.post('/api/products', product).then((res) => console.log(res))
    router.push('/products')
  }

  return (
    <div className="my-3">
      <h1 className="text-4xl font-bold text-center text-blue-600">Add Product</h1>
      <form onSubmit={addProduct}>
        <div className="mt-4">
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                onChange={(e) => { setProduct({ ...product, name: e.target.value }) }}
                value={product.name}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
              <input
                type="text"
                id="category"
                name="category"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                onChange={(e) => { setProduct({ ...product, category: e.target.value }) }}
                value={product.category}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Add Product
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct

