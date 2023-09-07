import React from "react";

const Servicestext = () => {
  return (
    <div>
      <div className=" lg:p-24">
        <h1 className="pt-4 pl-2 text-2xl lg:text-5xl font-bold">
          Benefits to you for undergoing dental treatment at our clinic:
        </h1>
        <ul className="px-6 lg:px-16 py-8  space-y-1 list-disc list-inside ">
          <li className="flex items-center space-x-1 ">
          <span>
            <span className="font-semibold px-4">1.</span> Time saving: we
            believe in appointment based dentistry. As you are aware, the
            treatment is scheduled to minimize the wastage of time.
            </span>
          </li>

          <li className=" flex items-center space-x-1">
            <span>
              <span className="font-semibold px-4">2.</span>Convenient Location:
              Situated in the heart of East Delhi, walking distance from CWG
              Village & Akshardham temple. The clinic is readily connected to
              South and Central Delhi and Noida and Ghaziabad region.
            </span>
          </li>
          <li className="flex items-center space-x-1">
          <span>
            <span className="font-semibold px-4">3.</span> Emphasis on early
            detection of dental problem, which in certain cases can prevent
            surgery and extensive treatment procedures.
            </span>
          </li>
          <li className="flex items-center space-x-1">
          <span>
            <span className="font-semibold px-4">4.</span> Counseling and
            guidance rather than merely providing treatment.
            </span>
          </li>
          <li className="flex items-center space-x-1">
          <span>
            <span className="font-semibold px-4">5.</span> Warm, courteous and
            helpful staff trained to provide better service.
            </span>
          </li>
          <li className="flex items-center space-x-1">
          <span>
            <span className="font-semibold px-4">6.</span> Highest standards in
            dentistry are maintained including international standards of
            hygiene to provide excellent patient care as quality is the prime
            priority.
            </span>
          </li>
          <li className="flex items-center space-x-1">
          <span>
            <span className="font-semibold px-4">7.</span> Personalized
            reminders prior to appointment either by telephone or e-mail.
            </span>
          </li>
          
          <li className="flex items-center space-x-1">
          <span>
            <span className="font-semibold px-4">8.</span> A private lounge
            ,neat and tidy atmosphere with elegant furnishings.
            </span>
          </li>
        </ul>

        <p className="pt-4 pb-8 pl-2 text-sm lg:text-xl font-semibold">
          We provide facilities for different specialties of dentistry like
          orthodontics, periodontics, endodontics, prosthodontics, pedodontics,
          oral and maxillofacial surgery, implantology, cosmetic dentistry and
          restorative dentistry – all under one roof, so that patient does not
          have to run around to different clinics.
        </p>
      </div>
    </div>
  );
};

export default Servicestext;
