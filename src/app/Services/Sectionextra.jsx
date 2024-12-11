import React from "react";
import img6 from "../../../public/Images/pp6.jpeg";
import Image from "next/image";

const Sectionextra = () => {
  return (
    <div className="mx-auto p-8 lg:p-24 ">
      {/* <h1 className=" py-3">Why Work with Us?</h1> */}
      <h1
        className=" py-3 font-bold text-2xl md:text-4xl lg:text-6xl"
        data-aos="fade-up"
      >
        Why Choose Us ?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-6">
        <div className="justify-center lg:text-xl lg:p-4">
          <p>
            Since 1992,CDL has been one of the largest dental laboratories in
            India. We are acknowledged as one of the top pioneers and innovators
            in the dental sector. Our unwavering dedication to excellence,
            modern equipment, and cutting-edge software has always been valued.
            For over 35 years, patients across the nation have enjoyed products
            that adhere to high dental standards and that have made a mark
            Internationally.
          </p>
          <br />
          <p>
            Dental professionals also overwhelmingly choose our world-class
            solutions and services, thanks to our devoted research and
            development over many years. Traditional methods for making dental
            restorations could sometimes be inaccurate leading to poorly fitting
            crowns and bridges, wasted resources, and unhappy patients. Our
            dental laboratory creates dental restorations with a tremendous
            amount of precision, less mess and innovatively-intelligent
            techniques.
          </p>
          <p></p>
        </div>

        <div className="text-center justify-center">
          <Image src={img6} />
        </div>
      </div>

      {/* 
      <div class="grid grid-cols-1 my-5 p-5 sm:p-8 lg:p-12 gap-x-1 gap-y-1  md:grid-cols-2 lg:grid-cols-2">
        <div
          className=" p-5 sm:p-8 lg:p-12 shadow-[-10px_-10px_0px_10px_#F7FAFC]
  "
        >
          <ul className="leading-8 my-4  ">
            <li
              className=" py-4 lg:my-2 border-b-[1px] border-solid border-slate-200"
              data-aos="fade-up"
            >
              
              <p className=" text-xs sm:text-base">
              1. Time saving: we
              believe in appointment based dentistry. As you are aware, the
              treatment is scheduled to minimize the wastage of time.
              </p>
            </li>
            <li
              className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200"
              data-aos="fade-up"
            >
              
              <p className=" text-xs sm:text-base">
              2. Convenient Location:
              Situated in the heart of East Delhi, walking distance from CWG
              Village & Akshardham temple. The clinic is readily connected to
              South and Central Delhi and Noida and Ghaziabad region.
              </p>
            </li>
            <li
                className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200"
                data-aos="fade-up"
              >
                
                <p className=" text-xs sm:text-base">
                3. Emphasis on early
              detection of dental problem, which in certain cases can prevent
              surgery and extensive treatment procedures.
                </p>
              </li>

              <li
                className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200"
                data-aos="fade-up"
              >
                
                <p className=" text-xs sm:text-base">
                4. Counseling and
              guidance rather than merely providing treatment.
                </p>
              </li>
          </ul>
        </div>

        <div
          className=" p-5 sm:p-8 lg:p-12 lg:px-16 shadow-[10px_10px_0px_10px]
 "
        >
          <div className=" ">
            <ul className="leading-8 my-4  ">
              <li
                className=" py-4 lg:my-2 border-b-[1px] border-solid border-slate-200"
                data-aos="fade-up"
              >
                
                <p className=" text-xs sm:text-base">
                5. Warm, courteous and
              helpful staff trained to provide better service.
                </p>
              </li>


              <li
                className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200"
                data-aos="fade-up"
              >
                
                <p className=" text-xs sm:text-base">
                6. Highest standards
              in dentistry are maintained including international standards of
              hygiene to provide excellent patient care as quality is the prime
              priority.
                </p>
              </li>

              <li
                className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200"
                data-aos="fade-up"
              >
                
                <p className=" text-xs sm:text-base">
                7. Personalized
              reminders prior to appointment either by telephone or e-mail.
                </p>
              </li>

              <li
                className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200"
                data-aos="fade-up"
              >
                
                <p className=" text-xs sm:text-base">
                8. A private lounge
              ,neat and tidy atmosphere with elegant furnishings.
                </p>
              </li>


            </ul>
          </div>
        </div>
      </div>

      <div className=" w-[100%]  my-5 py-5 flex flex-col sm:flex-row gap-3 rounded-md ">
      <p className="pt-4 pb-8 pl-2 text-sm lg:text-2xl font-semibold">
          We provide facilities for different specialties of dentistry like
          orthodontics, periodontics, endodontics, prosthodontics, pedodontics,
          oral and maxillofacial surgery, implantology, cosmetic dentistry and
          restorative dentistry – all under one roof, so that patient does not
          have to run around to different clinics.
        </p>
      </div> */}
    </div>
  );
};

export default Sectionextra;
