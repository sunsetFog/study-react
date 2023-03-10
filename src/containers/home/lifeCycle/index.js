import React, {Component} from 'react';
import * as ReactDOM from 'react-dom';
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
        组件被称之为状态机 通过更新state来更新组件的视图展示
        区分state和props属性
            state 组件内部可以变化的数据
            props 组件外部传递内部的数据，只读，不改变
     */
    state = {
        painting: '画画'
    }
    /*
        创建对象并初始化state
        完成了React数据的初始化，还未渲染DOM，它接受两个参数：props和context，当想在函数内部使用这两个参数时，需使用super()传入这两个参数。
     */
    constructor(props) {
        super(props);
        console.log("--constructor--初始化渲染顺序1");
        this.state.fruit = '水果';
    }
    /*
        将要插入虚拟dom
        一般用的比较少，它更多的是在服务端渲染时使用。它代表的过程是组件已经经历了constructor()初始化数据后，但是还未渲染DOM时。
     */
    componentWillMount() {
      console.log("--componentWillMount--初始化渲染顺序2");
    }
    /*
        已经插入虚拟DOM，渲染完成
        组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
     */
    componentDidMount() {
        console.log("--componentDidMount--初始化渲染顺序4");
    }
    /*
        将要组件的卸载和数据的销毁
     */
    componentWillUnmount () {
        console.log("--componentWillUnmount--移除组件");
    }
    /*
        将要更新回调
     */
    componentWillUpdate() {
        console.log("--componentWillUpdate--每次更新state顺序1");
    }
    /*
        已经更新回调
     */
    componentDidUpdate() {
        console.log("--componentDidUpdate--每次更新state顺序3");
    }
    /*
        this.setState的一道关卡
        返回true，this.setState生效
        返回false，this.setState不生效
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log("--shouldComponentUpdate--setState的一道关卡", nextProps, "---", nextState);
        return true;
    }
    /*
        props改变才触发，父子组件传参用
     */
    componentWillReceiveProps() {
        console.log("--componentWillReceiveProps--props改变才触发，父子组件传参用");
    }





    /*
        普通方法
        this是undefined
        改变this指向当前的组件实例对象---方式1  .bind(this)
     */
    waterWay(event) {
        event.preventDefault();// 阻止默认行为
        console.log("--waterWay--", event);
        this.setState({
            painting: '画啥'
        });
        console.log("地道道=this.state", this.state);
    }
    unloadWay() {
        ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    }
    fabulous(event, num) {
        console.log("改变this指向当前的组件实例对象---方式2", this);
        console.log("获取事件对象=", event)
        console.log("事件绑定并传递额外参数=", num);
    }
    /*
        用于插入虚拟DOM
     */
    render() {
        console.log("--render--初始化渲染顺序3--每次更新state顺序2");
        // console.log("积极健康=this.props", this.props);
        // console.log("叽叽叽叽=this.state", this.state);
        // console.log("就算是可=this", this);
      return (
        <div>
            ++++生命周期++++
            <br/>
            <button onClick={(event)=>this.fabulous(event, 999)}>事件绑定并改变this指向</button>
            <br/>
            <button onClick={this.waterWay.bind(this)}>更新state</button>
            <br></br>
            <button onClick={this.unloadWay.bind(this)}>卸载组件</button>
        </div>
      );
    }
}

export default withRouter(lifeCycle);