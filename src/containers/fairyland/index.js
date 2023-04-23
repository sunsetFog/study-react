import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from '~/assets/logo.png';
import * as homeActions from '~/redux/reduces/home';

import { HashRouter as Router, Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class Fairyland extends Component {
  state = {
  }
  UNSAFE_componentWillMount() {
    const {initalLogo} = this.props;
    initalLogo();
    console.log("home=", this.props);
  }
  handleBrowserChange = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/fairyland/docs');
  }
  render() {

    return (
      <div className="home" style={{paddingTop: 0}}>
        <div className={`center logo-move`} onClick={this.handleBrowserChange}>
          <div className="logo-box">
            <img src={logo} className="logo" />
          </div>
          <h1>React Project</h1>
        </div>
        <div style={{width: '1000px', margin: '0 auto'}}>
            {/* 
                study: 二级路由，方式2
                路由视图
                要是函数组件没有this {props.children}
             */}
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default withRouter(Fairyland);
