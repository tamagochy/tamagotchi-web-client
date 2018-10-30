import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import PetState from '../components/PetState';
import Rooms from '../components/Rooms';
import Authorization from '../components/Authorization'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid p-3">
                    <Route exact path="/" component={Authorization} />
                    <Route exact path="/home" component={PetState} />
                    <Route exact path="/home" component={Rooms} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
