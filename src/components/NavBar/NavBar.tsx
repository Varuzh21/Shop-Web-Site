import Link from 'next/link'
import React from 'react'

import './navbar.css'

const NavBar = () => {
    return (
        <nav className='nav'>
            <ul className='nav-block'>
                <li className='nav-block-item'><Link href="/home" className='nav-block-item-link'/>Home</li>
                <li className='nav-block-item'><Link href="/home" className='nav-block-item-link'/>Products</li>
                <li className='nav-block-item'><Link href="/home" className='nav-block-item-link'/>Blog</li>
                <li className='nav-block-item'><Link href="/home" className='nav-block-item-link'/>FAQ</li>
                <li className='nav-block-item'><Link href="/home" className='nav-block-item-link'/>Contact Us</li>
            </ul>
        </nav>
    )
}

export default NavBar