import React from 'react'

const page = () => {

    const people = [
        {
          name: "REMOVABLES",
          role: "Dentures, Partials, Nightguards, and Sleep Apnea Devices",
          imageUrl:"https://s3-eu-west-1.amazonaws.com/dts-website/images/product_previews/DTS_dental_laboratory_glasgow_scotland_uk_denture_prosthetics_partial_tryin_chrome_orthodontics_dentures.png" ,
          link:"/"
        },

          {
            name: "ORTHODONTICS",
            role: "Arch Development, Space Maintainers and more",
            imageUrl:"https://s3-eu-west-1.amazonaws.com/dts-website/images/product_previews/DTS_dental_laboratory_glasgow_scotland_uk_denture_prosthetics_partial_tryin_chrome_orthodontics_ortho.png" ,
            link:"/"
          },
          {
            name: "DENTAL IMPLANTS",
            role: "Dental implants and surgical guides",
            imageUrl:"https://s3-eu-west-1.amazonaws.com/dts-website/images/product_previews/DTS_dental_laboratory_glasgow_scotland_uk_crowns_bridge_inlay_onlay_implant_restoration_metal.png" ,
            link:"/"
          },
          
          
          {
            name: "CROWN & BRIDGE",
            role: "All Ceramics, PFM, and Full Cast ",
            imageUrl:"https://s3-eu-west-1.amazonaws.com/dts-website/images/product_previews/DTS_dental_laboratory_glasgow_scotland_uk_crowns_bridge_inlay_onlay_implant_restoration_crowns.png" ,
            link:"/"
          },
          
          

        // More people...
      ];

  return (
    <div>
        <div className='text-center justify-center'>
            <h1 className='text-6xl  mt-24 pt-24 font-bold pb-6 border-b-2 border-slate-500'>Product</h1>

            <div className=' p-4 lg:p-24 mx-auto grid   grid-cols-1 gap-x-16 gap-y-5 sm:grid-cols-2 lg:max-w-[70%] lg:grid-cols-2 xl:grid-cols-2'>
            {people.map((person) => (
              <li className="rounded-2xl list-none  shadow-xl hover:shadow-gray-500" key={person.name} data-aos="fade-up">
                <img
                  className="aspect-[14/13] w-full rounded-t-2xl object-cover"
                  src={person.imageUrl}
                  alt=""
                  // data-aos="fade-up" data-aos-duration="1500"
                />
                <div className="px-6 py-2">
                <h3 className=" mt-2  sm:text-md font-semibold leading-8 tracking-tight text-black">
                  {person.name}
                </h3>
                <p className=" text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                </div>
                <div className='p-8'>

                <button className='p-4 border-2 border-blue-700' key={person.link}>VIEW PRODUCT</button>
                </div>
                
              </li>
            ))}
            </div>

        </div>
    </div>
  )
}

export default page