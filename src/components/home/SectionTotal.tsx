'use client'
import Image from 'next/image'
import React from 'react'

export const SectionTotal = () => {
  return (
    <div className="grid w-[100%] flex-column grid-cols-1 
        lg:grid-cols-[70%_30%] lg:flex-row justify-center self-center m-auto mt-10">
        <div className="flex w-full">
            <div className="relative w-[100%] h-[75vh]">
                <Image
                    src="/assets/images/total/senction_total.jpeg"
                    alt="info"
                    fill
                />
            </div> 
        </div>
        
        <div className="flex w-full">
            <div className="flex flex-col w-full justify-center bg-zinc-100 p-10">
                <h2 className="text-3xl">Food and Drink</h2>
                <div className="divider w-[5.25%]"/>
                <p> Our collection of fine food and drink celebrates quality ingredients and locally sourced produce.</p>
                <div className='flex mt-10'>
                    <button className="btn btn-wide bg-[#91A488] w-50 text-white hover:bg-[#ffffff] hover:text-[#91A488]" >
                        VIEW COLLECTION
                    </button>
                </div>                
            </div>
        </div>
    </div>
  )
}

