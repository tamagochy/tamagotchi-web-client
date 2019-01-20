import React, { Component } from 'react';
import { relative } from 'path';

class RoomAction extends Component {

  perform = () => this.props.handler(this.props.action.code, this.props.action.room);

  render() {
    return (
      <div className="col-2 d-flex justify-content-center">
        <button type="button" className="btn action btn-action btn-light" onClick={this.perform}>
          {this.props.action.description}
        </button>
      </div>
    );
  }
}

export default RoomAction;
