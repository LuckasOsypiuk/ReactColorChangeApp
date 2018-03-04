import React from "react";
import './hint-list-item.css';
import SearchButton from '../search-button/search-button';

const HintListItem = (props) => {
    return (
        <li className="hint-list__item">
            <span>{props.name}</span>
            <span>#{props.hex}</span>
            <span className="color-rectangle" style={{"background": "#"+ props.hex}}></span>
            <SearchButton 
            colorName={props.name}
            colorHex={props.hex} 
            onColorChange = {props.onColorChange}
            onColorSelect = {props.onColorSelect}
            />
        </li>
    );
};

export default HintListItem;