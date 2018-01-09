import React, { Component } from 'react';

export default class LocationFeatures extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="LocationFeatures">
                <div className="LocationFeature"><i className="icon icon-group icon-size" aria-hidden="true" data-reactid="268"></i><br/>{"  "+this.props.guests +" Guests"}</div>
                <div className="LocationFeature"><i className="icon icon-rooms icon-size" aria-hidden="true" data-reactid="272"></i><br/>{"  "+this.props.bedrooms +" Bedrooms"}</div>
                <div className="LocationFeature"><i className="icon icon-double-bed icon-size" aria-hidden="true" data-reactid="276"></i><br/>{"  "+this.props.beds+" Beds"}</div>
            </div>
        )
    }

}