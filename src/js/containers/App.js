import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {Router} from "react-router";
import PetState from '../components/PetState';
import Rooms from '../components/Rooms';
import Authorization from '../components/Authorization'
import history from '../util/history';
import AuthorizedUser from "../components/AuthorizedUser";
import CreatePetDialog from "../components/CreatePetDialog";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container-fluid p-3">
          <AuthorizedUser/>
          <CreatePetDialog/>
          <Route exact path="/" component={Authorization}/>
          <Route exact path="/home" component={PetState}/>
          <Route exact path="/home" component={Rooms}/>
        </div>
      </Router>
    );
  }
}

export default App;
