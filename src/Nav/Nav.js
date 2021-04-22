import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './nav.scss';


export default class Nav extends Component {
    render() {
        return (
            <nav className="menu-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <img className="navBar-logo" src={this.props.data_nav.nav_logo} alt="Логотип" />
                        </div>
                        <div className="menu col-8 ml-auto align-self-center">
                            <ul className="menu d-flex justify-content-end">
                                <li className="menu__item"><NavLink to={this.props.data_nav.path_name_1}>{this.props.data_nav.menu_item_1}</NavLink></li>
                                <li className="menu__item"><NavLink to={this.props.data_nav.path_name_2}>{this.props.data_nav.menu_item_2}</NavLink></li>
                                <li className="menu__item"><NavLink to={this.props.data_nav.path_name_3}>{this.props.data_nav.menu_item_3}</NavLink></li>
                                <li className="menu__item"><NavLink to={this.props.data_nav.path_name_4}>{this.props.data_nav.menu_item_4}</NavLink></li>
                                <li className="menu__item"><NavLink to={this.props.data_nav.path_name_5}>{this.props.data_nav.menu_item_5}</NavLink></li>
                            </ul>
                        </div>
                        <div class="hamburger-menu col-2 ml-auto mt-auto mb-auto align-self-end">
                            <input id="menu__toggle" type="checkbox" />
                            <label class="menu__btn" for="menu__toggle">
                                <span></span>
                            </label>
                            <ul class="menu__box">
                                <li className="hamburger-menu__item"><NavLink to={this.props.data_nav.path_name_1}>{this.props.data_nav.menu_item_1}</NavLink></li>
                                <li className="hamburger-menu__item"><NavLink to={this.props.data_nav.path_name_2}>{this.props.data_nav.menu_item_2}</NavLink></li>
                                <li className="hamburger-menu__item"><NavLink to={this.props.data_nav.path_name_3}>{this.props.data_nav.menu_item_3}</NavLink></li>
                                <li className="hamburger-menu__item"><NavLink to={this.props.data_nav.path_name_4}>{this.props.data_nav.menu_item_4}</NavLink></li>
                                <li className="hamburger-menu__item"><NavLink to={this.props.data_nav.path_name_5}>{this.props.data_nav.menu_item_5}</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
