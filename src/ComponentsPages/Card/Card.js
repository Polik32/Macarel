import React, { Component } from "react";
import './card.scss';


export default class Card extends Component {

    render() {

        const json_card = this.props.data_card_info[0];

        return json_card.map((item, index) => {
            return <div className="row product__block">
                <div className="product__block__img ">
                    <img src="img/Ellipse 41.png" alt="Фото" />
                    <span>{item.name}</span>
                    <img src={item.image} alt="" className="img-fluid" />
                </div>
                <div className="product__block__text col d-flex flex-column align-self-center">
                    <p>{item.info1}</p>
                    <p>{item.info2}</p>
                    <p>{item.info3}</p>
                    <p>{item.info4}</p>
                </div>
            </div>
        })

    }

}

