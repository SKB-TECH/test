import React from "react";
import v1 from "../public/Vectornumero1.svg";
import Image from "next/image";
import Card_magic from "./s_component/Card_magic";
import fileData from "@/public/data/dataMagic";
const Magic = () => {
  return (
    <section className='min-h-[80%] lg:p-10  z-10 flex flex-col justify-center items-center bg-magic relative'>
      <div className=' bg-discovery  absolute lg:top-0 -top-1'>
        <Image priority src={v1} width={3000} height={300} alt='img' />
      </div>
      <div className='flex flex-col justify-around items-center mt-14'>
        <h1 className='text-4xl text-center lg:text-justify font-bold font-sunwish '>
          Magic Amanita Mushroom Gummy
        </h1>
        <p className='text-center p-5 font-normal font-beatrice'>
          satisfy your sweet tooth with our premium mushroom-infused chocolate
          bars, available in various flavors
        </p>
      </div>
      <div className='w-[100%] h-full gap-10 lg:w-[95%] lg:h-56 m-10 p-10 bg-magic flex flex-col lg:flex-row justify-around items-center'>
        {
          fileData.map((items,index)=>(
            <Card_magic title={items.title} content={items.content} key={index} icons={items.picture}/>
          ))
        }
      </div>
    </section>
  );
};

export default Magic;
