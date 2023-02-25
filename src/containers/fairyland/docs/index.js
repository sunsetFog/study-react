import React, {Component} from 'react';
import Documentation from '~/components/documentation';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '~/redux/reduces/home';

import { HashRouter as Router, Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class Docs extends Component {
  state = {
  };
  componentWillUnmount() {
    const {initalLogo} = this.props;
    initalLogo();
  }
  render() {
    return (
      <Documentation />
    );
  }
}

export default withRouter(Docs);
