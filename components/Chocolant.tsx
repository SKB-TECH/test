import React from 'react'
import Image from 'next/image';
import v2 from '../public/Vectornumero2.svg'
import chocolaData from '@/public/data/dataChocola';
import Card_chocola from './s_component/Card_chocola';

export default function Chocolant() {
    return (
        <section className='min-h-[80%] lg:p-10  z-10 flex flex-col justify-center items-center bg-rose relative'>
          <div className=' bg-magic  absolute lg:top-0 -top-1'>
            <Image priority src={v2} width={3000} height={300} alt='img' />
          </div>
          <div className='flex flex-col justify-around items-center mt-14'>
            <h1 className='text-4xl text-center lg:text-justify font-bold font-sunwish '>
            Magic Mushroom Chocolate
            </h1>
            <p className='text-center p-5 font-normal font-beatrice'>
            satisfy your sweet tooth with our premium mushroom-infused chocolate bars, available in various flavors
            </p>
          </div>
          <div className='w-[100%] h-full gap-10 lg:w-[95%] lg:h-56 m-10 p-10 bg-rose flex flex-col lg:flex-row justify-around items-center'>
            {
              chocolaData.map((items,index)=>(
                <Card_chocola title={items.title} content={items.content} key={index} icons={undefined}/>
              ))
            }
          </div>
        </section>
      );
}

