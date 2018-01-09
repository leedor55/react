import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class Booking extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment(),
            endDate: moment()
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }
    handleChangeStart(date) {
        this.setState({
            startDate: date
        });
    }
    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });
    }

    render() {
        return (
            <div className="Booking">
                <div className="BookHead"><span className="theprice">{"$" + this.props.price}</span> per night </div>
                <div className="BookBody">
                    <div className="CheckInBook">
                        <label>Check In</label>
                        <DatePicker
                            selected={this.state.startDate}
                            selectsStart
                            startDate={this.state.startDate}
                            minDate={moment()}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeStart}/>
                    </div>
                    <div className="CheckOutBook">
                            <label>Check Out</label>
                            <DatePicker
                                selected={this.state.endDate}
                                selectsEnd
                                startDate={this.state.startDate}
                                minDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeEnd} />
                        </div>
                        <div className="GuestsBook">
                            <label>Guests</label>
                            <input type="number" min={0} max={this.props.maxGuests} />
                        </div>
                    </div>
                    <div className="BookBottom">
                        <input type="submit" value="Request To Book" />
                    </div>
                </div>
                )
    }

}