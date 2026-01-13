"use client";
import Image from 'next/image';
import React from 'react';

const ProductCard = ( { title, urlImg, description  } : { title: string, urlImg: string, description:string } ) => {

  return (
    <div className='card rounded-none'>
      <figure  className="relative w-full h-96">
        <Image
          src = { urlImg }
          alt= "products"
          fill
          style={{ objectFit: "cover"}}
          unoptimized={true}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{ title.toUpperCase() }</h2>
        <p>{ description }</p>
        <div className="card-actions mt-5">
          <button className="btn btn-wide bg-[#91A488] w-50 text-white hover:bg-[#ffffff] hover:text-[#91A488]">
            MORE INFO
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard