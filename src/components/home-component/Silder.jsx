import React from 'react'
import data from "./data/data-slider.json"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


import "./home.scss"
const Silder = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        scrollBar: true,
        autoplay: true,
        swipeToSlide: true,
        centerPadding: 30,
        pauseOnFocus: true,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
        <div className='slider'>
            <div className="custom-container">

            <Slider {...settings}>

              {
                data.slides.map((item) => (
                    <Link className='slide' key={item.id} to="/">
                        <img src={item.image} alt="" />
                    </Link>
                ))
                
              }




            </Slider>
            </div>
        </div>
    )
}

export default Silder