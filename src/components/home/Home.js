import React, { Component } from 'react';
import Jumbotron from './Jumbotron'
import Locations from './Locations'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { filter: "", guestsFilter: "" };
        this.updateFilter = this.updateFilter.bind(this)
        this.updateGuestsFilter = this.updateGuestsFilter.bind(this)
    }
    updateFilter(event) {
        this.setState({ filter: event.target.value });
    }
    updateGuestsFilter(event) {
        this.setState({ guestsFilter: event.target.value });
    }
    
    render() {
        return (
                <div className="home">
                    <Jumbotron updateFilter={this.updateFilter} updateGuestsFilter={this.updateGuestsFilter} />
                    <div className="container">
                        <Locations theFilter={this.state.filter} guestsFilter={this.state.guestsFilter} />
                    </div>
                </div>
        )
    }

}