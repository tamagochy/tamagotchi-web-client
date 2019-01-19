import React, {Component} from 'react';

class ChangeRoom extends Component {
  render() {
    return (
      <div className="col-1">
        <button type="button" className="btn btn-light btnr" onClick={this.props.handler}>
          <img className="btn-image" src={this.props.image} alt="Перейти в комнату"/>
        </button>
      </div>
    );
  }
}

export default ChangeRoom;
