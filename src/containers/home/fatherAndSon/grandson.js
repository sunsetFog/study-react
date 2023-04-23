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


class Grandson extends Component {

    state = {

    }

    constructor(props) {
        super(props);
        console.log("--constructor--Grandson数据的初始化", this);
        
    }
    

    render() {
        
      return (
        <div>
            ++++++++++++++++++++++++孙子组件++++++++++++++++++++++++
            <DefineContext.Consumer>
                {value => <div>---{value}---</div>}
            </DefineContext.Consumer>
        </div>
      );
    }
}

export default withRouter(Grandson);