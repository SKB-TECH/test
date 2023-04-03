import React, { Component } from "react";
import Slider from "react-slick";

export default class Prod_slider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
        
      };
      return (
          <Slider {...settings}>
            <div className="flex flex-row ">
                <div className="flex flex-row h-60 w-15 mr-5 bg-fblanc border-2 border-footer">
                loremlroeoeorprkjnjchbvjhbvuiBRUBDUHDHKDGDH
                </div>
                <div className="flex flex-row h-60 w-15 mr-5 bg-fblanc border-2 border-footer">
                loremlroeoeorprkjnjchbvjhbvuiBRUBDUHDHKDGDH
                </div>
                <div className="flex flex-row h-60 w-15 mr-5 bg-fblanc border-2 border-footer">
                loremlroeoeorprkjnjchbvjhbvuiBRUBDUHDHKDGDH
                </div>
            </div>
          </Slider>
      );
    }
  }