import React from "react";
import img2 from "../../../public/Images/img2.jpeg";
import img1 from "../../../public/Images/pp3.webp";
import img3 from "../../../public/Images/bb4.png";
import Image from "next/image";
import Abouttext from "./Abouttext";
import Whatsapp from "@/components/Whatsapp";
import EmailButton from "@/components/EmailButton";

const page = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={img3}
          className="w-full h-[20vh] mt-[18vh] bg-blend-lighten md:bg-blend-darken"
        />


        <div class="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-[20px] lg:text-[50px] font-bold text-white w-full text-center p-5">
          About Chauhan dental Laboratory
        </div>
      </div>

      {/* <div className="sticky top-0 bg-indigo-500 text-indigo-50">
      <header>
        <ul className="list-none flex justify-center gap-4">
          <li className="p-2">Home</li>
          <li className="p-2">Blog</li>
          <li className="p-2">About</li>
          <li className="p-2">Contact</li>
        </ul>
      </header>
    </div> */}


      <Abouttext/>

<Whatsapp/>

{/* <EmailButton/> */}

    </div>
  );
};

export default page;
