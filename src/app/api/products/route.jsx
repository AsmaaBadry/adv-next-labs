import { NextResponse } from "next/server";
import schema from "./schema";
import Product from '../../model/product.model'
import { connectDB } from "../../../../db/dbConfig";
connectDB()
//get all products
export async function GET(request){
  const products= await Product.find()
    return NextResponse.json(products)
}
//add product
export async function POST(request){
   
    try {
        const body= await request.json()
        const validation=schema.safeParse(body)
         if(!validation.success)
        return NextResponse.json(validation.error.errors)
    const {name,category}=body
         const product = await Product.findOne({category})
         if(product)
            return NextResponse.json({message:"product already exist"})
        const newProduct=await Product.create({
            name,category
        })
        return NextResponse.json(body,{status:201})
    } catch (error) {
        return NextResponse.json(error)
    }
}