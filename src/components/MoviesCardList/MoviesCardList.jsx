import { useEffect, useState } from "react";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import './MoviesCardList.css';

export function MoviesCardList() {

    return (
        <section className="moviescardlist_section">
            <div className="moviescardlist_gloval_container">
                <button className="moviescardlist_button_add">Ещё</button>
            </div>
        </section>
    );
}
