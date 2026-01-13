'use client';
import Image from 'next/image';
import React from 'react';


export const SectionInfo = () => {
  
  return (

    <div className="flex flex-col mt-10">
      <div className="flex flex-col text-center">  
          <div className="divider w-[80vw] m-auto mb-5"> 
              <h2 className="text-2xl font-serif">Good Selection for any ocassion</h2> 
          </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
          <div className="grid flex-column justify-center">
            <div className="relative w-[90vw] h-[80vw] lg:w-[600px] lg:h-[450px]">
              <Image
                src="/assets/images/info/info.jpg"
                alt="corridors"
                fill
                style={{objectFit:"cover"}}
              />
            </div>
            <div className="flex flex-col text-center mt-5">
              <h2 className="font-serif">Created by us</h2>
              <p className="font-serif">SHOP HAMPERS</p>
            </div> 
          </div>
          
          <div className="grid flex-column justify-center mt-10 lg:mt-0">
            <div className="relative w-[90vw] h-[80vw] lg:w-[600px] lg:h-[450px]">
              <Image
                src="/assets/images/info/info_2.jpg"
                alt="corridors"
                fill
                style={{objectFit:"cover"}}
              />
            </div>
            <div className="flex flex-col text-center mt-5">
              <h2>Chosen by you</h2>
              <p>BUILD YOUR OWN HAMPER</p>
            </div> 
          </div>
      </div>
    </div>
  )
}
