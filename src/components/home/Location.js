import React, { Component } from 'react';
import Rating from '../shared/Rating'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class Location extends Component {


    render() {
        var rating = 0;
        for (let i of this.props.reviews) {
            rating += i.rating;
        }
        rating = rating / this.props.reviews.length;
        return (
            <div className="imghold overflows">
                <Link to={"/Location/" + this.props.id}>
                    <img src={this.props.imageUrl} alt="" className="listimage " />
                </Link>
                <div className="picdescription">
                    <div className="locationName"> ${this.props.price}  {this.props.name}
                    </div>
                    {this.props.city}
                    <Rating rating={rating} />{" " + this.props.reviews.length + " Reviews"}
                </div>
            </div>
        )
    }

}