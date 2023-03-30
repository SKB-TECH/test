import React from "react";
import v1 from "../public/Vectornumero1.svg";
import Image from "next/image";

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
        <p className='text-center p-5 font-normal'>
          satisfy your sweet tooth with our premium mushroom-infused chocolate
          bars, available in various flavors
        </p>
      </div>
      <div className='w-[100%] lg:w-[95%] h-56 lg:h-56 m-10 p-10 bg-discovery_boite'></div>

      <div className='w-80 h-10 p-2 m-5 border-2  border-l-4 border-b-4 border-footer text-xl'>
        <button className='shadow-xl'>SHOP ALL PRODUCTS</button>
      </div>
    </section>
  );
};

export default Magic;
