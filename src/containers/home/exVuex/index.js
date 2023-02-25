import React, {Component} from 'react';
// 状态管理  bindActionCreators在API文档
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as niceActions from '~/redux/reduces/nice.js';

import { HashRouter as Router, Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';

import { Button } from 'antd';

// 引入vuex   Store在API文档
import Store from '~/redux';

// 这步能在this.props里使用state，action方法
@connect(
    state => ({nice: state.nice}),// this.props对象里加state属性
    dispatch => bindActionCreators(niceActions, dispatch)// this.props对象里加action方法
)

class ExVuex extends Component {
    /*
        数据
     */
    state = {

    }
    /*
        完成了React数据的初始化，还未渲染DOM，它接受两个参数：props和context，当想在函数内部使用这两个参数时，需使用super()传入这两个参数。
     */
    constructor(props) {
        super(props);
        console.log("--constructor--数据的初始化", this);
        console.log("vuex-state=", Store.getState());
    }
    /*
        组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
     */
    componentDidMount() {
        console.log("--componentDidMount--渲染完成");
    }
    /*
        完成组件的卸载和数据的销毁
     */
    componentWillUnmount () {
        console.log("--componentWillUnmount--卸载");
    }

    changeApple() {
        // 调用action方法
        // 方法一：用this.props
        // this.props.changeApple({ water: '冰' });

        // 方法二：直接到顺序2
        Store.dispatch({type: 'set_userinfo', water: '冰' });

        console.log("--changeApple--", this);
    }

    render() {
        console.log("--dom更新--", this.props);

      return (
        <div>++++状态管理++++
            <br/>
            <Button type="primary" onClick={this.changeApple.bind(this)}>调用changeApple</Button>
        </div>
      );
    }
}

export default withRouter(ExVuex);