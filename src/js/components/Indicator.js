import React, {Component} from 'react';

import thermometerImg from '../../img/thermometer.png';

class Indicator extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-5 animated slideInLeft'>{this.props.name}</div>
        <div className='col-6'>
          <div className="progress animated fadeIn">
            <div className="grayback" style={{left: this.props.value + '%'}}/>
            <div className="strips"/>
          </div>
        </div>
        <div className="col-1 animated fadeIn">
          {this.props.showIndicator ? (
            <img className="disease-indicator-img"
                 onClick={this.props.indicatorHandler}
                 src={thermometerImg}
                 alt="Индикатор болезни"/>
          ) : ''}
        </div>
      </div>
    );
  }
}

export default Indicator;
