import React from 'react'
import Image from 'next/image';
import v3 from '../public/Vectornumero3.svg'
import Card_shoroom from './s_component/Card_shoroom';
import dataShoroom from '@/public/data/dataShoroom';
export default function Shroom() {
    return (
        <section className='min-h-[80%] lg:p-10  z-10 flex flex-col justify-center items-center bg-d_jaune relative'>
          <div className=' bg-rose  absolute lg:top-0 -top-1'>
            <Image priority src={v3} width={3000} height={300} alt='img' />
          </div>
          <div className='flex flex-col justify-around items-center mt-14'>
            <h1 className='text-4xl text-center lg:text-justify font-bold font-sunwish '>
            Purple Shroom Cone
            </h1>
            <p className='text-center p-5 font-normal font-beatrice'>
            satisfy your sweet tooth with our premium mushroom-infused chocolate bars, available in various flavors
            </p>
          </div>
          <div className='w-[100%] h-full gap-10 lg:w-[95%] lg:h-56 m-10 p-10 bg-d_jaune flex flex-col lg:flex-row justify-around items-center'>
            {
              dataShoroom.map((items,index)=>(
                <Card_shoroom title={items.title} content={items.content} key={index} icons={undefined}/>
              ))
            }
          </div>
        </section>
      );
}
