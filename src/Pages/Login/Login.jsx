import  "./Login.css";

export function Login() {
  return (
    <main className="main_container">
        <section className="register_section">
            <div className="register_global_container">
                <div className="header_link-logo register_logo">
                    <a href="/">
                        <div className="header_logo"></div>
                    </a>
                </div>
                <h1 className="register_title">Рады видеть!</h1>
                <form className="register_form" noValidate>
                        <label className="register_form_label" for="email">E-mail</label>
                        <input className="register_form_input" required type="email" id="email" name="email" placeholder="E-mail" defaultValue="pochta@yandex.ru"/>
                        <label className="register_form_label" for="password">Пароль</label>
                        <input className="register_form_input password_color" required type="password" id="password" name="password" placeholder="password" defaultValue="••••••••••••••"/>
                        <span className="register_form_input-error"></span>
                        <button className="register_form_button login_button">Войти</button>
                        <p className="register_form_paragraph login_paragraph" >
                            Ещё не зарегистрированы?<a className="register_form_link" href="/signup">Регистрация</a>
                        </p>
                </form>
            </div>
        </section>
    </main>
  );
}

