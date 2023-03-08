import './FilterCheckbox.css';

export function FilterCheckBox() {

    return (
        <label className="filtercheckbox_container">
            <input type="checkbox" hidden></input>
            <span></span>
        </label>
    );
}
