import React, { Component } from "react";
import SizeSlider from '../../ComponentsSlider/SizeSlider/SizeSlider';
import MacaronSlider from '../../ComponentsSlider/MacaronSlider/MacaronSlider';
import './macaron.scss'

export default class Macarons extends Component {
    render() {
        return (
            <div className="body-page">
                <div className="header-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 slider">
                                <h1 className="header__title">{this.props.data_macaron.menu_item_3}</h1>
                                <div className="header__title__paragraph">
                                    <p>Макаронс - це легке печиво-безе з м’якою начинкою та хрусткою скоринкою</p>
                                    <p>Розрахувати необхідну вам вагу торта на захід дуже просто - в середньому 150 гр на одну людину. Ми
                                   пропонуємо 3 розміри тортів:</p>
                                </div>
                                <SizeSlider slider_sponge_info={this.props.data_slider} />
                            </div>
                        </div>
                        <div className="row mac-clider-row">
                            <div className="col-xl-12 macaron-slider">
                                <h2 className="header__title">{this.props.data_macaron.menu_item_3}</h2>
                                <MacaronSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}