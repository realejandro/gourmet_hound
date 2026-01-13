"use client";
import Image from 'next/image';
import React from 'react'

const Carousel = () => {


  return (
    <div className="carousel w-full h-[70vh]">
        <div id="slide1" className="carousel-item relative w-full">
            <Image
                src="/assets/images/carousel/gourmet_hound.jpg"
                alt="carousel one"
                fill
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="text-white">❮</a>
            <a href="#slide2" className="text-white">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <Image
                src="/assets/images/carousel/gourmet_hound_2.jpg"
                alt="carousel two"
                fill 
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="text-white">❮</a>
                <a href="#slide1" className="text-white">❯</a>
            </div>
        </div>
    </div>
  )
}

export default Carousel