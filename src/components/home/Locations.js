import React, { Component } from 'react';
import Location from './Location'
import json from '../../static/data/LocationData.json'

export default class Locations extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        var list= json.filter((item) => {
                        if (this.props.theFilter) {
                            if (this.props.guestsFilter) {
                                return (item.city.name.toLowerCase().indexOf(this.props.theFilter.toLowerCase())>-1&&item.maxGuests >= this.props.guestsFilter)
                            }
                            else return (item.city.name.toLowerCase().indexOf(this.props.theFilter.toLowerCase())>-1)
                        }
                        else if (this.props.guestsFilter)
                            return item.maxGuests >= this.props.guestsFilter;
                        else return item;
                    })
        return (
            <div className="gallery">
                <h1>Homes Experiences</h1>

                {
                    list.map((item, i) =>                        
                        <Location key={i}
                        id={item.id}
                        imageUrl={item.imageUrl}
                        name={item.name}
                        reviews={item.reviews}
                        city={item.city.name}
                        price={item.price}
                        />)
                }
            </div>
        )
    }

}