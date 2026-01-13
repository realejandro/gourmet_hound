import React from 'react';
import Image from 'next/image';
import BasicLayout from '@/layouts/basic/BasicLayout';

const About = () => {
  
  return (
    <BasicLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
          <div className="grid h-[50vh] w-[100%] 
            lg:w-[100%] m-auto relative
            lg:h-[80vh]
          ">
              <Image
                src="/assets/images/about/about.jpg"
                alt="creating img"
                fill
                style={{objectFit:"cover"}}
              /> 
          </div>

          <div className="grid mt-10 content-center font-serif lg:mt-0">
            <div className="grid w-[80%] content-center m-auto lg:w-[60%]">
              <div className="flex flex-col gap-4 m-auto">
                <h2 className="text-2xl lg:text-3xl">
                  Gourmet Hound brings modern British deli culture to 
                  Fulham, with a passion for quality, sustainability, and the best of European flavour.
                </h2>
                <p>
                  Gourmet Hound is a modern British deli, cellar, and speciality grocer based in Fulham, London.
                  Family-owned and run by SW6 locals, we believe in the power of local — working closely with independent UK producers to bring you the very best in seasonal, sustainable, and artisan food.
                </p>
                <p>
                  From freshly baked sourdough and heritage meats to British farmhouse cheeses, everything we stock is thoughtfully sourced with quality and care. We proudly complement our local range with curated imports from Europe, 
                  including Spanish jamón ibérico, Italian prosciutto, Manchego, truffled pecorino, and more.
                </p>
                <p>
                  In our cellar, you’ll find handpicked wines and craft spirits from small producers 
                  — with a focus on Italy and France, plus discoveries from around the world. Whether you’re picking up a daily essential or building the perfect cheeseboard, 
                  Gourmet Hound is your neighbourhood destination for exceptional flavour and honest ingredients.
                </p>
              </div>
            </div>
          </div>
      </div>
    </BasicLayout>
  )
}

export default About;