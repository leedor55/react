import React, { Component } from 'react';
import Reservation from './Reservation'


export default class Locations extends Component {
    constructor(props) {
        super(props)
        this.state = {list:[]};
    }

    componentWillMount() {
        fetch('/static/data/ReservationsData.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                this.setState({list:data});
            })
    }

    render() {

        return (
            <div className="Reservations">
                <h1>Reservations</h1>
                {
                    this.state.list.map((item, i) =>                        
                        <Reservation key={i}
                        id={item.id}
                        LocationId={item.LocationId}
                        startDate={item.StartDate}
                        endDate={item.endDate}
                        guests={item.guests}
                        price={item.price}
                        total={item.total}
                        />)
                }

            </div>
        )
    }

}