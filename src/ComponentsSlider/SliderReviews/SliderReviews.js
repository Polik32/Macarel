import React, { Component } from "react";
import SliderReviews from "react-slick";
import './sliderReviews.scss';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            autoplaySpeed: 4000,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        infinite: true,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        infinite: true,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        infinite: true,
                        dots: true,
                        arrows: false
                    }
                }
            ]
        };
        return (
            <div className="slider-two__row">
                <SliderReviews {...settings}>
                    <div className="slider-two__item col-12">
                        <div className="row">
                            <img className="slider-two__item-img col-xl-4 col-lg-4 col-sm-5 col-9" src={this.props.review.slider_review_avatar} alt={this.props.review.slider_review_alt}/>
                            <div className="slider-two__text col-xl-8 col-sm-7">
                                <p className="slider-two__item-name">{this.props.review.slider_review_name}</p>
                                <p className="slider-two__item-text">{this.props.review.slider_review_info}</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider-two__item col-12">
                        <div className="row">
                            <img className="slider-two__item-img col-xl-4 col-lg-4 col-sm-5 col-9" src={this.props.review.slider_review_avatar} alt={this.props.review.slider_review_alt}/>
                            <div className="slider-two__text col-xl-8 col-sm-7">
                                <p className="slider-two__item-name">{this.props.review.slider_review_name}</p>
                                <p className="slider-two__item-text">{this.props.review.slider_review_info}</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider-two__item col-12">
                        <div className="row">
                            <img className="slider-two__item-img col-xl-4 col-lg-4 col-sm-5 col-9" src={this.props.review.slider_review_avatar} alt={this.props.review.slider_review_alt}/>
                            <div className=" slider-two__text col-xl-8 col-sm-7">
                                <p className="slider-two__item-name">{this.props.review.slider_review_name}</p>
                                <p className="slider-two__item-text">{this.props.review.slider_review_info}</p>
                            </div>
                        </div>
                    </div>
                </SliderReviews>
            </div>
        );
    }
}