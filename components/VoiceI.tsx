import React from 'react'
import Image from 'next/image';
import v4 from '../public/Vectornumero4.svg'
import VoiceData from '@/public/data/dataVoice';
import Card_voice from './s_component/Card_voice';
import Card_voiceI from './s_component/Card_voiceI';

export default function VoiceI() {
    return (
        <section className='min-h-[80%] lg:p-10  z-10 flex flex-col justify-center items-center bg-discovery relative'>
          <div className='w-[100%] h-full gap-10 lg:w-[95%] lg:h-56 m-10 p-10 bg-discovery flex flex-col lg:flex-row justify-around items-center'>
            {
              VoiceData.map((items,index)=>(
                <Card_voiceI auteur={items.auteur} resume={items.resume} key={index} />
              ))
            }
          </div>
          <div className='flex gap-3 justify-center items-center mb-5 -mt-10 lg:mt-0'>
                        <span className="w-3 h-3 rounded-full border-2 border-footer bg-footer"></span>
                        <span className="w-3 h-3  rounded-full border-2 border-footer"></span>
                        <span className="w-3 h-3  rounded-full border-2 border-footer"></span>
                    </div>
        </section>
      );
}
