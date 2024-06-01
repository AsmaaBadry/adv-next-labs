import { NextResponse } from "next/server";
import schema from '../schema'
import Product from '../../../model/product.model'
import { connectDB } from "../../../../../db/dbConfig";
connectDB()
//get single product
export async function GET(request,{params}){
    //const {name}=request.json()
    const product=await Product.findById({_id:params.productId})
    return NextResponse.json(product)
}

//UPDATE product
export async function PATCH(request,{params}){
    const body= await request.json()
    const validation=schema.safeParse(body)
    if(!validation.success)
    return NextResponse.json(validation.error.errors)
    const product = await Product.findById({_id:params.productId})
    if(!product)
        return NextResponse.json({message:"product not found"})
    const updateProduct=await Product.findByIdAndUpdate({_id:params.productId},{name:body.name},{new:true})
    return NextResponse.json(updateProduct)
}

//delete product
export async function DELETE(request,{params}){
    const {name} =await request.json()
    const product = await Product.findById({_id:params.productId})
    if(!product)
        return NextResponse.json({message:"product not found"})
    await Product.findByIdAndDelete({_id:params.productId})
    return NextResponse.json({})
}