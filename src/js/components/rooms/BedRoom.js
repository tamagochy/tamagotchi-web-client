import React, {Component} from 'react';
import SleepAction from '../SleepAction';

class BedRoom extends Component {
  sleep = () => this.props.sleep();

  render() {
    return (
      <div className='actions animated fadeIn'>
        <SleepAction/>
      </div>
    )
  }
}

export default BedRoom;
