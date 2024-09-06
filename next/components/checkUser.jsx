'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from "react"
import { createClient } from "../utils/supabase/client"
const supabase = createClient()

export default function CheckUser(){
    const router = useRouter()
    useEffect(()=>{checkUser()}, [])
    
    async function checkUser() {
        let u = await supabase.auth.getUser()
        if (u.data.user) console.log(u.data.user)
        else return router.push('/log')
    }

    return(<></>)
}