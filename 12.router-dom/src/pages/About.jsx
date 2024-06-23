import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            <h1>About</h1>
            <Link className='link' to="employee">Calisanlar Hk</Link>
            <Link className='link' to="company">Sirketler Hk</Link>

            <Outlet />
        </div>
    )
}

export default About