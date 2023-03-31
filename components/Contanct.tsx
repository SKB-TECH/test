import React from 'react'


export default function Contanct() {
  return (
    <section className='min-w-full min-h-full bg-discovery flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:p-5 p-3'>
        <div>
            <h4 className='text-discovery_boite font-beatrice font-bold text-center text-2xl'>support center</h4>
            <span className='text-discovery_boite font-beatrice text-xl' >find answers online anytime</span>
        </div>
        <div>
        <h4 className='text-discovery_boite font-beatrice font-bold text-center text-2xl'>live chat</h4>
            <span className='text-discovery_boite font-beatrice text-xl' >
            mon-fri, 10am-6pm
            </span>
        </div>
        <div>
        <h4 className='text-discovery_boite font-beatrice font-bold text-center text-2xl'>800-555-5555</h4>
            <span className='text-discovery_boite font-beatrice text-xl' >mon-fri, 10am-6pm</span>
        </div>
    </section>
  )
}
