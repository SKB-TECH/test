import React from 'react'
import Image from 'next/image'
import logo from '../public/logo2.svg'
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';
import StarIcon from '@mui/icons-material/Star';
export default function ShoppingI() {
  return (
    <section className='flex flex-col bg-vert min-h-fit min-w-full'>
            <div className='flex flex-col lg:justify-around items-center lg:flex-row h-fit min-w-full mt-5 border-b-2 border-gray-400'>
                <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>Easy-to-use</span>
                <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>Discreet</span>
                <span className='text-footer lg:text-lg  text-2xl font-beatrice'>Recyclable</span>
                <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>Easy-to-use</span>
                <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>Discreet</span>
                <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>Recyclable</span>
                <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>Easy-to-use</span>
                <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>Discreet</span>
                <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>Recyclable</span>
            </div>
            {/* <hr  className='h-1 text-gray-400'></hr> */}
            <div className='flex flex-col justify-around lg:flex-row min-w-full h-42 border-b-2 border-gray-400 p-5'>
                <h1 className='font-sunwish text-3xl lg:text-left text-center text-footer'>
                    Mushroom Magical<br></br> Disposable
                </h1>
                <p className="text-footer text-1xl lg:text-2xl font-beatrice font-normal">
                 This fast-acting and convenient disposable <br></br> is perfect for busy lifestyles
                </p>
            </div>
            <div className='flex flex-col lg:flex-row justify-between min-h-full min-w-full lg:border-b-2 border-gray-400 p-5 lg:p-0'>
                <div className='flex flex-col lg:p-10 lg:w-[50%] lg:border-r-2 border-gray-400 lg:30 h-full'>
                        <div className='flex flex-col justify-center items-center'>
                            <Image
                                priority
                                src={logo}
                                width={100}
                                height={100}
                                alt='logo'
                                className='text-center'
                            />
                        </div>
                    <div className="flex flex-col gap-3 justify-end mt-14 font-beatrice">
                            <h2 className="text-footer font-bold font-Baba text-3xl">
                                Magic Magical Disposable
                            </h2>
                            <p  className='text-footer font-beatrice text-lg text-left'>
                            <StarIcon className='text-footer'/>
                            <StarIcon className='text-footer'/>
                            <StarIcon className='text-footer'/>
                            <StarIcon className='text-footer'/>
                            <StarIcon className='text-footer'/>
                            <span className='text-footer font-beatrice text-lg text-left ml-2 mt-3'>4.9 (97 Reviews)</span>
                            </p>
                    </div>
                    <div className="w-full  flex bg-white justify-between border-2 border-l-4 border-b-4 border-footer shadow-xl mb-5 rounded-md">
                        <button className="text-lg font-semibold text-footer font-beatrice uppercase ml-2">
                            $89.99 | shop now
                        </button>
                        <TrendingFlatRoundedIcon className="text-footer mr-2"/>
                    </div>
                </div>
                <div className="flex flex-col lg:p-10 lg:w-[50%]">
                    <div className='flex flex-col justify-center items-center'>
                    <Image
                        priority
                        src={logo}
                        width={100}
                        height={100}
                        alt='logo'
                        className='text-center'
                     />
                    </div>
                    <div className="flex flex-col gap-3 justify-end mt-14 font-beatrice">
                            <h2 className="text-footer font-bold font-Baba text-3xl">
                                Magic Magical Disposable
                            </h2>
                            <p  className='text-footer font-beatrice text-lg text-left'>
                            <StarIcon className='text-footer'/>
                            <StarIcon className='text-footer'/>
                            <StarIcon className='text-footer'/>
                            <StarIcon className='text-footer'/>
                            <StarIcon className='text-footer'/>
                            <span className='text-footer font-beatrice text-lg text-left ml-2 mt-3'>4.9 (97 Reviews)</span>
                            </p>
                    </div>
                    <div className="w-full  flex bg-white justify-between border-2 border-l-4 border-b-4 border-footer shadow-xl mb-5 rounded-md">
                        <button className="text-lg font-semibold text-footer font-beatrice uppercase ml-2">
                            $89.99 | shop now
                        </button>
                        <TrendingFlatRoundedIcon className="text-footer mr-2"/>
                    </div>
                </div>
            </div>

                        <div className="w-full  flex flex-row justify-center items-center mt-5 border-b-2 border-gray-400 h-14 ">
                            <button className="h-full w-[95%] lg:w-[20%] text-lg font-semibold text-footer font-beatrice uppercase ml-2  border-2 border-l-4 border-b-4 border-footer shadow-xl mb-5 rounded-md">
                            SHOW MORE Flavors
                            </button>
                        </div>
    </section>
  )
}
