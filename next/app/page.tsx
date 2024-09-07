'use client'

import { useEffect, useState } from "react"
// import { createClient } from "../utils/supabase/client"
// const supabase = createClient()

import dynamic from 'next/dynamic'; 
const Map = dynamic( () => import('../components/Map'), { ssr: false } ); 


export default function Home() {
    const [position, setPos] = useState<Array<number>>()
    useEffect(()=>{setPos([51.505, -0.09])}, [])
    // async function unlog() { await supabase.auth.signOut(); location.reload() }
    if(!position)return<p>Loading...</p>
    return (
        <section id='map'>
            <Map />
            {/* <button onClick={unlog}>Unlog</button> */}
        </section>
    );
}
