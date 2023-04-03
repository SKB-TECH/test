import React from 'react'
import {HiOutlineMinusCircle} from 'react-icons/hi'
import {AiOutlinePlusCircle} from "react-icons/ai"

export default function ProduitIII() {
  return (
    <section className='bg-vert flex flex-col lg:flex-row justify-around p-5'>
        <div className="flex flex-col gap-5 lg:w-[50%]">
            <h1 className='text-footer font-sunwish font-bold lg:text-4xl text-2xl mt-5 p-5'>
                    Your questions <br></br> answered Here
            </h1>
            <button className="text-footer font-beatrice  text-sm border-2 border-l-4 border-b-4 border-footer h-8 text-center lg:w-[60%] w-[95%] lg:ml-5 lg:mb-5 uppercase">
                Learn more about purple
            </button>
        </div>
        <div className='flex flex-col gap-3 lg:w-[50%]' >
            <div className="flex flex-col gap-2  text-1xl">
                <div className='flex flex-row justify-between text-footer mr-14'>
                    <h1 className='text-footer font-beatrice font-bold text-1xl'>How many gummies should I take?</h1>
                    <HiOutlineMinusCircle size={30}/>
                </div>
                <p className="tetxt-center text-footer text-1xl font-beatrice">The recommended serving size is 1/2 a gummy. Start with one and wait at least an hour before deciding if you need more.</p>

                <div className='flex flex-row justify-between text-footer mr-14 border-b-2 border-footer'>
                    <h1 className='text-footer font-beatrice text-left font-bold text-1xl'>
                    How often should I take Purple Magic Mushroom Gummies?
                    </h1>
                    <AiOutlinePlusCircle size={30}/>
                </div>
                <div className='flex flex-row justify-between text-footer mr-14 border-b-2 border-footer'>
                    <h1 className='text-footer font-beatrice text-left font-bold text-1xl'>
                    Do you use mushroom fruiting bodies or mycelium in Purple Magic Mushroom Gummies?
                    </h1>
                    <AiOutlinePlusCircle size={30}/>
                </div>
                <div className='flex flex-row justify-between text-footer mr-14 border-b-2 border-footer'>
                    <h1 className='text-footer font-beatrice text-left font-bold text-1xl'>
                    What are functional mushrooms, nootropics, and adaptogens?
                    </h1>
                    <AiOutlinePlusCircle size={30}/>
                </div>
                <div className='flex flex-row justify-between text-footer mr-14 border-b-2 border-footer'>
                    <h1 className='text-footer text-left font-beatrice font-bold text-1xl'>
                    What can I expect to feel after taking Purple Magic Mushroom Gummies?
                    </h1>
                    <AiOutlinePlusCircle size={30}/>
                </div>
                <div className='flex flex-row justify-between text-footer mr-14 border-b-2 border-footer'>
                    <h1 className='text-footer font-beatrice text-left font-bold text-1xl'>
                    Is it safe to consume Purple Magic Mushroom Gummies during pregnancy or breastfeeding?
                    </h1>
                    <AiOutlinePlusCircle size={30}/>
                </div>
                <div className='flex flex-row justify-between text-footer mr-14 border-b-2 border-footer'>
                    <h1 className='text-footer font-beatrice text-left font-bold text-1xl'>
                    Can I modify or cancel my order?
                    </h1>
                    <AiOutlinePlusCircle size={30}/>
                </div>
            </div>
        </div>
    </section>
  )
}
