import React, { Component } from 'react';
import Rating from '../shared/Rating';

export default class Review extends Component {
    constructor(props) {
        super(props)
    }
    authorPic() {
        let { authorpic, author } = this.props;
        return authorpic ? <img src={this.props.authorpic} className="AuthorPic" /> : author[0];
    }
    render() {

        return (
            <div className="Review">
                {
                    <div className="AuthorPic"> {this.authorPic()} </div>
                }
                <div className="Author">
                    <h3 className="ReviewAuthor">{this.props.author}</h3><br />
                    <Rating rating={this.props.rating} /><br />
                </div>
                <div className="reviewCaption">{this.props.caption}</div>
                <div className="reviewDescription">{this.props.description}</div>
            </div>
        )
    }

}

Review.defaultProps = {
    author: "",
    caption: ""
}