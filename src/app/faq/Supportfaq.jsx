"use client"
import React, { useState } from "react";
import Newfaq from "./Faq";

const Supportfaq = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  const accordionData = [
    {
      title: "Is this website for patient or doctor or both?",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugiat dolore ex repellat temporibus saepe?",
    },
    {
      title: "Why Choose Us?      ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugiat dolore ex repellat temporibus saepe?",
    },

    {
      title: "How Old We are?      ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugiat dolore ex repellat temporibus saepe?",
    },

    {
      title: "What Is The Cost Of The Services Provided By Us      ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugiat dolore ex repellat temporibus saepe?",
    },
  ];
  return (
    <div className="pt-16 pb-24 p:16 px-8 lg:p-24 bg-gradient-to-b from-white from-10% via-white via-10% to-[#64CCC5] to-90%">
      <h2
        className="text-4xl lg:pb-16 py-6 tracking-tight text-black sm:text-4xl lg:text-6xl font-bold"
        data-aos="fade-up"
      >
        Frequently asked questions...
      </h2>
      {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugiat
      dolore ex repellat temporibus saepe? */}

      {accordionData.map((data, index) => {
        return (
          <Newfaq
            key={index}
            open={index === open}
            title={data.title}
            desc={data.desc}
            toggle={() => toggle(index)}
          />
        );
      })}
    </div>
  );
};

export default Supportfaq;
