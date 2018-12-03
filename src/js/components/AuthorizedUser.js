import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class AuthorizedUser extends Component {
  componentDidMount() {
    this.checkAndRedirect();
  }

  componentDidUpdate() {
    this.checkAndRedirect();
  }

  checkAndRedirect() {
    const pathname = this.props.history.location.pathname;
    if (!this.props.authorized && (pathname !== '/')) {
      this.props.history.push('/');
    }
  };

  render() {
    return '';
  }
}

const mapStateToProps = state => ({
  authorized: state.authorized
});

export default withRouter(connect(mapStateToProps, null)(AuthorizedUser));
