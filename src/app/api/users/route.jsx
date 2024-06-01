import { NextResponse } from "next/server";
//get all users
export  function GET(request){
    const users=[
    {name:"angelo",id:1},
    {name:"esam",id:2},
    {name:"Alaa",id:3},
    ]
    return NextResponse.json({users})
}
//create user
export async function POST(request){
    //const newUser={id:2,name:"william",password:"123"}
    const body= await request.json()
    return NextResponse.json(body)
}