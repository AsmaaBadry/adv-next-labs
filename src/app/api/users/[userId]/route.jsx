import { NextResponse } from "next/server";

//get single user
export function GET(request,{params}){
    return NextResponse.json({id:params.userId,name:"angelo"})
}

//UPDATE user
export async function PUT(request,{params}){
    const body= await request.json()
    return NextResponse.json({id:params.userId,name:body.name})
}

//delete user
export function DELETE(request,{params}){
    
    return NextResponse.json({})
}