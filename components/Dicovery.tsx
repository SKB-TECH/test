import React from "react";
import Image from "next/image";
import v1 from "../public/Vectornumero1.svg";

function Discovery() {
  return (
    <section className='h-screen  z-0 flex flex-col justify-center items-center bg-discovery'>
      <div className='flex flex-col justify-center items-center mt-14'>
        <h1 className='text-4xl text-center lg:text-justify font-bold font-sunwish'>
          Discover the Magic of Mushrooms
        </h1>
        <p className='text-center p-5 font-normal font-beatrice'>
          Discover the Power of Mushrooms. Boost your routine with our
          collection of trendy mushroom products - gummies, cones, disposables,
          and chocolate bars
        </p>
      </div>
      <div className='w-[100%] lg:w-[95%] h-56 lg:h-56 m-10 p-10 bg-discovery_boite'></div>

      <div className='w-80 h-10 p-2 mx-2 border-2  border-l-4 border-b-4 border-footer text-xl'>
        <button className='shadow-xl'>SHOP ALL PRODUCTS</button>
      </div>
    </section>
  );
}

export default Discovery;
