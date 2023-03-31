import React from 'react';
import logo from '../public/logo.svg'
import Image from 'next/image';
import {BiSearch} from 'react-icons/bi'
import {FiShoppingBag} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'


function Navbar() {
    return (
        <section className='flex flex-col  w-full h-28 bg-footer text-white z-50 shadow-lg fixed'>
            <div className='hidden lg:flex flex-row justify-around mt-1 font-beatrice'>
                <span className='text-sm text-left'>introducing magic mushroom disponible</span>
                <span className='text-sm text-left'>free ground shipping over $75, use code:my23</span>
                <span className='text-sm text-left'>100% satisfaction guarantee</span>
            </div>
            <div className='flex justify-center items-center gap-48 mt-5'>
                <Image
                    priority
                    src={logo}
                    width={100}
                    height={100}
                    alt='logo'
                />
                <nav className='hidden lg:inline-block'>
                    <ul className='text-white flex flex-row gap-5 font-proximanov font-semibold'>
                        <li>Shop</li>
                        <li>our brand</li>
                        <li>products</li>
                        <li>support</li>
                    </ul>
                </nav>
{/* 0990426590 */}
                <div className='flex ml-300 gap-10'>
                    <span className='text-white hidden lg:inline-block'>
                        <FiShoppingBag size={30}/>
                    </span>
                    <span className='text-white hidden lg:inline-block'>
                        <BiSearch size={30}/>
                    </span>
                    <span className='text-white  lg:hidden'>
                        <GiHamburgerMenu size={40}/>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Navbar;