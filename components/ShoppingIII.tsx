
import React from 'react'
import Card_shoppingII from './s_component/Card_shoppingII'
import shoppingDataII from '@/public/data/dataShoppingII'
import Card_shoppingIII from './s_component/Card_shoppingIII'
export default function ShoppingIII() {
  return (
    <section className='flex flex-col bg-rose min-h-fit min-w-full'>
            <div className='flex flex-col lg:justify-around items-center lg:flex-row h-fit min-w-full mt-5 lg:border-b-2 border-gray-400'>
                <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>Premium quality cocoa</span>
                <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>natural ingredients</span>
                <span className='text-footer lg:text-lg  text-2xl font-beatrice'>Focus-enhancing treat</span>
                <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>Premium quality cocoa</span>
                <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>natural ingredients</span>
                <span className='text-footer lg:text-lg  text-2xl font-beatrice mb-2'>Focus-enhancing treat</span>
            
            </div>
            {/* <hr  className='h-1 text-gray-400'></hr> */}
            <div className='flex flex-col justify-around lg:flex-row min-w-full h-42 border-b-2 border-gray-400 p-5'>
                <h1 className='font-sunwish text-2xl lg:text-3xl lg:text-left text-center text-footer'>
                Magic Amanita <br></br> Mushroom Gummy
                </h1>
                <p className="text-footer text-1xl lg:text-2xl font-beatrice font-normal">
                Elevate your well-being with our psilocybin-free, <br></br> vegan, and gluten-free mushroom <br></br>gummies is perfect for busy lifestyles
                </p>
            </div>
            <div className='flex flex-col lg:flex-row justify-between min-h-full min-w-full lg:border-b-2 border-gray-400 p-5 lg:p-0'>
                {
                  shoppingDataII.map((items,index)=>(
                    <Card_shoppingIII  title={items.title} image={items.picture} key={index}/>
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
