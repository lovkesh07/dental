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
      desc: "We want to revoltionize the whole medical community and our service is available for both patient and doctor.",
    },
    {
      title: "Why Choose Diagnoos?      ",
      desc: "The most important question while trusting about your health, right? The only reason why you should choose our Diagnoos is we can arrange a solution to any kind of Health related problem. Need help with anything? Just drop your query online or meet us offline and we will be right back with a great solution.",
    },

    {
      title: "How Old Is Diagnoos?      ",
      desc: "Diagnoos has been in business since August 2023 we know we are new in the field but we have had 100+ satisfied clients and 300+ certified Doctors",
    },

    {
      title: "What Is The Cost Of The Services Provided By Us      ",
      desc: "The cost will depend on the kind of work you will give us. Every field of work requires a different type of way and we charge according to it.",
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
