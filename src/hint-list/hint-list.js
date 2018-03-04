import React from "react";
import './hint-list.css';
import HintListItem from "../hint-list-item/hint-list-item";

const HintList = (props) => {

    const hints = props.hints.map((hint, index) =>  {
        return (
            <HintListItem 
                key = {index}
                name = {hint.name}
                hex = {hint.hex}
                onColorChange = {props.onColorChange}
                onColorSelect = {props.onColorSelect}
            />
        );
    });

    return(
        <div className="hint-list">
            <ul>
                {hints}
            </ul>
        </div>
    );
};

export default HintList;
