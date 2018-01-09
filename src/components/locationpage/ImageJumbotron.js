import React, { Component } from 'react';
export default class ImageJumbotron extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="ImageJumbotron">
                <img src={this.props.ImageUrl} alt="" className="PageImage" />
                </div>
        )
    }

}