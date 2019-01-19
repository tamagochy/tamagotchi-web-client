import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {loadTopPlayers, goHome} from "../actions";

class LeaderBoard extends Component {
  componentDidMount() {
    if (!this.props.top) {
      this.props.loadTopPlayers();
    }
  }

  onGoHome = () => this.props.goHome();

  render() {
    const view = this.props.top ? (
      this.props.top.map(p => (
        <div key={p.login} className='row'>
          <div className='col-6'>{p.login}</div>
          <div className='col-6'>{p.value}</div>
        </div>
      ))
    ) : (
      <div>Loading...</div>
    );

    return (
      <div className='leader-board'>
        {view}
        <div>
          <div className='btn' onClick={this.onGoHome}>Вернуться</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  top: state.topPlayers
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {loadTopPlayers, goHome},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);
