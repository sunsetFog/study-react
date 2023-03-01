import React, {Component} from 'react';
// 状态管理
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as niceActions from '~/redux/reduces/nice.js';

import { HashRouter as Router, Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';


@connect(
    state => ({nice: state.nice}),
    dispatch => bindActionCreators(niceActions, dispatch)
)

class ExCache extends Component {

    state = {

    }

    constructor(props) {
        super(props);
        window.sessionStorage.setItem("road", "道路");
        let road = window.sessionStorage.getItem("road");
        console.log("session缓存=", road);
        window.localStorage.setItem("flower", "花");
        let flower = window.localStorage.getItem("flower");
        console.log("localStorage缓存=", flower);
    }

    render() {

      return (
        <div>++++缓存++++</div>
      );
    }
}

export default withRouter(ExCache);