import React, {Component} from 'react';
// 状态管理
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as niceActions from '~/redux/reduces/nice.js';

import { HashRouter as Router, Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';

/*
在react官网搜索propTypes
 */
import  PropTypes  from  'prop-types';

import Grandson from './grandson';


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
        peach: this.props.hill
    }

    constructor(props) {
        super(props);
        console.log("--constructor--Son数据的初始化");
        console.log("父组件传的参数=", this.props);
    }
    /*
        getDerivedStateFromProps组件生命周期，调用 render 方法之前调用
        父传子
        作用：props变化时更新state
        https://www.runoob.com/react/react-ref-getderivedstatefromprops.html
    */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("--props变化时更新state--", nextProps, "---", prevState);
        return {
            peach: nextProps.hill,
        }
    }

    // 子传父也是用props属性
    cakes() {
        this.props.flower('子组件参数');
    }
    render() {
        const {
            state: { peach },
            props: { hill }
        } = this
      return (
        <div>
            ++++++++++++++++++++++++子组件++++++++++++++++++++++++
            <br/>
            父组件数据：{peach}
            <br/>
            <button onClick={this.cakes.bind(this)}>子传父</button>
            <br></br>
            <Grandson></Grandson>
        </div>
      );
    }
}

export default withRouter(Son);