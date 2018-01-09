import React, { Component } from 'react';
import Rating from '../shared/Rating';

export default class PageHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var rating = 0;
        for (let i of this.props.locationObj.reviews) {
            rating += i.rating;
        }
        rating = rating / this.props.locationObj.reviews.length;

        return (
            <div className="PageHeader">
                <h1 className="LocationPageName">{this.props.locationObj.name}</h1>
                <a className="headerLink" href="#Location">
                    {this.props.locationObj.city.name + "," + this.props.locationObj.country.name + "   "}
                </a>
                <a className="headerLink" href="#Reviews"><Rating rating={rating} />
                    {this.props.locationObj.reviews.length + " reviews"}
                </a>
            </div>
        )
    }

}