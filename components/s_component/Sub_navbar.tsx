import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { FiShoppingBag } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../public/logo2.svg';
import Image from 'next/image';
import Link from 'next/link';
export default function Sub_navbar() {
  return (
    <div className='hidden lg:flex lg:flex-row justify-center items-center gap-48 lg:mt-5 cursor-pointer'>
                <Image
                    priority
                    src={logo}
                    width={100}
                    height={100}
                    alt='logo'
                />
                <nav className='hidden lg:inline-block'>
                    <ul className='text-footer flex flex-row gap-5 font-proximanov font-semibold'>
                        <Link href="/shopping"><li>Shop</li></Link>
                        <Link href="/"><li>our brand</li></Link>
                        <Link href="/produit"><li>product</li></Link>
                        <Link href="/"><li>support</li></Link>
                    </ul>
                </nav>
{/* 0990426590 */}
                <div className='flex ml-300 gap-10'>
                    <span className='text-footer hidden lg:inline-block'>
                        <FiShoppingBag size={30}/>
                    </span>
                    <span className='text-footer hidden lg:inline-block'>
                        <BiSearch size={30}/>
                    </span>
                    <span className='text-footer  lg:hidden'>
                        <GiHamburgerMenu size={40}/>
                    </span>
                </div>
            </div>
  )
}
