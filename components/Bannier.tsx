import React from 'react'
import Image from 'next/image';
import {BiSearch} from 'react-icons/bi'
import {FiShoppingBag} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import Sub_navbar from './s_component/Sub_navbar';


export default function Bannier() {
  return (
    <section className="flex flex-col justify-center h-92 min-w-full bg-discovery lg:mt-10 border-b-2 border-gray-400">
        <Sub_navbar/>
        <section className="flex mt-5 lg:mt-0 flex-col lg:flex-row lg:justify-center lg:items-center  h-92 min-w-full lg:p-20 mb-10 lg:mb-0">
            {/* first part */}
            <div className="flex  ml-6 lg:ml-0 flex-col lg:w-[50%]">
                <h1 className="lg:text-5xl mr-2 lg:mr-0 text-2xl text-footer font-bold mb-4 font-sunwish">
                    Get Groovy with Our Magic Mushroom Products
                </h1>
                <p className="text-footer text-lg mr-2 lg:mr-0 lg:p-0 lg:text-left font-beatrice">
                    Indulge in the natural goodness of mushrooms with our psilocybin-free gummies, cones, and disposables made with natural ingredients, for a delicious and healthy way to enhance your focus and energy levels
                </p>
            </div>
            {/* second part */}

            <div className="flex flex-col lg:ml-20 lg:-mt-2 lg:w-[50%] h-56 lg:h-60 m-4 p-4 bg-discovery_boite">
            </div>
        </section>
    </section>
  )
}
