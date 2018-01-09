import React, { Component } from 'react';
import Search from './Search'
export default class Jumbotron extends Component {
    
    render() {
        return (
            <div className="jumbotron">
                <div className="welcome">
                    <h1>Bamba,</h1><br/>Book unique homes and experience a city like a local
                </div>      
                <Search updateFilter={this.props.updateFilter} updateGuestsFilter={this.props.updateGuestsFilter}/>
            </div>
        )
    }
    
}