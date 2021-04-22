import React, { Component } from "react";
import Slider from 'react-slick';
import './candySlider.scss';


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false
            }
        }
    ]
    };
    return (
      <div className="container headerSlider">
        <Slider {...settings}>
              <img src="/img/candy-bar.png" alt="img" />
              <img src="/img/candy-bar.png" alt="img" />
              <img src="/img/candy-bar.png" alt="img" />
        </Slider>
      </div>
    );
  }
}