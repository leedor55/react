import React, { Component } from 'react';

export default class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = { theLocation: {} };
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
                    return item.id == this.props.LocationId;
                })
                this.setState({ theLocation: obj[0] })
            })
    }

    render() {
        var locationObj = this.state.theLocation;
        return (
            <div className="Reservation">
                <img className="reservationImg" src={locationObj.imageUrl} />
                <div className="reservationDetails">
                    <div className="reservationLocation reservationDetail">{locationObj.name} </div>
                    <div className="reservationStart reservationDetail">Check In: {this.props.startDate}</div>
                    <div className="reservationEnd reservationDetail">Check Out: {this.props.endDate} </div>
                    <div className="reservationGuests reservationDetail">{this.props.guests} Guests </div>
                    <div className="reservationPerNight reservationDetail">Price per night: ${this.props.price} </div>
                    <div className="reservationTotal reservationDetail">Total: ${this.props.total} </div>
                </div>
            </div>
        )
    }

}

Reservation.defaultProps = {
    id: "",
    LocationId: "",
    StartDate: "",
    endDate: "",
    guests: "",
    price: "",
    total: ""
}