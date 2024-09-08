'use client'

import { useEffect, useState } from "react"
import { createClient } from "../utils/supabase/client"
const supabase = createClient()

import dynamic from 'next/dynamic';
const Map = dynamic(() => import('../components/Map'), { ssr: false });


export default function Home() {
    const [user_id, setUser_id] = useState<string>()
    // const [position, setPos] = useState<Array<number>>()

    useEffect(() => { getUser() }, [])

    async function getUser() {
        const { data: { user } } = await supabase.auth.getUser()
        if(!user)return
        setUser_id(user.id)
    }
    // async function unlog() { await supabase.auth.signOut(); location.reload() }
    if(!user_id)return<p>Loading...</p>
    return (
        <section id='map'>
            <Map user_id={user_id}/>
            {/* <button onClick={unlog}>Unlog</button> */}
        </section>
    );
}
