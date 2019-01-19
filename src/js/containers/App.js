import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {Router} from "react-router";
import Home from '../components/Home';
import Authorization from '../components/Authorization'
import Registration from '../components/Registration'
import history from '../util/history';
import AuthorizedUser from "../components/AuthorizedUser";
import CreatePetDialog from "../components/CreatePet";
import LeaderBoard from "../components/LeaderBoard";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container-fluid p-3">
          <AuthorizedUser/>
          <Route exact path="/" component={Authorization}/>
          <Route path="/register" component={Registration}/>
          <Route path="/home" component={Home}/>
          <Route path="/create" component={CreatePetDialog}/>
          <Route path="/top" component={LeaderBoard}/>
        </div>
      </Router>
    );
  }
}

export default App;
