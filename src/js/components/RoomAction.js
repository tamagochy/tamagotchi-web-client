import React, {Component} from 'react';

class RoomAction extends Component {

  perform = () => this.props.handler(this.props.action.code, this.props.action.room);

  render() {
    return (
      <button type="button" className="btn btn-light action" onClick={this.perform}>
        {this.props.action.description}
      </button>
    );
  }
}

export default RoomAction;
