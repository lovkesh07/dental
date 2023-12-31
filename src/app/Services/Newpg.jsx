import React from "react";
import Link from "next/link";
import Image from "next/image";
import s1 from "../../../public/Images/s1.webp";
import s2 from "../../../public/Images/s2.png";
import s3 from "../../../public/Images/s3.png";
import s4 from "../../../public/Images/s4.png";
import s5 from "../../../public/Images/s5.png";
import s6 from "../../../public/Images/s6.png";

const Newpg = () => {
  const people = [
    {
      id:1,
      name: "Knowledgeable Staff",
      imageUrl: s1,
      text: "Team CDL is bestowed with international standard training programs & adequate experience to support you throughout the process.",
    },
    {
      id:2,
      name: "Reliable Service",
      imageUrl: s2,
      text: "Being in the business for almost three decades CDL understands the importance of work ethics & discipline. We never compromise with quality & service.",
    },
    {
      id:3,
      name: "Ease of Use",
      imageUrl: s3,
      text: "Your time is precious & so are our products. From placing an order to its delivery & restoration, we optimize ease of use while providing maximum functionality & reducing time barriers.",
    },
    {
      id:4,
      name: "Trusted Partnership",
      imageUrl: s4,
      text: "The CDL family is growing every day because we respect our work & partners. We understand that a trusted, viable relationship saves time and energy while providing better economic outcomes.",
    },
    {
      id:5,
      name: "Competitive Pricing",
      imageUrl: s5,
      text: "Chauhan Dental Lab not only selects the lucrative price point for our partners, but we also grant a competitive edge on the quality & work for long-term success.",
    },
    {
      id:6,
      name: "Quick Turnaround",
      imageUrl: s6,
      text: "We understand the fast pace needed for sustainability & thus, Team Illusion promises quick service & swift turnaround times.",
    },
  ];

  return (
    <>
      <div className="p-2 lg:p-16">
        <h1 className="justify-center text-center lg:text-6xl font-bold py-4 border-b-[10px] border-red-600">
          What our Lab Brings To You
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {people.map((person) => (
            <div key={person.id} class="flex-col text-center justify-center drop-shadow-lg rounded-xl p-6 bg-white">
              <Image
                src={person.imageUrl}
                className="justify-center mx-auto h-[30%] w-[30%] lg:h-[50%] lg:w-[50%]"
                alt="description of image"
              />
              <h1 className="font-bold py-4">{person.name}</h1>
              <p className="text-sm lg:text-xl">{person.text}</p>
            </div>
          ))}
        </div>
      </div>
{/* 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-6">
        <div className="text-center justify-center">1</div>

        <div className="text-center justify-center">
          <div>
            <h1>Account Benefits</h1>
            <p></p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Newpg;
