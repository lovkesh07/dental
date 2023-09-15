import React from 'react'
import img2 from "../../../public/Images/img2.jpeg";
import Image from "next/image";
import Servicestext from './Servicestext';
import img3 from "../../../public/Images/bb4.png";
import Sectionextra from './Sectionextra';

const page = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={img3}
          className="w-full h-[20vh] mt-[18vh] bg-blend-lighten md:bg-blend-darken"
        />


        <div class="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-[30px] lg:text-[50px] font-bold text-white w-full text-center p-5">
          Our Services
        </div>
      </div>

      {/* <Servicestext/> */}

      <Sectionextra/>



    </div>
  )
}

export default page
