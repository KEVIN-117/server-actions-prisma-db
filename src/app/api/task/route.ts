import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function POST(req: Request){
    const data = await req.json()
    const task = await prisma.task.create(data)

    return NextResponse.redirect(`/task/${task.id}`)
}


export  async function GET(req:Request){
    const tasks = await  prisma.task.findMany()
    return NextResponse.json(tasks)
}