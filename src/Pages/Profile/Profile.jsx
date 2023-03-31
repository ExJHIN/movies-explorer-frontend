import {useState, useContext, useEffect, useRef} from 'react';
import { HeaderAuthorized } from '../../ui/HeaderAuthorized/index';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import  "./Profile.css";


export function Profile({exit, getUsetInfoProfile}) {
  const currentUser = useContext(CurrentUserContext);

  const [userName, setUserName] = useState(currentUser.name);
  const [userEmail, setUserEmail] = useState(currentUser.email);

  const [editUserName, serEditUserName] = useState(userName);
  const [editUserEmail, serEditUserEmail] = useState(userEmail);

  const [isDisableRequest, setIsDisableRequest] = useState(true);
  const [errorTextName, setErrorTextName] = useState('');
  const [errorTextEmail, setErrorTextEmail] = useState('');

  const profileName = useRef(currentUser.name);
  const profileEmail = useRef(currentUser.email);

  useEffect(() => {
    setUserName(currentUser.name);
    setUserEmail(currentUser.email);
    serEditUserName(currentUser.name);
    serEditUserEmail(currentUser.email);
  }, [currentUser]);

  useEffect(() => {
    const editNameLength = editUserName.length;
    const regExp = /^[А-ЯA-ZёәіңғүұқөһӘІҢҒҮҰҚӨҺ[\]h-]+$/umi;

    if (!editNameLength) {
      setErrorTextName('Обязательное поле для заполнения');
      setIsDisableRequest(true);
    } else if (editNameLength <= 2) {
      setErrorTextName('Должно быть минимум не менее двух символов');
      setIsDisableRequest(true);
    } else if (editNameLength > 30) {
      setErrorTextName('Должно быть не более 30 символов');
      setIsDisableRequest(true);
    } else if (!regExp.test(editUserName)) {
      setErrorTextName('Разрешено использовать только латиницу и кириллицу');
      setIsDisableRequest(true);
    } else {
      setErrorTextName('');
      setIsDisableRequest(userName === editUserName && userEmail === editUserEmail);
    }
  }, [editUserName]);

  useEffect(() => {
    const editEmailLength = editUserEmail.length;
    const regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!editEmailLength) {
      setErrorTextEmail('Обязательное поле для заполнения');
      setIsDisableRequest(true);
    } else if (editEmailLength <= 2) {
      setErrorTextEmail('E-mail должен быть минимум не менее двух символов');
      setIsDisableRequest(true);
    } else if (editEmailLength > 30) {
      setErrorTextEmail('E-mail должен быть не длиннее 30 символов');
      setIsDisableRequest(true);
    } else if (!regExp.test(editUserEmail)) {
      setErrorTextEmail('E-mail указан не корректно');
      setIsDisableRequest(true);
    } else {
      setErrorTextEmail('');
      setIsDisableRequest(userName === editUserName && userEmail === editUserEmail);
    }
  }, [editUserEmail]);

  const onChangeSetNameHandler = (e) => {
    serEditUserName(e.target.value);
  }

  const onChangeSetEmailHandler = (e) => {
    serEditUserEmail(e.target.value);
  }

  const onSubmitSetDataUserHandler = (e) => {
    e.preventDefault();

    setUserName(editUserName);
    setUserEmail(editUserEmail);
    getUsetInfoProfile(editUserName, editUserEmail);

    profileName.current = editUserName;
    profileEmail.current = editUserEmail;

    setIsDisableRequest(true);
  }
  
  return (
    <>
      <HeaderAuthorized />
      <main className="main_container">
          <section className="profile_section">
            <div className="profile_global_container">
              <h1 className="profile_title">Привет, {userName}!</h1>
              <form className="profile_form" noValidate onSubmit={onSubmitSetDataUserHandler}>
                {errorTextName && 
                  <span className="register_form_input-error">
                    {errorTextName}
                  </span>
                }
                <fieldset className="profile_form_container">
                  <label className="profile_form_label">Имя</label>
                  <input
                    className="profile_form_input"
                    type="text"
                    required
                    placeholder="Pick"
                    value={editUserName}
                    onChange={onChangeSetNameHandler}
                  />
                </fieldset>
                <fieldset className="profile_form_container">
                  <label className="profile_form_label">E-mail</label>
                  <input
                    className="profile_form_input"
                    type="text"
                    required
                    placeholder="example@example.com"
                    value={editUserEmail}
                    onChange={onChangeSetEmailHandler}
                  />
                </fieldset>
                {errorTextEmail && 
                  <span className="register_form_input-error">
                    {errorTextEmail}
                  </span>
                }
                  <button
                    className={`profile_edit ${isDisableRequest ? 'profile_edit_disble' : ''}`}
                    disabled={isDisableRequest}
                    type="submit"
                  >
                    Редактировать
                  </button>
              </form>
              <div className="profile_edit_container">
                <button className="profile_edit_button" type="button" onClick={exit}>Выйти из аккаунта</button>
              </div>
            </div>
          </section>
      </main>
    </>
  );
}