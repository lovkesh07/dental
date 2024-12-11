import React from 'react'
import Image from "next/image";
import img3 from "../../../public/Images/bb4.png";
import Sectionextra from './Sectionextra';
import Newpg from './Newpg';
import Whatsapp from '@/components/Whatsapp';

const page = () => {
  return (
    <div>
      <div className="relative">
      <img
          src="https://t4.ftcdn.net/jpg/08/56/20/45/360_F_856204581_zCZ7dpK8zSZ9bIa41pid2dJrM8pzvq0r.jpg"
          className="w-full h-[20vh] mt-[18vh] bg-blend-lighten md:bg-blend-darken"
        />


        <div class="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-[30px] lg:text-[50px] font-bold text-white w-full text-center p-5">
          Our Services
        </div>
      </div>

      {/* <Servicestext/> */}

      <Sectionextra/>
      <Newpg/>
      <Whatsapp/>



    </div>
  )
}

export default page
