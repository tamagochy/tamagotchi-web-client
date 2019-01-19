import React, {Component} from 'react';

class Indicator extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-6 animated slideInLeft'>{this.props.name}</div>
        <div className='col-6'>
          <div className="progress animated fadeIn">
            <div className="grayback" style={{left: this.props.value + '%'}}/>
            <div className="strips"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Indicator;
