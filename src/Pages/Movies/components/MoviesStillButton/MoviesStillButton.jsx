import './MoviesStillButton.css';

export function MoviesStillButton({
  setStateAction,
}) {

  function onChangeShowMoreHandler() {
    setStateAction((prev) => prev + 1);
  }

  return (
    <button className="moviescardlist_button_add" type="button" onClick={onChangeShowMoreHandler}>Ещё</button>
  );
}
