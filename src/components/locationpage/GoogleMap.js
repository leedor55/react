import React, { Component } from 'react';

export default class GoogleMap extends Component {
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(){
        return false;
    }
    componentWillReceiveProps(nextProps){        
        this.map.setCenter({lat:nextProps.lat,lng:nextProps.lng})
    }
    componentDidMount(){
        let {lng, lat} =this.props;
        this.map=new google.maps.Map(this.refs.map,{
            center:{lat,lng},
            zoom:8
        })
    }   

    render() {
        const mapStyle = {
            width: 500,
            height: 300,
            border: '1px solid black'
        };
        return (
            <div id="Location" className="LocationMap">
                <h2>Location</h2>
                <div ref="map" className="GoogleMap" style={mapStyle}>I am a map</div>
            </div>
        )
    }

}

GoogleMap.defaultProps = {
    lat: 0,
    lng: 0
}