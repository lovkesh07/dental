import React from "react";
import Link from "next/link";
import Whatsapp from "@/components/Whatsapp";
import Image from "next/image";
import img3 from "../../../public/Images/bb4.png";

const page = () => {
  const people = [
    {
      name: "REMOVABLES",
      role: "Dentures, Partials, Nightguards, and Sleep Apnea Devices",
      imageUrl:
        "https://s3-eu-west-1.amazonaws.com/dts-website/images/product_previews/DTS_dental_laboratory_glasgow_scotland_uk_denture_prosthetics_partial_tryin_chrome_orthodontics_dentures.png",
      link: "/Accessories/Removables",
    },

    {
      name: "ORTHODONTICS",
      role: "Arch Development, Space Maintainers and more",
      imageUrl:
        "https://s3-eu-west-1.amazonaws.com/dts-website/images/product_previews/DTS_dental_laboratory_glasgow_scotland_uk_denture_prosthetics_partial_tryin_chrome_orthodontics_ortho.png",
      link: "/Accessories/Orthodontics",
    },
    {
      name: "DENTAL IMPLANTS",
      role: "Dental implants and surgical guides",
      imageUrl:
        "https://s3-eu-west-1.amazonaws.com/dts-website/images/product_previews/DTS_dental_laboratory_glasgow_scotland_uk_crowns_bridge_inlay_onlay_implant_restoration_metal.png",
      link: "/Accessories/Dentalimplants",
    },

    {
      name: "CROWN & BRIDGE",
      role: "All Ceramics, PFM, and Full Cast ",
      imageUrl:
        "https://s3-eu-west-1.amazonaws.com/dts-website/images/product_previews/DTS_dental_laboratory_glasgow_scotland_uk_crowns_bridge_inlay_onlay_implant_restoration_crowns.png",
      link: "/Accessories/Crownbridge",
    },

    // More people...
  ];

  return (
    <div>
      <div className="text-center justify-center">
        {/* <h1 className="text-6xl  mt-24 pt-24 font-bold pb-6 border-b-[20px] border-orange-500">
          Product
        </h1> */}

<div className="relative">
        <img
          src="https://t4.ftcdn.net/jpg/08/56/20/45/360_F_856204581_zCZ7dpK8zSZ9bIa41pid2dJrM8pzvq0r.jpg"
          className="w-full h-[20vh] mt-[18vh] bg-blend-lighten md:bg-blend-darken"
        />


        <div class="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-[30px] lg:text-[50px] font-bold text-white w-full text-center p-5">
        Product
        </div>
      </div>

        <div className=" p-4 lg:p-24 mx-auto grid   grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:max-w-[90%] lg:grid-cols-4 ">
          {people.map((person) => (
            <li
              className="rounded-2xl list-none  shadow-xl hover:shadow-gray-500"
              key={person.name}
              data-aos="fade-up"
            >
              <img
                className="aspect-[14/13] w-full rounded-t-2xl object-cover"
                src={person.imageUrl}
                alt=""
                // data-aos="fade-up" data-aos-duration="1500"
              />
              <div className="px-6 py-2 h-[110px] bg-orange-500">
                <h3 className=" mt-2  sm:text-md font-semibold leading-8 tracking-tight text-black">
                  {person.name}
                </h3>
                <p className=" text-base leading-7 text-gray-100">
                  {person.role}
                </p>
              </div>
              <div className="p-8">
                <Link
                  href={person.link}
                  className="p-4 border-2  border-red-700 hover:bg-orange-500 font-bold hover:text-white"
                >
                  VIEW PRODUCT
                </Link>
              </div>
            </li>
          ))}
        </div>
      </div>
      <Whatsapp />
    </div>
  );
};

export default page;
