import React from "react";
import Image from "next/image";
import rd1 from "../../../../public/Images/or1.webp";
import rd2 from "../../../../public/Images/or2.webp";
import rd3 from "../../../../public/Images/or3.webp";
import rd4 from "../../../../public/Images/or4.webp";
import rd5 from "../../../../public/Images/or5.webp";
import rd6 from "../../../../public/Images/or6.webp";

const page = () => {
  return (
    <div className="pt-[140px] lg:pt-[140px]  ">
      <div className="bg-orange-500">
        <div className="p-8 lg:p-24 bg-[#053B50] border-b-[20px] border-orange-500  h-full ">
          <div className="lg:px-8">
            <h1 className="text-4xl lg:text-8xl font-bold text-white mb-12">
              Orthodontics
            </h1>
            <p className="text-white lg:w-[60%] font-semibold">
              CDL Lab is a full-service orthodontic laboratory skilled in the
              fabrication of orthodontic appliances, retainers and splints. When
              you have a complex case, our staff of experienced CDTs is
              available to assist with case consultation and custom appliance
              fabrication. Our quality craftsmanship and commitment to service
              have made CDL Lab the growing choice for orthodontists and
              dentists nationwide.
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
              Space Maintainers, Regainers & Bite Plates
              </h3>
            </blockquote>
          </figure>
          <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <Image src={rd2} />
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Arch Development
              </h3>
            </blockquote>
          </figure>
          <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <Image src={rd3} />
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Functional Appliances
              </h3>
            </blockquote>
          </figure>

          <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <Image src={rd4} />
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Molar Distalizing
              </h3>
            </blockquote>
          </figure>

          <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <Image src={rd5} />
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Retainers & Finishing
              </h3>
            </blockquote>
          </figure>

          <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <Image src={rd6} />
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Study Models
              </h3>
            </blockquote>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default page;
