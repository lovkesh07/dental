"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
import Image from "next/image";

import img1 from "../../public/Images/moon.jpg";
import img2 from "../../public/Images/img2.jpeg";
import img3 from "../../public/Images/img3.webp";
import img4 from "../../public/Images/img1.webp";

const Hm = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    
  };

  const Wrap = styled.div`
    cursor: pointer;
    img {
      width: 98%;
      border-radius: 10px;
      object-fit: cover;
      transition-duration: 300ms;
      &:hover {
        border: 4px solid rgba (249, 249, 249, 0.8);
      }
    }
  `;

  const Carousel = styled(Slider)`
    margin: 20px;
    .slick-list {
      overflow: visible;
    }
    ul li button {
      &:before {
        font-size: 10px;
        color: ${(props) => props.theme.white};
      }
    }
    li.slick-active button:before {
      color: ${(props) => props.theme.white};
    }
    button {
      z-index: 1;
    }
    .slick-dots {
      bottom: 25px;

      padding-right: 20px;
    }
    .slick-dots li button:before {
      font-size: 20px;
      color: white;
    }
    .slick-next:before {
    }
    .slick-prev:before {
    }
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        background:rgba(0,0,0,0.64);
    }
  `;
  return (
    <>
      <div className="mt-[34vh] lg:mt-[21vh]">
        <Carousel {...settings}>
          <Wrap >
            <Image src={img1} alt="badag" className="h-[50vh] lg:h-[70vh]" />
           
          </Wrap>
          <Wrap >
            <Image src={img2} alt="avengers" className="h-[50vh] lg:h-[70vh]" />
           
          </Wrap>
          <Wrap >
            <Image src={img3} alt="badging" className="h-[50vh] lg:h-[70vh]" />
            
          </Wrap>
          <Wrap >
            <Image src={img4} alt="badging" className="h-[50vh] lg:h-[70vh]" />
            
          </Wrap>
        </Carousel>
      </div>
    </>
  );
};

export default Hm;
