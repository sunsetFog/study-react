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

class lifeCycle extends Component {
    /*
        数据
     */
    state = {
        painting: '画画'
    }
    /*
        完成了React数据的初始化，还未渲染DOM，它接受两个参数：props和context，当想在函数内部使用这两个参数时，需使用super()传入这两个参数。
     */
    constructor(props) {
        super(props);
        console.log("--constructor--数据的初始化");
        this.state.fruit = '水果';
    }
    /*
        一般用的比较少，它更多的是在服务端渲染时使用。它代表的过程是组件已经经历了constructor()初始化数据后，但是还未渲染DOM时。
     */
    componentWillMount() {
      console.log("--componentWillMount--");
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
    /*
        普通方法
        this是undefined
        改变this指向  .bind(this)
     */
    waterWay(event) {
        event.preventDefault();// 阻止默认行为
        console.log("--waterWay--", event);
        this.setState({
            painting: '画啥'
        });
        console.log("地道道=this.state", this.state);
    }
    /*
        生成的dom结构
     */
    render() {
        console.log("积极健康=this.props", this.props);
        console.log("叽叽叽叽=this.state", this.state);
        console.log("就算是可=this", this);
      return (
        <div onClick={this.waterWay.bind(this)}>++++生命周期++++</div>
      );
    }
}

export default withRouter(lifeCycle);