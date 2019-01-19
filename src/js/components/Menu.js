import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {logout, toggleMenu, goTopPlayers} from "../actions";

class Menu extends Component{

  toggle = () => this.props.toggleMenu();

  onSelectTopPlayers = () => {
    this.toggle();
    this.props.goTopPlayers();
  };

  onLogout = () => this.props.logout();

  render() {
    if (!this.props.authorized) {
      return '';
    }
    const buttonClass = 'burger-menu' + (this.props.opened ? ' menu-on' : '');
    const menuClass = 'menu' + (this.props.opened ? ' opened' : '');
    return (
      <div>
        <div className={buttonClass} onClick={this.toggle}>
          <div className='burger'/>
        </div>
        <div className={menuClass}>
          <div className='menu-item' onClick={this.onSelectTopPlayers}>Список лидеров</div>
          <div className='menu-item' onClick={this.onLogout}>Закончить играть</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authorized: state.authorized,
  opened: state.menuOpened
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {logout, toggleMenu, goTopPlayers},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
