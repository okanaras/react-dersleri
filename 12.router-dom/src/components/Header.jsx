import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link className='link' to="/">Anasayfa</Link>
            <Link className='link' to="/about">Hakkimizda</Link>
            <Link className='link' to="/product">Urunler</Link>
            <Link className='link' to="/contact">Iletisim</Link>
        </div>
    )
}

export default Header