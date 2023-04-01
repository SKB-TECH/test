import React from 'react'
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';
import Image from 'next/image'
import logo from '../public/logo2.svg'
import StarIcon from '@mui/icons-material/Star';

interface shopping{
    title:string;
    image:React.ReactNode;
    key:number;
}
export default function Card_shopping(data:shopping) {
  return (
    <div className='flex flex-col justify-center items-center p-10'>
    <div className='flex justify-center items-center'>
        <Image
        priority
        //@ts-ignore
        src={data.image}
        width={90}
        height={90}
        alt='produit'
        className='text-center' />
    </div>  
        <div className="flex flex-col gap-3 justify-end mt-14 font-beatrice">
                <h2 className="text-footer font-bold font-Baba text-3xl">
                    {
                        data ?.title
                    }
                </h2>
                <p className='text-footer font-beatrice text-lg text-left'>
                    <StarIcon className='text-footer' />
                    <StarIcon className='text-footer' />
                    <StarIcon className='text-footer' />
                    <StarIcon className='text-footer' />
                    <StarIcon className='text-footer' />
                    <span className='text-footer font-beatrice text-lg text-left ml-2 mt-3'>4.9 (97 Reviews)</span>
                </p>
                <div className=" flex bg-white  border-2 border-l-4 border-b-4 border-footer shadow-xl mb-5 rounded-md">
                <button className="text-lg font-semibold text-footer font-beatrice uppercase ml-2">
                    $49.99 | shop now
                </button>
                <TrendingFlatRoundedIcon className="text-footer mr-2" />
            </div>
            </div>
            
</div>   
  )
}
