import React from 'react'
import {AiOutlineStar, AiTwotoneStar,AiOutlineLike} from 'react-icons/ai'
import logo from "../public/logo2.svg"
import Image from "next/image"
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';
import dataProduitI from '@/public/data/dataproduitI';
export default function ProduitII() {
  return (
    <section className='bg-discovery border-b-2 border-gray-400 flex flex-col justify-center items-center min-h-full w-[100%]'>
        <div className='bg-discovery border-b-2 border-gray-400 flex flex-col lg:flex-row lg:justify-between p-3 items-center  min-h-full w-[100%] gap-5'>
            <span className='text-footer font-beatrice text-1xl'>Non-GMO</span>
            <span className='text-footer font-beatrice text-1xl'>No CBD/THC</span>
            <span className='text-footer font-beatrice text-1xl'>Vegan</span>
            <span className='text-footer font-beatrice text-1xl'>Gluten-Free</span>
            <span className='text-footer font-beatrice text-1xl'>Sustainable Packaging</span>
        </div>
        <div className='flex flex-col min-w-full min-h-full bg-discovery mt-10'>
            <h1 className="text-footer font-sunwish text-center text-3xl font-bold">Check out our other products</h1>
        </div>
        <div className="flex flex-col lg:flex-row  lg:justify-around lg:gap-36">
            {
                dataProduitI.map((items,index)=>(
                    <div className="flex flex-col lg:flex-row justify-around wrap lg:no-wrap" key={index}>
                    <div className="bg-fblanc lg:w-36 w-72  lg:h-64 h-72 mt-3 mb-3 rounded-lg shadow-lg flex flex-col items-center">
                        <h1 className="uppercase text-footer font-Baba text-center font-bold mt-3">{items.title}</h1>
                        <div className="flex flex-row text-footer">
                            <AiTwotoneStar size={20}/>
                            <AiTwotoneStar size={20}/>
                            <AiTwotoneStar size={20}/>
                            <AiTwotoneStar size={20}/>
                    </div>
                        <span className="text-footer font-beatrice text-center">{items.sub}</span>
                            <Image
                                src={logo}
                                width={80}
                                height={80}
                                alt="logo"
                                className="mt-10"
                            />

                            <div className="bg-blanc_principal border-2 border-l-4 mt-10 w-[90%] border-b-4 border-footer shadow-lg rounded-lg gap-10 ">
                                <button className="text-footer font-beatrice ml-3 uppercase">
                                        Shop Now
                                </button>
                                <TrendingFlatRoundedIcon className="text-footer"/>
                            </div>
                    </div>
           
        </div>
                ))
            }
        </div>
    </section>
  )
}
