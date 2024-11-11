'use server'

import { auth } from "@clerk/nextjs/server"


export const getAurinkoAuthUrl = async (serviceType: 'Google' | 'Office365') => {
    const { userId } = await auth()
    if(!userId) throw new Error('unauthorized')
    
    const params = new URLSearchParams({
        clientId: '88310bfab960e3d92130e08beae15369',
        serviceType,
        scopes: 'Mail.Read Mail.ReadWrite Mail.Send Mail.Drafts Mail.All',
        responseType: 'code',
        returnUrl: `https://ai-email-neon.vercel.app/api/aurinko/callback`,
    })  

    return `https://api.aurinko.io/v1/auth/authorize?${params.toString()}`
}