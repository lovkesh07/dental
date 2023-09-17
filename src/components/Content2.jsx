import React from 'react'
import Link from "next/link";

const Content2 = () => {

    const people = [
        {
          name: "REMOVABLES",
          // role: "connect within 60 secs",
          imageUrl:"https://www.ddslab.com/wp-content/uploads/2022/05/0934-0020_web.jpg.webp" ,
          link:"/Accessories/Removables",
        },
          {
            name: "ORTHODONTICS",
            // role: "Stay informed with the latest medical updates ",
            imageUrl:"https://www.ddslab.com/wp-content/uploads/2022/05/0924-0063_web.jpg.webp" ,
            link:"/Accessories/Orthodontics",
          },
          {
            name: "DENTAL IMPLANTS",
            // role: "Stay informed with the latest medical updates ",
            imageUrl:"https://www.ddslab.com/wp-content/uploads/2022/04/Cementable-Custom-Titanium-Abutments18.png.webp" ,
            link:"/Accessories/Dentalimplants",
          },
          {
            name: "CROWN & BRIDGE",
            // role: "Stay informed with the latest medical updates ",
            imageUrl:"https://www.ddslab.com/wp-content/uploads/2022/05/0934-0090_web.jpg.webp" ,
            link:"/Accessories/Crownbridge",
          },

      ];

      
  return (
    <>
    <div id="team">
      {/* Team section */}
      {/* bg-[url('https://dentistwhittierca.com/wp-content/uploads/2023/05/Dentist.jpg')]   backdrop-brightness-50*/}

      <div className=" py-8 pt-16 lg:pt-1 bg-cover bg-orange-200 bg-fixed bg-top bg-no-repeat">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto  max-w-2xl  text-center">
            <h2
              className="text-4xl border-b-[10px] border-red-600 text-center tracking-tight pt-6 pb-2 text-black sm:text-4xl lg:text-6xl font-extrabold"
              data-aos="fade-up"
            >
              Accessories
            </h2>
            <p
              className="mt-6 text-lg leading-8 text-gray-600"
              data-aos="fade-up"
            >
              We&apos;re a group of individuals who are passionate about
              what we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>

          <ul className="p-2 mx-auto mt-16 grid max-w-2xl  grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
            {people.map((person) => (
              <li className="rounded-2xl bg-white shadow-xl hover:shadow-gray-800" key={person.name} data-aos="fade-up">
                <img
                  className="aspect-[14/13] w-full rounded-t-2xl object-cover"
                  src={person.imageUrl}
                  alt=""
                  // data-aos="fade-up" data-aos-duration="1500"
                />
                <div  className="px-6 py-2 bg-orange-500 rounded-2xl cursor-pointer">
                  <Link href={person.link}>
                  <h3 className=" mt-2  sm:text-md font-semibold leading-8  tracking-tight text-black">
                  {person.name}
                </h3>
                  </Link>
               
                
                </div>
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Content2