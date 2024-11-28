import React from 'react';
import Image from 'next/image';
import { NavBar } from '@/components';
import { User, Search, ShoppingBag } from 'lucide-react';
import Logo from '@/assets/images/logo.svg';

import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='row'>
                    <Image src={Logo} alt='logo' className='header-logo' />

                    <NavBar />

                    <div className='header-right-button'>
                        <Search size={24} />
                        <ShoppingBag size={24} />
                        <User size={24} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;