import React, { Component } from 'react';

export default class LocationNav extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="LocationNav">
                <ul className="LocationNavUl">
                    <li><a href="#Overview">Overview</a></li>
                    <li><a href="#Location">Location</a></li>
                    <li><a href="#Reviews">Reviews</a></li>
                </ul>
            </div>
        )
    }

}