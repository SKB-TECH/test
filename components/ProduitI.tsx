import React from 'react'
import Image from 'next/image'
import logo from '../public/logo2.svg'
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';
import StarIcon from '@mui/icons-material/Star';
import {BsChevronRight} from 'react-icons/bs';
import {CiSettings} from 'react-icons/ci';
import {AiOutlineStar, AiTwotoneStar,AiOutlineLike} from 'react-icons/ai'
import Voice from './Voice';
import VoiceI from './VoiceI';

export default function ProduitI() {
  return (
    <section className='flex flex-col bg-discovery min-h-fit min-w-full border-b-2 border-gray-400'>
            <div className='flex flex-col lg:justify-around items-center lg:flex-row h-fit min-w-full mt-5  '>
                <h1 className='font-sunwish text-3xl text-footer'>What people are saying</h1>
                <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2 underline flex'>view 762 reviews   <BsChevronRight className='mt-1'/>
                </span>
            </div>
           
            <div className='flex flex-col justify-center lg:gap-60 items-center lg:flex-row min-w-full h-42  p-5'>
                <div className="flex flex-col gap-5 justify-center items-center">
                    <CiSettings size={30} className="text-footer ml-1"/>
                    <span className='text-3xl text-center text-footer font-beatrice fon-bold'>762</span>
                    <p className='text-footer font-beatrice'>reviews from customers like you</p>
                </div>
                <div className="flex flex-col gap-5 justify-center items-center font-beatrice lg:mt-14">
                    <AiOutlineStar size={30} className="text-footer"/>
                    <span className='text-3xl text-center text-footer font-beatrice fon-bold'>4.8</span>
                    <span className='text-footer'>out of 5</span>
                    <span className='flex text-footer'>
                        <AiTwotoneStar size={30}/>
                        <AiTwotoneStar size={30}/>
                        <AiTwotoneStar size={30}/>
                        <AiTwotoneStar size={30}/>
                        <AiOutlineStar size={30}/>
                    </span>
                    <span className='underline flex text-footer'>write reviews <BsChevronRight className='mt-1' size={15}/></span>
                </div>
                <div className='flex flex-col gap-5 justify-center items-center text-footer'>
                    <AiOutlineLike size={30}/>
                    <span className='text-3xl text-center text-footer font-beatrice fon-bold'>89%</span>
                    <p className='text-footer font-beatrice'>would recommend to a friend</p>
                </div>
            </div>
            <VoiceI />
    </section>
  )
}
