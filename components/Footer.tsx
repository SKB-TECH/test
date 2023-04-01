import React from 'react';
import logo from "../public/logo.svg"
import Image from 'next/image';
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import Link from 'next/link';
import {FaCcVisa,FaCcPaypal} from 'react-icons/fa'


function Footer() {
    return (
        <section className='flex flex-col lg:p-20 z-0 bg-footer h-fit jus min-w-full'>
            <div className='flex flex-row justify-between w-full mt-5 p-10'>
                <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt='logo'
                />
                <div className='flex gap-2 text-blanc_principal'>
                    <AiOutlineInstagram size={30}/>
                    <AiOutlineTwitter size={30}/>
                    <BsFacebook size={30}/>
                </div>
            </div>

            <div className='flex flex-row  gap-10 lg:gap-32 p-10 items-center'>
                <div className="flex flex-col gap-2 mt-8">
                    <h3 className='uppercase text-blanc_principal font-beatrice'>Support</h3>
                    <Link href="#"><span className='font-beatrice font-semibold text-blanc_principal'>Customer Care</span></Link>
                    <Link href="#"><span className='font-beatrice font-semibold text-blanc_principal'>Faq</span></Link>
                    <Link href="#"><span className='font-beatrice font-semibold text-blanc_principal'>Shipping and Returns</span></Link>
                </div>
                <div className="flex flex-col gap-2 mt-8">
                    <h3 className='uppercase text-blanc_principal font-beatrice'>Company</h3>
                    <Link href="#"><span className='font-beatrice font-semibold text-blanc_principal'>Our Story</span></Link>
                    <Link href="#"><span className='font-beatrice font-semibold text-blanc_principal'>Contact Usy</span></Link>
                    <Link href="#"><span className='font-beatrice font-semibold text-blanc_principal'>Join Our Team</span></Link>
                </div>
                <div className="flex flex-col gap-2 mt-5">
                    <h3 className='uppercase text-blanc_principal font-beatrice'>Other</h3>
                    <Link href="#"><span className='font-beatrice font-semibold text-blanc_principal'>Store Locator</span></Link>
                    <Link href="#"><span className='font-beatrice font-semibold text-blanc_principal'>Tastings</span></Link>
                    <Link href="#"><span className='font-beatrice font-semibold text-blanc_principal'>Bulk Orders</span></Link>
                </div>
            </div>
            
            <div className="flex flex-col gap-5 p-10 lg:p-10">
                <div className="mt-4 wrap lg:no-wrap">
                    <span className="text-blanc_principal font-beatrice">©2023 Purple, Inc. All Rights Reserved.</span>
                    <span className="ml-5 text-blanc_principal font-beatrice">Purple brands are trademarks of Purple, Inc.M</span>
                </div>
                <div className="wrap lg:no-wrap" >
                    <span className="text-blanc_principal font-beatrice">Cookie Policy<span className="text-gray-300 text-center ml-1 mr-1">|</span></span>
                    <span className="ml-2 text-blanc_principal font-beatrice">Shipping Policy <span className="text-gray-300 text-center ml-1  mr-1">|</span></span>
                    <span className="text-blanc_principal font-beatrice">Return Policy<span className="text-gray-300 text-center ml-1  mr-1">|</span></span>
                    <span className="ml-2 text-blanc_principal font-beatrice">Disclaimer <span className="text-gray-300 text-center ml-1  mr-1">|</span></span>
                    <span className="text-blanc_principal font-beatrice">Terms & Conditions<span className="text-gray-300 text-center ml-1  mr-1">|</span></span>
                    <span className="ml-2 text-blanc_principal font-beatrice">Privacy Policy <span className="text-gray-300 text-center ml-1  mr-1">|</span></span>
                </div>

                    <p className="text-blanc_principal font-beatrice">
                    The sale of mushroom products to minors is prohibited by law.<br></br>
                    This is an age restricted product and age verification is required at sale.
                    </p>
                <div className="flex wrap lg:no-wrap">
                    <span className="text-blanc_principal font-beatrice"><FaCcVisa size={30}/></span>
                    <span className="ml-2 text-blanc_principal font-beatrice"><FaCcPaypal size={30}/></span>
                </div>
            </div>
        </section>
    );
}

export default Footer;