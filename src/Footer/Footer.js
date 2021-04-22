import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaViber } from "react-icons/fa";
import './footer.scss';


export default class Footer extends Component {
   render() {
      return (
         <footer className="footer">
            <div className="container">
               <div className="row">
                  <div className="footer__block col-xl-12">
                     <div className="footer__block__item col-3">
                        <img className="footer__logo" src={this.props.data_footer.footer_logo} alt="Логотип" />
                     </div>
                     <div className="footer__block__item col-3 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex">
                        <p className="footer__item" ><NavLink to={this.props.data_footer.path_name_1}>{this.props.data_footer.menu_item_1}</NavLink></p>
                        <p className="footer__item" ><NavLink to={this.props.data_footer.path_name_2}>{this.props.data_footer.menu_item_2}</NavLink></p>
                        <p className="footer__item" ><NavLink to={this.props.data_footer.path_name_3}>{this.props.data_footer.menu_item_3}</NavLink></p>
                        <p className="footer__item" ><NavLink to={this.props.data_footer.path_name_4}>{this.props.data_footer.menu_item_4}</NavLink></p>
                        <p className="footer__item" ><NavLink to={this.props.data_footer.path_name_5}>{this.props.data_footer.menu_item_5}</NavLink></p>
                     </div>
                     <div className="footer__block__item col-6 col-sm-5">
                        <span className="footer__contact-name">{this.props.data_footer.address}</span>
                        <p className="footer__contact-info">{this.props.data_footer.town}</p>
                        <span className="footer__contact-name">{this.props.data_footer.phone}</span>
                        <p className="footer__contact-info">{this.props.data_footer.phone_number}</p>
                        <div className="social-icons">
                           <span><a className="fab foot" href="http://facebook.com"><FaFacebook /></a></span>
                           <span><a className="fab foot" href="http://instagram.com"><FaInstagram /></a></span>
                           <span><a className="fab foot" href="http://viber.com"><FaViber /></a></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      );
   }
}