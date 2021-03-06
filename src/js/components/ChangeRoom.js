import React, {Component} from 'react';

class ChangeRoom extends Component {

  onChange = () => {
    if (this.props.enabled) {
      this.props.handler();
    }
  };

  render() {
    const className = 'btn btn-light btnr' + (!this.props.enabled ? ' room-disabled' : '');
    return (
      <div className="col-1 d-flex justify-content-center">
        <button type="button" className={className} onClick={this.onChange} title={this.props.description}>
          <img className="btn-image" src={this.props.image} alt="Перейти в комнату"/>
        </button>
      </div>
    );
  }
}

export default ChangeRoom;
