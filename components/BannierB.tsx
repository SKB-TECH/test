import React from 'react'
import Image from 'next/image';
import Sub_navbar from './s_component/Sub_navbar';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import dataProduit from '@/public/data/dataproduct';
import Sliders from './s_component/Slider';
import {BsPlus} from 'react-icons/bs'
import {CgLoadbar} from 'react-icons/cg'
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';

export default function Bannier() {
  const [incrime,setIncrime]=React.useState(1)

  function add(){
    incrime>=0 && setIncrime(incrime+1)
  }

  function minus(){
    incrime>=1 && setIncrime(incrime-1)
  }
  return (
    <section className="flex flex-col min-h-screen min-w-full bg-discovery lg:mt-10 border-b-2 border-footer">
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

            <div className="flex flex-col w-full h-full lg:ml-32  lg:w-[40%] lg:h-full lg:mt-5  m-4 p-10  ">
                <Sliders/>
            </div>
        </section>

        
        <section className='flex flex-col w-[100%] justify-center '>

        <h1 className='text-left ml-10 lg:ml-24 -mt-20 text-footer font-beatrice font-semibold w-[20%]'>
          Quantity
        </h1>
            <div  className='flex flex-row justify-center gap-2 lg:w-[10%] rounded-full p-2 m-2 lg:ml-20 border-2 border-footer text-footer'>
                
                      <CgLoadbar onClick={minus} size={20}/>
                      <span className='text-footer font-bold font-beatrice -mt-1 text-xl'>{incrime}</span>
                      <BsPlus onClick={add} size={20} className="font-bold"/>
                
              </div>  
              <div className="flex flex-row justify-between text-left lg:ml-20  text-footer font-beatrice font-semibold lg:w-[50%] p-2 m-2 rounded-lg border-2 border-footer border-l-4 border-b-4 shadow-lg">
                <button className="flex gap-2">
                   <span className="font-bold font-beatrice">$39.99</span><span className="font-normal text-[#887FC5]">$49.99</span><span className="">|</span><span className="uppercase">Add to cart</span>
                </button>
                <TrendingFlatRoundedIcon className="text-footer"/>
              </div>
              <p className='text-footer font-beatrice lg:ml-24 mb-5'>In stock. Ships by tomorrow, Mar 23 - Terms apply</p>
        </section>
      
        
    </section>
  )
}
