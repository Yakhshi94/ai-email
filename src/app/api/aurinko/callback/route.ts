import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest) => {
    const { userId } = await auth()
    if(!userId) return NextResponse.json({message: 'Unauthorized'}, {status: 401})
    console.log(req)
    const params = req.nextUrl.searchParams
    const status = params.get('status')
    if(status !== 'success') return NextResponse.json({message: 'Failed to link account'}, {status: 401})
    console.log(params)

}