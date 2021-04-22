import React, { Component } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import './sliderProduct.scss';

export default class SliderProduct extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            autoplaySpeed: 4000,
            autoplay: true,
            slidesPerView: 'auto',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: false
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
        }
        return (
          <div className="slider-one__row">
            <Slider {...settings}>
                <div className="slider-one__item">
                    <img className="slider-one__img" src={this.props.info.slider_prod_image_1} alt={this.props.info.menu_item_2}/>
                    <p className="slider-one__text"><NavLink to={this.props.info.path_name_2}>{this.props.info.menu_item_2}</NavLink></p>
                </div>
                <div className="slider-one__item">
                    <img className="slider-one__img" src={this.props.info.slider_prod_image_2} alt={this.props.info.menu_item_3}/>
                    <p className="slider-one__text"><NavLink to={this.props.info.path_name_3}>{this.props.info.menu_item_3}</NavLink></p>
                </div>
                <div class="slider-one__item">
                    <img className="slider-one__img" src={this.props.info.slider_prod_image_3} alt={this.props.info.menu_item_4}/>
                    <p className="slider-one__text"><NavLink to={this.props.info.path_name_4}>{this.props.info.menu_item_4}</NavLink></p>
                </div>
                <div className="slider-one__item">
                    <img className="slider-one__img" src={this.props.info.slider_prod_image_4} alt={this.props.info.menu_item_5}/>
                    <p className="slider-one__text"><NavLink to={this.props.info.path_name_5}>{this.props.info.menu_item_5}</NavLink></p>
                </div>
            </Slider>
         </div>
        );
    }
}
