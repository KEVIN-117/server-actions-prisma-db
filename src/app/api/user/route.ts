import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function POST(req: Request){
    const data = await req.json()
    const user = await prisma.user.create(data)
    return NextResponse.redirect(`/user/${user.id}`)
}

export async function GET(){
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}