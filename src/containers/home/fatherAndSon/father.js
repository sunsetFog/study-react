import React, {Component} from 'react';
// 状态管理
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as niceActions from '~/redux/reduces/nice.js';

import { HashRouter as Router, Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';

// 引入子组件  名字要大写
import Son from './son';


@connect(
    state => ({nice: state.nice}),
    dispatch => bindActionCreators(niceActions, dispatch)
)

class Father extends Component {
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
        console.log("--constructor--数据的初始化");
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
    render() {

      return (
        <section>
            ++++父组件++++
            <br/>
            <Son param1={123} param2="c" func1={()=>{console.log('func1')}} ></Son>
        </section>
      );
    }
}

export default withRouter(Father);