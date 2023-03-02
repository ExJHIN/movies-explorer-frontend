import { useEffect, useState } from "react";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import logo from '../../../../images/text__COLOR_landing-logo.svg';
import './Promo.css';

export function Promo() {

    return (
        <section className="promo_section">
            <div className="promo_global_container">
                <div className="promo_text_container">
                    <h1 className="promo_text_main">Учебный проект студента факультета Веб-разработки.</h1>
                    <p className="promo_text_paragraph">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                </div>
                <div className="promo_icon_container">
                    <img src={logo} className="promo_logo" />
                </div>
            </div>
            <button className="promo_button">Узнать больше</button>
        </section>
    );
}
