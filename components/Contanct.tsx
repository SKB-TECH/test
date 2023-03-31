import React from 'react'
import {IoCallOutline} from 'react-icons/io5'
import {BiMessageDots} from 'react-icons/bi'
import {AiOutlineQuestionCircle} from 'react-icons/ai'


export default function Contanct() {
  return (
    <section className='min-w-full min-h-full bg-discovery flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:p-5 p-3'>
        <div>
            <h4 className='text-discovery_boite font-beatrice font-bold text-center text-2xl flex'
            >
              <AiOutlineQuestionCircle className='mr-2 mt-2' />
              support center
              </h4>
            <span className='text-discovery_boite font-beatrice text-xl' >find answers online anytime</span>
        </div>
        <div>
        <h4 className='text-discovery_boite font-beatrice font-bold text-center text-2xl flex'>
          <BiMessageDots className='mr-2 mt-2'/> live chat</h4>
            <span className='text-discovery_boite font-beatrice text-xl' >
            mon-fri, 10am-6pm
            </span>
        </div>
        <div>
        <h4 className='text-discovery_boite font-beatrice font-bold text-center text-2xl flex'>
        <IoCallOutline  className="mt-1 mr-1"/> 800-555-5555
          </h4>
            <span className='text-discovery_boite font-beatrice text-xl ' >
               mon-fri, 10am-6pm</span>
        </div>
    </section>
  )
}
