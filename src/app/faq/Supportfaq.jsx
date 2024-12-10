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
    <div className="pt-16 pb-24 p:16 px-8 lg:p-24 ">
      <h2
        className="text-3xl mb-8 lg:mb-16 border-b-[10px] box-border mx-auto lg:w-[60%] border-red-600 text-center tracking-tight pt-12 pb-2 text-black sm:text-4xl lg:text-6xl font-extrabold"
        data-aos="fade-up"
      >
        Frequently Asked Questions
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
