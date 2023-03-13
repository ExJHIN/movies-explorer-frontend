import { Link } from "react-router-dom";
import  "./Register.css";

export function Register() {
  return (
    <main className="main_container">
        <section className="register_section">
            <div className="register_global_container">
                <div className="header_link-logo register_logo">
                    <Link to="/">
                        <div className="header_logo"></div>
                    </Link>
                </div>
                <h1 className="register_title">Добро пожаловать!</h1>
                <form className="register_form" noValidate>
                        <label className="register_form_label">Имя</label>
                        <input className="register_form_input" required type="text" id="name" name="name" placeholder="Имя" defaultValue="Павел" maxLength="12" minLength="3"/>
                        <label className="register_form_label">E-mail</label>
                        <input className="register_form_input" required type="email" id="email" name="email" placeholder="E-mail" defaultValue="pochta@yandex.ru"/>
                        <label className="register_form_label">Пароль</label>
                        <input className="register_form_input password_color" required type="password" id="password" name="password" placeholder="password" defaultValue="••••••••••••••"/>
                        <span className="register_form_input-error">Что-то пошло не так...</span>
                        <button className="register_form_button">Зарегистрироваться</button>
                        <p className="register_form_paragraph">
                            Уже зарегистрированы?<a className="register_form_link" href="/signin">Войти</a>
                        </p>
                </form>
            </div>
        </section>
    </main>
  );
}

