'use client'

import { createClient } from "../utils/supabase/client"
const supabase = createClient()


export default function Home() {
    async function unlog() { await supabase.auth.signOut(); location.reload() }
    return (
        <section>
            <p>main</p>
            <button onClick={unlog}>Unlog</button>
        </section>
    );
}
