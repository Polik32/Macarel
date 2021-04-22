import React, { Component } from "react";
import SizeSlider from '../../ComponentsSlider/SizeSlider/SizeSlider';
import Card from '../Card/Card';
import './sponge.scss';


export default class SpongeCakes extends Component {
    render() {
        return (
            <div className="body-page" >
                <div className="header-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 slider">
                                <h1 className="header__title">{this.props.data_spong.menu_item_2}</h1>
                                <div className="header__title__paragraph">
                                    <p>Макаронс - це легке печиво-безе з м’якою начинкою та хрусткою скоринкою</p>
                                    <p>Розрахувати необхідну вам вагу торта на захід дуже просто - в середньому 150 гр на одну людину. Ми
                                    пропонуємо 3 розміри тортів:</p>
                                </div>
                                <SizeSlider slider_sponge_info={this.props.data_slider} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <h2 className="product__title">{this.props.data_spong.menu_item_2}</h2>
                            </div>
                        </div>
                        <Card data_card_info={this.props.data_card}/>
                    </div>
                </div>
            </div>
        )
    }

}