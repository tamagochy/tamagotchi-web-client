import React, {Component} from "react";
import PetState from './PetState'
import CurrentRoom from './CurrentRoom'
import RoomButtons from './RoomButtons'
import Menu from "./Menu";

class Home extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <PetState/>
        <CurrentRoom/>
        <RoomButtons/>
      </div>
    );
  }
}

export default Home;
