"use client"
import { Collapse } from "react-collapse";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Faq = ({ open, toggle, title, desc }) => {
  return (
    <div className="pt-[5px]   lg:p-[24] border-b-[1px] border-solid">
      <div
        className=" py-[10px] lg:px-[50px] flex justify-between items-center cursor-pointer "
        onClick={toggle}
      >
        <p className="lg:text-[32px] font-semibold" data-aos="fade-up">{title}</p>
        <div>{open ? <AiOutlineMinus className="lg:h-[40px] lg:w-[40px] font-bold" /> : <AiOutlinePlus className="lg:h-[40px] lg:w-[40px] font-bold" />}</div>
      </div>
      <Collapse isOpened={open}>
        <div className=" lg:px-[50px] pb-[20px]" data-aos="fade-up">{desc}</div>
      </Collapse>
    </div>
  );
};

export default Faq;
