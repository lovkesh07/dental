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
      title: "What services does Chauhan Dental Lab Offer?",
      desc: "Chauhan Dental Lab is a full service digital dental laboratory. We can produce crowns and bridges, removables like partial, full or flexi dentures, e.Max®, Zirconia, Full Contour Zirconia, Multi Layered Zirconia, Custom Implants and gladly except over-denture and full-mouth reconstruction cases. We are also introducing aligners and value added services.",
    },
    {
      title: "What is the best way to send you photos?",
      desc: "We prefer you send us digital photos to ensure a consistent quality. We have dedicated email addresses for all areas of our business. For your patient photos please use support@chauhandentallaboratory.com",
    },
    {
      title: "Can you accept Digital Impression Files?",
      desc: "Absolutely! We are a digital lab and we accept files from all intra-oral scanner brands.You can upload the .stl files on our easy to use customer portal or e-mail them to us at support@chauhandentallaboratory.com We certainly recommend sending digital files for faster,easier case processing and greater precision in the restorations.",
    },
    {
      title: "Do you offer a RUSH service for special cases and is there a fee?",
      desc: "Oh yes, we do! We do charge a nominal rush fee for these cases and request that they are called in and pre-scheduled before sending them to the lab so that we can plan and process the case optimally.",
    },
    {
      title: "Do you use materials that meet the regulatory standards?",
      desc: "For sure! Chauhan Dental Lab prides itself on using premium-quality materials. We only work with high-grade materials from the outset, whether through partnerships with globally recognized material suppliers or by using materials that comply with international standards. We make sure to audit our process end to end.",
    },
    {
      title: "Can Chauhan Dental Lab assist with case planning?",
      desc: "Our experienced technicians are happy to work directly with you to develop a detailed treatment plan for your case if required. Our team of experts will continue to support you throughout the entire process to ensure that the final restoration exceeds your expectations.",
    },
    {
      title: "Where can I get the price list?",
      desc: "Please feel free to call us on 011-171571195 or email us at support@hauhandentallaboratory.com and our customer care team member will be happy to help you with the price list and a starter kit.",
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
