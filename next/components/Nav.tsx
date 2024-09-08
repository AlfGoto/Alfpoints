'use client'

import { useState } from "react";
import Link from 'next/link'
import { createClient } from "../utils/supabase/client"
const supabase = createClient()

export default function Nav() {
    const [display, setDisplay] = useState<boolean>(false)
    async function unlog() { await supabase.auth.signOut(); location.reload() }

    return (
        <nav>
            {/* <svg className={display ? 'displayed' : ''} onClick={() => setDisplay(!display)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24"><path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path></svg> */}

            <nav className="hamburger">
                <svg className={display ? 'displayed' : ''} onClick={() => setDisplay(!display)} id="burgericon" xmlns="http://www.w3.org/2000/svg" width="90" height="80">
                    <g className="icon">
                        <rect className="frstbar" x="5" y="5" width="35" height="6" rx="3.5" ry="3.5" fill="#414141" />
                        <rect className="scndbar" x="5" y="17.5" width="35" height="6" rx="3.5" ry="3.5" fill="#414141" />
                        <rect className="thrdbar" x="5" y="30" width="35" height="6" rx="3.5" ry="3.5" fill="#414141" />
                    </g>
                </svg>
            </nav>

            <div id='contentDiv' className={display ? 'displayed' : ''} >
                <Link href='/'>Home</Link>
                <Link href='/classments'>Classments</Link>
                <button onClick={unlog}>Unlog</button>
            </div>
        </nav>
    )
}