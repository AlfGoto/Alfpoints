'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from "react"
import { createClient } from "../utils/supabase/client"
const supabase = createClient()

export default function CheckUser() {
    const router = useRouter()
    useEffect(() => { checkUser() }, [])

    async function createUser(data) {
        let { data: Users, error } = await supabase
            .from('Users')
            .select("*")
            .eq('id', data.id)
        if (error || Users.length > 0) return

        let { error2 } = await supabase
            .from('Users')
            .insert([
                {
                    id: data.id,
                    img: data.user_metadata.picture ? data.user_metadata.picture : data.user_metadata.avatar_url ? data.user_metadata.avatar_url : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
                    name: data.user_metadata.full_name ? data.user_metadata.full_name : data.user_metadata.name
                },
            ])
        if (error2) return
    }

    async function checkUser() {
        let u = await supabase.auth.getUser()
        if (u.data.user) createUser(u.data.user)
        else return router.push('/log')
    }

    return (<></>)
}