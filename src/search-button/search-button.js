import React from "react";
import './search-button.css';

const SearchButton = (props) => {

    const clickHandler = () => {
        const colorString = `${props.colorName}  #${props.colorHex}`;
        props.onColorChange(props.colorHex);
        props.onColorSelect(colorString);
    }

    return (
        <button className="apply-color__btn"  onClick={clickHandler}>
            Apply Color
        </button>
    );
};

export default SearchButton;
