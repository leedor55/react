import React, { Component } from 'react';

export default class Rating extends Component {

    render() {
        var rating = this.props.rating;
        return (
            <div className="Rating">
                {
                    new Array(5).fill("").map(function (item, i) {
                        if (i + 1 <= rating)
                            return <i className="fa fa-star" aria-hidden="true"></i>
                        else if (rating - i >= 0.5) {
                            return <i className="fa fa-star-half-o" aria-hidden="true"></i>
                        }
                        else
                            return <i className="fa fa-star-o" aria-hidden="true"></i>
                    })
                }
            </div>
        )
    }

}