import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import News from './News'
import Reservations from '../reservations/Reservations'
import Home from '../home/Home'
import LocationPage from '../locationpage/LocationPage'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class App extends Component {

    render() {
        return (
            <Router>
                <div className="app">
                <Header />
                <Route path="/Location/:id" component={LocationPage}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Contact" component={Contact}/>
                <Route exact path="/News" component={News}/>
                <Route exact path="/Reservations" component={Reservations}/>
                <Footer/>
                </div>
            </Router>
        )
    }

}