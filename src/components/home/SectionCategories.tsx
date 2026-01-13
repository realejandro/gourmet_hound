'use client';
import React from 'react'
import ProductCard from '../ProductCard'
import categories from "./../../data/categories/categories.json";

interface Category {
    title:string,
    url:string,
    description:string
}

export const SectionCategories = () => {

  return (
    <div>
        <div className="grid mt-20">
            <div className="flex flex-col text-center">  
                <div className="divider w-[90%] m-auto mb-10"> 
                    <h2 className="text-2xl">Our Categories</h2> 
                </div>
            </div>
            <div className="grid mx-auto grid-cols-1 gap-10 mt-5 
                md:grid-cols-1 md:w-[100%]
                lg:grid-cols-4 lg:w-[90%]
                "
            >
            { 
                categories.map((category: Category)  => (
                <ProductCard
                    key={category.title}
                    title={category.title}
                    urlImg={category.url}
                    description={category.description}
                />
                )) 
            }
            </div>
        </div>

        <div className="grid justify-center mt-10 mb-2">
            <button className="btn btn-wide bg-[#91A488] w-50 text-white hover:bg-[#ffffff] hover:text-[#91A488]">
            VIEW ALL
            </button>
        </div>
    </div>
  )
}
