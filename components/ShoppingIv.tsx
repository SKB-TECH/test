import React from 'react'
import Card_shopping from './s_component/Card_shopping'
import shoppingDataII from '@/public/data/dataShoppingII'
import shoppingDataV from '../public/data/dataShoppingIv';

export default function ShoppingIv() {
  return (
    <section className='flex flex-col bg-d_jaune min-h-fit min-w-full'>
    <div className='flex flex-col lg:justify-around items-center lg:flex-row h-fit min-w-full mt-5 border-b-2 border-gray-400'>
        <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>Convenient</span>
        <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>enhances focus</span>
        <span className='text-footer lg:text-lg  text-2xl font-beatrice'>creativity</span>
        <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>Convenient</span>
        <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>enhances focus</span>
        <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>creativity</span>
        <span className='text-footer lg:text-lg  text-2xl font-beatrice'>Convenient</span>
        <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>enhances focus</span>
        
    </div>
    {/* <hr  className='h-1 text-gray-400'></hr> */}
    <div className='flex flex-col justify-around lg:flex-row min-w-full h-42 border-b-2 border-gray-400 p-5'>
        <h1 className='font-sunwish text-2xl lg:text-3xl lg:text-left text-center text-footer'>
        Purple Shroom Cone
        </h1>
        <p className="text-footer text-1xl lg:text-2xl font-beatrice font-normal">
        Simply light up, take a few puffs,<br></br> and let the stress melt away
        </p>
    </div>
    <div className='flex flex-col lg:flex-row justify-between min-h-full min-w-full lg:border-b-2 border-gray-400 p-5 lg:p-0'>
        {
          shoppingDataV.map((items,index)=>(
            <Card_shopping  title={items.title} image={items.picture} key={index}/>
          ))
        }
    </div>

                <div className="w-full  flex flex-row justify-center items-center mt-5 border-b-2 border-gray-400 h-14 ">
                    <button className="h-10 w-[95%] lg:w-[15%] text-sm font-semibold text-footer font-beatrice uppercase ml-2  border-2 border-l-4 border-b-4 border-footer shadow-xl mb-5 rounded-md">
                    SHOW MORE Flavors
                    </button>
                </div>
</section>
  )
}
