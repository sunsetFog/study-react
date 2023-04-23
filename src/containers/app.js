import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from '~/assets/logo.png';
import * as homeActions from '../redux/reduces/home';

import { HashRouter as Router, Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class App extends Component {
  state = {
  }
  UNSAFE_componentWillMount() {

  }

  render() {

    return (
      <div className="app-vue" style={{height: '100%'}}>

        {/* 
            路由视图
         */}
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(App);
