import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import dataProduit from "@/public/data/dataproduct";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <Slider {...settings} >
         {
            dataProduit ?.map((items,index)=>(
                <div key={index} className="ml-50">
                    <Image 
                    src={items.picture}
                    width={200}
                    height={200}
                    alt="logo"
                    key={index}
                />
                </div>
            ))
          }
        </Slider>
    );
  }
}