import { HeaderAuthorized } from '../../ui/HeaderAuthorized/index';
import  "./Profile.css";


export function Profile() {

  return (
    <>
      <HeaderAuthorized />
      <main className="main_container">
          <section className="profile_section">
            <div className="profile_global_container">
              <h1 className="profile_title">Привет, Павел!</h1>
              <form className="profile_form" noValidate>
                <fieldset className="profile_form_container">
                  <label className="profile_form_label" for="name">Имя</label>
                  <input className="profile_form_input" required type="text" id="name" name="name" placeholder="Имя" defaultValue="Павел" maxLength="12" minLength="3"/>
                </fieldset>
                <fieldset className="profile_form_container">
                  <label className="profile_form_label" for="email">E-mail</label>
                  <input className="profile_form_input" required type="email" id="email" name="email" placeholder="E-mail" defaultValue="pochta@yandex.ru"/>
                </fieldset>
                <button className="profile_edit" type="submit">Редактировать</button>
              </form>
              <div className="profile_edit_container">
                <button className="profile_edit_button" type="button">Выйти из аккаунта</button>
              </div>
            </div>
          </section>
      </main>
    </>
  );
}

