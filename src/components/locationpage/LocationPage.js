import React, { Component } from 'react';
import ImageJumbotron from './ImageJumbotron';
import LocationNav from './LocationNav';
import LocationFeatures from './LocationFeatures';
import Booking from './Booking';
import Reviews from './Reviews';
import PageHeader from './PageHeader';
import GoogleMap from './GoogleMap';

export default class Location extends Component {
    constructor(props) {
        super(props)
        this.state = { locationObj: { city: {},country:{} ,reviews:[{}]} }
    }
    componentWillMount() {
        fetch('/static/data/LocationData.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                var obj;
                obj = data.filter((item) => {
                    return item.id == this.props.match.params.id;
                })
                this.setState({ locationObj: obj[0] });
            })
    }

    render() {
        let {lng, lat} =this.state.locationObj.city
        return (

            <div className="LocationPage">
               <ImageJumbotron ImageUrl={this.state.locationObj.imageUrl}/>
                <div className="PageContainer">
                    <div className="Details" id="Overview">
                        <LocationNav/>
                        <PageHeader locationObj={this.state.locationObj}/>
                        <LocationFeatures bedrooms={this.state.locationObj.bedrooms} beds={this.state.locationObj.beds} guests={this.state.locationObj.maxGuests}/>
                        <div className="AboutLocation">
                            <h3>About this listing</h3>
                            {this.state.locationObj.description}
                        </div>
                        <GoogleMap lat={lat} lng={lng}/>
                        <Reviews reviews={this.state.locationObj.reviews}/>
                    </div>
                    <Booking price={this.state.locationObj.price} maxGuests={this.state.locationObj.maxGuests}/>
                </div>
                

            </div>
        )
    }
}

