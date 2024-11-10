/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { db } from "@/server/db"
import { NextResponse } from "next/server"


export const POST = async (req: Request) => {
    
    const { data } = await req.json()
    const id = data.id
    const email = data.email_addresses[0].email_address
    const firstName = data.first_name
    const lastName = data.last_name
    const imageUrl = data.image_url

    await db.user.create({
        data: {
            id,
            email,
            firstName,
            lastName,
            imageUrl
        }
    })

    return  NextResponse.json('Clerk data received', {status: 200})
}