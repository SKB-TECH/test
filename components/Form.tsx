import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
export default function Form() {
  return (
    <section className=" bg-[url('../public/contact.svg')] bg-no-repeat bg-cover min-w-full min-h-full flex flex-col">
        
        <div className='flex flex-col lg:p-40'>
        <h1 className='text-blanc_principal font-sunwish text-4xl text-center mt-10 lg:text-left w-full lg:ml-5'>Join the tribe</h1>
            <div className='flex flex-col lg:flex-row w-full mt-3 justify-center items-center gap-10 p-5'>
                <div className='flex flex-row bg-inherit  border-b-2 border-gray-400 lg:[] w-[85%] gap-3'>
                    <input type="text" placeholder='email' className='bg-inherit outline-none text-2xl font-beatrice w-[95%]'/>
                    <span className=''>
                        < MailOutlineIcon  className='mt-2 text-gray-400'/>
                    </span>
                </div>
                <div className="border-2 p-1 font-beatrice border-footer border-l-4 border-b-4 mr-10 rounded-lg bg-blanc_principal lg:w-[20%] w-[90%] flex justify-center">
                    <button className='w-[90%] lg:w-[100%]'>
                        SIGN ME UP
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}
