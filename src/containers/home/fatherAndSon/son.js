import React, {Component} from 'react';
// 状态管理
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as niceActions from '~/redux/reduces/nice.js';

import { HashRouter as Router, Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';

/*
在react官网搜索propTypes
 */
import  PropTypes  from  'prop-types'  


@connect(
    state => ({nice: state.nice}),
    dispatch => bindActionCreators(niceActions, dispatch)
)

class Son extends Component {
    // 指定props类型
    static propTypes = {
        hill: PropTypes.string
    }
    // props默认值
    static defaultProps = {
        hill: 'props默认值'
    }

    state = {

    }

    constructor(props) {
        super(props);
        console.log("--constructor--Son数据的初始化");
        console.log("父组件传的参数=", this.props);
    }

    // 子传父也是用props属性
    cakes() {
        this.props.flower('子组件参数');
    }
    render() {
        const { hill } = this.props;
      return (
        <div>
            ++++++++++++++++++++++++子组件++++++++++++++++++++++++
            <br/>
            父组件数据：{hill}
            <br/>
            <button onClick={this.cakes.bind(this)}>子传父</button>
        </div>
      );
    }
}

export default withRouter(Son);