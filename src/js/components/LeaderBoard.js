import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {leaveTopPlayers, loadTopPlayers} from "../actions";

class LeaderBoard extends Component {
  componentDidMount() {
    if (!this.props.top) {
      this.props.loadTopPlayers();
    }
  }

  onGoHome = () => this.props.leaveTopPlayers();

  leaderBoardTable = () => this.props.top ? (
    <table className="leader-board-table">
      <tr>
        <th>Имя игрока</th>
        <th>Игровой счет</th>
      </tr>
      {this.props.top.map(p => (
        <tr key={p.login}>
          <td>{p.login}</td>
          <td>{p.value}</td>
        </tr>
      ))}
    </table>
  ) : (
    <div>Загрузка лидеров...</div>
  );

  render() {
    return (
      <div className='leader-board'>
        <h1>Список лидеров</h1>
        {this.leaderBoardTable()}
        <div>
          <button type="button" className='btn btn-light' onClick={this.onGoHome}>
            Вернуться к питомцу
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  top: state.topPlayers
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {loadTopPlayers, leaveTopPlayers},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);
