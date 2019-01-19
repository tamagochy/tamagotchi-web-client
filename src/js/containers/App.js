import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {Router} from "react-router";
import Rooms from '../components/MainScreen';
import Authorization from '../components/Authorization'
import Registration from '../components/Registration'
import history from '../util/history';
import AuthorizedUser from "../components/AuthorizedUser";
import CreatePetDialog from "../components/CreatePetDialog";
import LogoutButton from "../components/LogoutButton";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container-fluid p-3">
          <AuthorizedUser/>
          <CreatePetDialog/>
          <Route exact path="/" component={Authorization}/>
          <Route exact path="/" component={Registration}/>
          <Route exact path="/home" component={Rooms}/>
          <LogoutButton/>
        </div>
      </Router>
    );
  }
}

export default App;
