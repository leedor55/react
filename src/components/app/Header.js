import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Header extends Component {
    
    render() {
        return (
        
        <div className="header">
            <ul className="nav">
                <li className="logo"><img src="/static/icons/logo.png" width='80px' height='80px' className="thelogo"/> Bamba</li>
                <li><Link to="/News">News</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Reservations">Reservations</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </div>
        )
    }
    
}