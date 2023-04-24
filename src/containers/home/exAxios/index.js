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

class ExAxios extends Component {

    state = {

    }

    constructor(props) {
        super(props);
        console.log("--constructor--数据的初始化");
        console.log("父组件传的参数=", this.props);
        // study: http请求
        customAxios.get('http://geek.itheima.net/v1_0/channels')
        .then((response) => {
            console.log("then=", response);
        })
        .catch(error => {
            console.log("catch=", error);
        });
    }

    render() {

      return (
        <div>++++自定义Axios++++</div>
      );
    }
}

export default withRouter(ExAxios);