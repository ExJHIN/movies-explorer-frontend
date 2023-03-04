import { useEffect, useState } from "react";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import Selfie from '../../../../images/portfolio_photo.jpg';
import './AboutMe.css';

export function AboutMe() {

    return (
        <section className="aboutme_section">
            <div className="aboutme_global_container">
                <h4 className="aboutme_title">Студент</h4>
                <div className="aboutme_content_container">
                    <div className="aboutme_text_container">
                        <span className="aboutme_title_name">Павел</span>
                        <p className="aboutme_paragraph_profession">Фронтенд-разработчик, 21 год</p>
                        <p className="aboutme_paragraph_history">
                            Я родился и живу в Рязани, заканчиваю факультет вычислительной техники РГРТУ.
                            Мне нравится слушать музыку, смотреть интересные сериалы, а также изучать новые технологии.
                            Два года назад я начал кодить, спустя время меня заинтересовала Front-end разработка и я начал ее изучать.
                            После того, как прошёл курс по веб-разработке, я устроился на работу Front-end разработчиком.
                        </p>
                        <a className="aboutme_paragraph_link" href="https://github.com/ExJHIN">Github</a>
                    </div>
                    <div className="photo_container">
                        <img src={Selfie} alt="Фото разработчика" className="aboutme_paragraph_photo"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
