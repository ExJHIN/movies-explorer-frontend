import './MoviesStillButton.css';

export function MoviesStillButton({
  setStateStepForViewCardAction,
}) {

  function onChangeShowMoreHandler() {
    setStateStepForViewCardAction((prev) => prev + 1);
  }

  return (
    <button className="moviescardlist_button_add" type="button" onClick={onChangeShowMoreHandler}>Ещё</button>
  );
}
