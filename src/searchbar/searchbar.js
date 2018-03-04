import React, { Component } from "react";
import './searchbar.css';
import HintList from "../hint-list/hint-list";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            colorList: []
        };
    }
    render() {
        const colorSelect = (colorString) => { return this.onColorSelect(colorString) }
        return(
            <div className="searchbar-container">
                <input type="text"
                 name="searchbar"
                 className="searchbar-input"
                 value={ this.state.term }
                 onChange= {(event) => this.onInputChange(event.target.value)}
                 placeholder="Type color name or hex"
                 />
                <HintList 
                hints = {this.state.colorList}
                onColorChange = {this.props.onColorChange} 
                onColorSelect = {colorSelect}/>
            </div>
        );
    }

    onInputChange(term) {
        const colorList = this.props.onColorSearch(term);
        if (term.length >= 2) {
            this.setState({
                term: term,
                colorList: colorList
            });
        } else {
            this.setState({
                term: term,
                colorList: [] 
            })
        }
    };

    onColorSelect(colorString) {
        this.setState({
            term: colorString
        });
    };
};

export default SearchBar;