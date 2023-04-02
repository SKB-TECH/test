import React from 'react'
import Image from 'next/image';
import Sub_navbar from './s_component/Sub_navbar';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import dataProduit from '@/public/data/dataproduct';
import Sliders from './s_component/Slider';

export default function Bannier() {
  return (
    <section className="flex flex-col justify-center h-92 min-w-full bg-discovery lg:mt-10 border-b-2 border-gray-400">
        <Sub_navbar/>
        <section className="flex mt-5 lg:mt-0 flex-col lg:flex-row lg:justify-center lg:items-center  h-92 min-w-full lg:p-20 mb-10 lg:mb-0">
            {/* first part */}
            <div className="flex  ml-6 lg:ml-0 flex-col lg:w-[60%]">
                <h1 className="lg:text-5xl mr-2 lg:mr-0 text-2xl text-footer font-bold mb-4 font-sunwish">
                Magic Amanita Mushroom Gummy<br></br> Strawberry
                </h1>
                <div className="flex mb-2 text-footer">
                   <AiFillStar size={20}/> 
                   <AiFillStar size={20}/> 
                   <AiFillStar size={20}/> 
                   <AiFillStar size={20}/> 
                   <AiOutlineStar size={20}/> 
                   <span className="text-footer font-beatrice ml-2">4.8 (97 Reviews)</span>
                </div>
                <p className="text-footer text-lg mr-2 lg:mr-0 lg:p-0 lg:text-left font-beatrice">
                Looking for a delicious and healthy way to support your well-being? These psilocybin-free gummies offer all the benefits of mushrooms in a tasty and convenient form
                </p>
            </div>
            {/* second part */}

            <div className="flex flex-col w-full h-full lg:ml-32 lg:-mt-32 lg:w-[40%] h-56 lg:h-60 m-4 p-4 ">
                <Sliders/>
            </div>
        </section>
    </section>
  )
}
