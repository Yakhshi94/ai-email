'use client'

import { getAurinkoAuthUrl } from "@/lib/aurinko"
import { Button } from "./button"


function LinkAccountButton() {
  return (
    <Button onClick={async ()=> {
        const authUrl = await getAurinkoAuthUrl('Google')
        window.location.href = authUrl 
    }}>Link Account</Button>
  )
}

export default LinkAccountButton