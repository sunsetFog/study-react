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

    state = {
        hill: '山6',
        water: '水6',
        message: '父组件的数据'
    }

    constructor(props) {
        super(props);
        console.log("--constructor--数据的初始化");
    }

    componentDidMount() {
        console.log("--componentDidMount--渲染完成");
        console.log("--打印this--", this);
        console.log("ref指向Dom，this里建属性", this.inputName.value)
        console.log("ref指向Dom", this.refs.fruit);
    }

    UNSAFE_componentWillReceiveProps() {
        console.log("--UNSAFE_componentWillReceiveProps--props改变才触发，父子组件传参用");
    }
    peach = () => {
        console.log("peach=");
        this.setState({
            hill: '变桃子'
        })
    }

    render() {
        const { hill, water } = this.state;
        let draw = {
            hill: hill,
            water: water,
            flower: function(value) {
                console.log("子传父", value);
            }
        }

      return (
        <section>
            ++++父组件++++
            <br/>
            {/* 
                ref指向Dom, 就可以this.inputName.value
            */}
            <input type="text" ref={(input) => {this.inputName = input}} defaultValue="哈喽"></input>
            <div ref="fruit">
                可可
            </div>

            <button onClick={this.peach.bind(this)}>修改父数据</button>
            {/* 
                hill参数会注入this.props对象里
                {...draw} 简写   注入对象所有
                Son用不了ref
            */}
            {/* <Son water={12}></Son> */}
            
            <DefineContext.Provider value={this.state.message}>

                <Son {...draw}></Son>
            
            </DefineContext.Provider>
            

            
        </section>
      );
    }
}

export default withRouter(Father);