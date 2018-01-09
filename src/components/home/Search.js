import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };
    }


    render() {
        return (
            <div className="searchbar">
                <div className="SubSearch">
                    <input type="search" className="searchbox"
                        placeholder="City Name" onChange={(e) => this.props.updateFilter(e)} />
                </div>
                <div className="SubSearch">
                    <input type="number" min="0" className="searchbox"
                        placeholder="Number Of Guests" onChange={(e) => this.props.updateGuestsFilter(e)} />
                </div>
            </div>
        )
    }

}