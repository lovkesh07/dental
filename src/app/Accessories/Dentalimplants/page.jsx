import React from "react";
import Image from "next/image";
import rd1 from "../../../../public/Images/di1.webp";

const page = () => {
  return (
    <div className="pt-[140px] lg:pt-[140px]  ">
      <div className="bg-orange-500">
        <div className="p-8 lg:p-24 bg-[#053B50] border-b-[20px] border-orange-500  h-full ">
          <div className="lg:px-8">
            <h1 className="text-4xl lg:text-8xl font-bold text-white mb-12">
              Dental Implants
            </h1>
            <p className="text-white lg:w-[60%] font-semibold">
              At CDL Lab, we are focused on implants, hybrid solutions, and
              technologically driven aesthetic restorations. <br /> <br/>
              Regardless of case complexity, our highly skilled team of implant
              specialists and CDT’s and TE’s are versed in all implant
              platforms, components, and materials. With CDL Lab, you have
              access to the laboratory support necessary for the success of
              dental implant treatment solutions.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="p-4 lg:p-12 grid mb-8  rounded-xl shadow-sm  md:mb-12 md:grid-cols-2 gap-y-2 gap-x-2">
          <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <Image src={rd1} />
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Dental Implants
              </h3>
            </blockquote>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default page;
