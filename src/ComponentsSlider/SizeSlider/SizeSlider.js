import React, { Component } from "react";
import Slider from 'react-slick';
import './sizeSlider.scss'


export default class SizeSlider extends Component {
	render() {
		const settings = {
         infinite: true,
         lazyLoad: 'ondemand',
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: true,
         dots: true,
         slidesPerView: 'auto',responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            }
        ]
		};
		return (
			<div className="container headerSlider">
               <Slider {...settings}>
                  <div className="pie-size d-inline-flex">
                     <span className="pie-size__span">{this.props.slider_sponge_info.symbol_small}</span>
                     <p className="pie-sixe__paragraph">{this.props.slider_sponge_info.name_small}</p>
                     <p className="pie-sixe__paragraph">{this.props.slider_sponge_info.size_small}</p>
                     <p className="pie-sixe__paragraph">{this.props.slider_sponge_info.cost_small}</p>
                  </div>
                  <div className="pie-size d-inline-flex">
                     <span className="pie-size__span">{this.props.slider_sponge_info.symbol_medium}</span>
                     <p className="pie-sixe__paragraph">{this.props.slider_sponge_info.name_medium}</p>
                     <p className="pie-sixe__paragraph">{this.props.slider_sponge_info.size_medium}</p>
                     <p className="pie-sixe__paragraph">{this.props.slider_sponge_info.cost_medium}</p>
                  </div>
                  <div className="pie-size d-inline-flex">
                     <span className="pie-size__span">{this.props.slider_sponge_info.symbol_large}</span>
                     <p className="pie-sixe__paragraph">{this.props.slider_sponge_info.name_large}</p>
                     <p className="pie-sixe__paragraph">{this.props.slider_sponge_info.size_large}</p>
                     <p className="pie-sixe__paragraph">{this.props.slider_sponge_info.cost_large}</p>
                  </div>
                  <div className="pie-size d-inline-flex">
                     <span className="pie-size__span">{this.props.slider_sponge_info.symbol_extraLarge}</span>
                     <p className="pie-sixe__paragraph">{this.props.slider_sponge_info.name_extraLarge}</p>
                     <p className="pie-sixe__paragraph">{this.props.slider_sponge_info.size_extraLarge}</p>
                     <p className="pie-sixe__paragraph">{this.props.slider_sponge_info.cost_extraLarge}</p>
                  </div>
				</Slider>
			</div>
		);
	}
}