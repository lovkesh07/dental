import React from 'react'
import Image from "next/image";
import rd1 from "../../../../public/Images/cb1.webp";
import rd2 from "../../../../public/Images/cb2.webp";
import rd3 from "../../../../public/Images/cb3.webp";

const page = () => {
  return (
    <div className="pt-[140px] lg:pt-[140px]  ">
      <div className="bg-orange-500">
      <div className="p-8 lg:p-24 bg-[#053B50] border-b-[20px] border-orange-500  h-full ">
        <div className="lg:px-8">
        <h1 className="text-4xl lg:text-8xl font-bold text-white mb-12">Crown & Bridge</h1>
        <p className="text-white lg:w-[60%] font-semibold">
        Our crowns and bridge restorations are made with the finest materials available today from internationally-known manufacturers. Our metal substructures are made with accredited alloys and each case includes an Identalloy certificate for the patient record.
        </p>
        </div>
      </div>
      </div>
      <div>
        
<div class="p-4 lg:p-12 grid mb-8  rounded-xl shadow-sm  md:mb-12 md:grid-cols-2 gap-y-2 gap-x-2">
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <Image src={rd1} />
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">All Ceramics</h3>
            
        </blockquote>
          
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <Image src={rd2} />
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">PFM</h3>
           
        </blockquote>
          
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <Image src={rd3} />
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Full Cast</h3>
            
        </blockquote>
           
    </figure>
    
</div>

      </div>
    </div>
  )
}

export default page