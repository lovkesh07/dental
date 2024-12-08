import React from 'react'
// import img2 from "../../../public/Images/img2.jpeg";
import img3 from "../../../public/Images/bb4.png";

import Image from "next/image";
import Contacttext from './Contacttext';
import Whatsapp from '@/components/Whatsapp';

const page = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={img3}
          className="w-full h-[20vh] mt-[18vh] bg-blend-lighten md:bg-blend-darken"
        />


        <div class="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-[30px] lg:text-[50px] font-bold text-white w-full text-center p-5">
          Contact-Us
        </div>
      </div>
      <Contacttext/>
      <Whatsapp/>
    </div>
  )
}

export default page
