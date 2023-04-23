import React, {Component} from 'react';
// 状态管理
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as niceActions from '~/redux/reduces/nice.js';

import { HashRouter as Router, Route, Switch, Redirect, Link, NavLink, withRouter } from 'react-router-dom';

import { Modal } from 'antd';

@connect(
    state => ({nice: state.nice}),
    dispatch => bindActionCreators(niceActions, dispatch)
)

class AddModal extends Component {

    state = {
        isModalOpen: false
    }

    constructor(props) {
        super(props);
    }
    openWay() {
        console.log("--打开窗口--", this)
        this.setState({
            isModalOpen: true
        })
    }
    // 确定
    handleOk() {
        this.setState({
            isModalOpen: false
        })
    }
    // 取消
    handleCancel() {
        this.setState({
            isModalOpen: false
        })
    }

    render() {
        const {
            state: { isModalOpen },
            props: { children }
        } = this
      return (
        <React.Fragment>
            {/* 
                children是插槽    类似vue的slot插槽
            */}
            <span onClick={this.openWay.bind(this)}>++{children}++</span>
            <Modal title="Basic Modal" open={isModalOpen} onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </React.Fragment>
      );
    }
}

export default withRouter(AddModal);
