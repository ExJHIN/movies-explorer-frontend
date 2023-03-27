import './FilterCheckbox.css';

export function FilterCheckBox({
  onChange,
  checkbox,
}) {

  return (
    <div className="filtercheckbox_container">
      <label className="toggler-wrapper style-4">
        <input type="checkbox" onChange={onChange} checked={checkbox}/>
        <div className="toggler-slider">
          <div className="toggler-knob"></div>
        </div>
      </label>
      <span className="filtercheckbox_text">Короткометражки</span>
    </div>
  );
}